import { Audio } from 'expo-av';

export const initTapAudio = (setSound, sound, useEffect) => {
  const playSound = async () => {
    const { sound } = await Audio.Sound.createAsync(
       require('../assets/misc/button_tap.mp3')
    );
    setSound(sound);

    await sound.playAsync();
  }
  useEffect(() => {
    return sound
      ? () => {
          sound.unloadAsync(); }
      : undefined;
  }, [sound]);
  return {
    playSound
  }
};

export const initWinAudio = (setSound, sound, useEffect) => {
  const playSound = async () => {
    const { sound } = await Audio.Sound.createAsync(
       require('../assets/misc/win.mp3')
    );
    setSound(sound);

    await sound.playAsync();
  }
  useEffect(() => {
    return sound
      ? () => {
          sound.unloadAsync(); }
      : undefined;
  }, [sound]);
  return {
    playSound
  }
};

export const initLoseAudio = (setSound, sound, useEffect) => {
  const playSound = async () => {
    const { sound } = await Audio.Sound.createAsync(
       require('../assets/misc/lose.mp3')
    );
    setSound(sound);

    await sound.playAsync();
  }
  useEffect(() => {
    return sound
      ? () => {
          sound.unloadAsync(); }
      : undefined;
  }, [sound]);
  return {
    playSound
  }
};
