import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0a0a0a",
    justifyContent: "center",
    alignItems: "center"
  },
  menu: {
    marginTop: 50
  },
  copyrightText: {
    fontSize: 16,
    fontFamily: "kindergarten",
    marginBottom: 2.5
  },
  bottomContainer: {
    position: "absolute",
    left: 15,
    right: 15,
    bottom: 12.5
  },
  button: {
    marginTop: 30,
    fontFamily: 'kindergarten',
    color: '#fff',
    textAlign: 'center',
    fontSize: 40,
    width: 300,
    height: 60
  }
});
