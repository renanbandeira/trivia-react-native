import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0a0a0a",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 100
  },
  questionContainer: {
    marginTop: 30,
    marginBottom: 50
  },
  optionsContainer: {
    width: '100%',
    flexDirection: 'column',
    justifyContent: "center",
    alignItems: "center"
  },
  optionButton: {
    width: '80%',
    marginBottom: 20,
    backgroundColor: '#fff',
  },
  progress: {
    marginTop: 10
  },
  progressText: {
    color: '#3998DB',
    fontSize: 20,
    textAlign: 'center',
    fontFamily: 'kindergarten',
    marginTop: 20,
    marginBottom: 20
  },
  option: {
    color: '#3998DB',
    fontSize: 20,
    textAlign: 'center',
    fontFamily: 'kindergarten',
    marginTop: 20,
    marginBottom: 20
  },
  question: {
    color: '#fff',
    fontSize: 25,
    textAlign: 'center',
    fontFamily: 'kindergarten'
  },
  bottomContainer: {
    position: 'absolute',
    right: 15,
    bottom: 12.5
  },
  exitGame: {
    color: '#f00',
    fontSize: 20,
    fontFamily: 'kindergarten',
    marginBottom: 2.5
  }
});
