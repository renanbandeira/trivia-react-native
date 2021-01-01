import { AsyncStorage } from "react-native";

export const storeData = async (key, value) => {
 try {
   await AsyncStorage.setItem(`@trivia:${key}`, String(value));
 } catch (error) {
   console.log(error);

};

export const retrieveData = async key => {
 try {
   const value = await AsyncStorage.getItem(`@trivia:${key}`);
   if (value !== null) {
     return value;

 } catch (error) {
   console.log(error);

};
