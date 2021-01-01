import { StatusBar } from 'expo-status-bar';
import React, { useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Alert } from 'react-native';

import styles from './styles';
import { Header } from '../../components'

export default function Home({ navigation }) {
  const generateAboutModal = () => Alert.alert('About', 'Developed by Renan Bandeira \n GitHub repo: https://github.com/renanbandeira/trivia-react-native', [{
    text: 'OK'
  }], { cancelable: true });
  const playGame = () => navigation.navigate('Game');
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.menu}>
        <TouchableOpacity onPress={playGame}>
          <Text style={styles.button}>PLAY!</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => Alert.alert('Ranking pressed')}>
          <Text style={styles.button}>RANKING</Text>
        </TouchableOpacity>
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
