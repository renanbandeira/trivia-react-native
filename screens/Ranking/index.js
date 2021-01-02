import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { Text, View, TouchableOpacity, Alert, ScrollView, SafeAreaView } from 'react-native';
import * as Animatable from 'react-native-animatable';

import styles from './styles';
import { Header } from '../../components'

import { fetchRanking, clearRanking } from '../../storage';
import { initTapAudio } from '../../utils/sound';

export default function Ranking({ navigation }) {
  const [ranking, setRankingData] = useState([]);
  const [sound, setSound] = useState();
  const { playSound } = initTapAudio(setSound, sound, useEffect);
  useEffect(() => {
    const fetchRankingData = async () => {
      const rankingData = await fetchRanking();
      setRankingData(rankingData);
    }
    fetchRankingData();
  }, []);
  const clearRankingAndGoBack = async () => {
    await clearRanking();
    navigation.goBack();
  }
  const goBack = async () => {
    await playSound();
    navigation.goBack();
  }
  const confirmClear = async () => {
    await playSound();
    Alert.alert('Clear Ranking', 'Are you sure you want to clear the ranking records?',
    [{
      text: 'Yes',
      onPress: clearRankingAndGoBack
    },
    {
      text: 'No'
    }], { cancelable: true });
  }
  return (
    <View style={styles.container}>
      <Header />
      <View>
        <Text style={styles.title}>RANKING</Text>
      </View>
      <View style={styles.headerLegendContainer} key="ranking_header">
        <Text style={styles.headerText}>Name</Text>
        <Text style={styles.headerText}>Score</Text>
      </View>
      <SafeAreaView style={{ height: 300 }}>
        <ScrollView>
          {ranking.map((record, index) => (
            <Animatable.View animation="slideInDown" iterationCount={5} direction="alternate" style={styles.recordContainer} key={`${record.name}_${index}`}>
              <Text style={styles.record}>{record.name}</Text>
              <Text style={styles.recordScore}>{record.score}</Text>
            </Animatable.View>
          ))}
        </ScrollView>
      </SafeAreaView>
      <View style={styles.bottomContainer}>
        <TouchableOpacity onPress={goBack}>
          <Text style={styles.backButton}>Go back</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={confirmClear}>
          <Text style={styles.clearButton}>Clear Ranking</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
