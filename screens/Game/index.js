import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect, useMemo, useCallback } from 'react';
import * as Animatable from 'react-native-animatable';
import { StyleSheet, Text, View, TouchableOpacity, Alert, ToastAndroid, ScrollView } from 'react-native';
import DialogInput from 'react-native-dialog-input';


import styles from './styles';
import { Header } from '../../components'

import { fetchQuestions } from '../../api';

const QUESTION_THRESHOLD = 5;

const animations = [ 'slideInLeft', 'slideInRight'];

export default function Game({ navigation }) {
  const [isFetchinngQuestions, setIsFetchingQuestions] = useState(true);
  const [isNameInputVisible, setIsNameInputVisible] = useState(false);
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  useEffect(() => {
    if (currentQuestion === 0 || currentQuestion === questions.length - QUESTION_THRESHOLD ) {
      const fetchData = async () => {
        const fetchedQuestions = await fetchQuestions();
        if (fetchedQuestions.length === 0) {
          ToastAndroid.show("Could not fetch questions!", ToastAndroid.SHORT);
          navigation.goBack();
        } else {
          setQuestions([...questions, ...fetchedQuestions]);
          setIsFetchingQuestions(false);
        }
      };
      setIsFetchingQuestions(true);
      fetchData();
    }
  }, [currentQuestion]);

  const dismissDialog = useCallback(() => {
    navigation.goBack();
  }, []);

  const showNameInputDialog = useCallback(() => {
    setIsNameInputVisible(true);
  }, []);

  const submitDialog = useCallback((name) => {
    if (name) {
      dismissDialog();
    }
  });

  const onAnswerSelected = useMemo(() => questions.length && questions.length > currentQuestion ? questions[currentQuestion].answers.map((answer) => () => {
    if (questions[currentQuestion].correctAnswer === answer) {
      ToastAndroid.show(`Correct Answer!`, ToastAndroid.SHORT);
      setCurrentQuestion(currentQuestion + 1);
    } else {
      ToastAndroid.show(`Wrong Answer!`, ToastAndroid.SHORT);
      showNameInputDialog();
    }
  }) : [], [questions, currentQuestion]);

  const confirmExit = () => Alert.alert('Exit', 'Are you sure you want to exit the game?',
    [{
      text: 'Yes',
      onPress: showNameInputDialog
    },
    {
      text: 'No'
    }], { cancelable: true });

  if (isFetchinngQuestions && currentQuestion === questions.length) {
    return (
      <View style={styles.container}>
        <Header />
        <View style={styles.questionContainer}>
          <Text style={styles.question}>Loading Questions...</Text>
        </View>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.progress}>
        <Animatable.Text animation="slideInDown" key={`${currentQuestion}_progress`} iterationCount={1} direction="normal" style={styles.progressText}>
          Question {currentQuestion + 1}
        </Animatable.Text>
      </View>
      <View style={styles.questionContainer}>
        <Animatable.Text animation="slideInDown" key={`${currentQuestion}_title`} iterationCount={1} direction="normal" style={styles.question}>
          {questions[currentQuestion].question}
        </Animatable.Text>
      </View>
      <ScrollView style={{ width: '100%' }}>
        <View style={styles.optionsContainer}>
          {questions[currentQuestion].answers.map((answer, index) => (
            <TouchableOpacity key={answer} style={{width: '100%', justifyContent: 'center', flexDirection: 'row' }} onPress={onAnswerSelected[index]}>
              <Animatable.View animation={animations[index % 2]} iterationCount={1} direction="normal" style={styles.optionButton}>
              <Text style={styles.option}>{answer}</Text>
              </Animatable.View>
          </TouchableOpacity>))}
        </View>
      </ScrollView>
      <View style={styles.bottomContainer}>
        <TouchableOpacity onPress={confirmExit}>
          <Text style={styles.exitGame}>Exit</Text>
        </TouchableOpacity>
      </View>
      <DialogInput isDialogVisible={isNameInputVisible}
            title={`Score: ${currentQuestion + 1}`}
            message="Type your name to be saved in Ranking"
            hintInput="Name"
            submitInput={ submitDialog }
            closeDialog={ dismissDialog }>
      </DialogInput>
    </View>
  );
}