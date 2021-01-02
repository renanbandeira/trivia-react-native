import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { Text, View, TouchableOpacity, Alert } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';


import styles from './styles';
import { Header } from '../../components'

import { hasRanking } from '../../storage';

export default function Home({ navigation }) {
  const [hasRankingData, setHasRankingData] = useState(false);
  const generateAboutModal = () => Alert.alert('About', 'Developed by Renan Bandeira \n GitHub repo: https://github.com/renanbandeira/trivia-react-native', [{
    text: 'OK'
  }], { cancelable: true });
  useFocusEffect(() => {
    const fetchHasRankingData = async () => {
      const rankingDataIsNotEmpty = await hasRanking();
      setHasRankingData(rankingDataIsNotEmpty);
    }
    fetchHasRankingData();
  }, []);
  const playGame = () => navigation.navigate('Game');
  const goToRanking = () => navigation.navigate('Ranking');
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.menu}>
        <TouchableOpacity onPress={playGame}>
          <Text style={styles.button}>PLAY!</Text>
        </TouchableOpacity>
        {hasRankingData ? <TouchableOpacity onPress={goToRanking}>
          <Text style={styles.button}>RANKING</Text>
        </TouchableOpacity> : null}
        <TouchableOpacity onPress={generateAboutModal}>
          <Text style={styles.button}>ABOUT</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.bottomContainer}>
        <Text style={[styles.copyrightText, { color: "#3998DB" }]}>
          Development: Renan Bandeira
        </Text>
      </View>
    </View>
  );
}
