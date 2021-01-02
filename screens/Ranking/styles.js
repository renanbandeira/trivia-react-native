import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0a0a0a",
    justifyContent: "center",
    alignItems: "center"
  },
  title: {
    marginTop: 40,
    fontFamily: 'kindergarten',
    color: '#fff',
    textAlign: 'center',
    fontSize: 50,
    width: 300,
    height: 60
  },
  headerLegendContainer: {
    marginTop: 40,
    width: 320,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  recordContainer: {
    marginTop: 20,
    marginLeft: 10,
    marginRight: 10,
    width: 310,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  record: {
    fontFamily: 'kindergarten',
    color: '#fff',
    fontSize: 25,
    height: 50
  },
  recordScore: {
    fontFamily: 'kindergarten',
    color: '#fff',
    fontSize: 25,
    width: 50,
    height: 50
  },
  headerText: {
    fontFamily: 'kindergarten',
    color: '#fff',
    fontSize: 35,
    height: 60
  },
  bottomContainer: {
    position: 'absolute',
    left: 15,
    right: 15,
    bottom: 12.5,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  clearButton: {
    color: '#f00',
    fontSize: 20,
    fontFamily: 'kindergarten',
    marginBottom: 30
  },
  backButton: {
    color: '#68CC73',
    fontSize: 20,
    fontFamily: 'kindergarten',
    marginBottom: 30
  },
});
