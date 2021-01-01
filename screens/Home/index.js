import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Alert } from 'react-native';

import styles from './styles';
import { Header } from '../../components'

export default function Home() {
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.menu}>
        <TouchableOpacity onPress={() => Alert.alert('Play pressed')}>
          <Text style={styles.button}>PLAY!</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => Alert.alert('Ranking pressed')}>
          <Text style={styles.button}>RANKING</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => Alert.alert('About', 'Developed by Renan Bandeira \n GitHub repo: https://github.com/renanbandeira/trivia-react-native')}>
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
