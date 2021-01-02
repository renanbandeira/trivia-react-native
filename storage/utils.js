import { AsyncStorage } from "react-native";

export const storeData = async (key, value) => {
 try {
   await AsyncStorage.setItem(`@trivia:${key}`, String(value));
 } catch (error) {
   console.log('Error on storing data', error);
 }
};

export const retrieveData = async key => {
  try {
    // await AsyncStorage.clear();
    const value = await AsyncStorage.getItem(`@trivia:${key}`);
    if (value !== null) {
      return value;
    }
    return null;
  } catch (error) {
   console.log('', error);
  }
};

export const removeData = async key => {
  try {
    await AsyncStorage.removeItem(`@trivia:${key}`);
  } catch (error) {
   console.log('', error);
  }
};
