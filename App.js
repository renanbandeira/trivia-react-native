import React, { Fragment, useState, useEffect } from 'react';
import AppLoading from 'expo-app-loading';
import * as Font from 'expo-font';
import { StatusBar } from 'expo-status-bar';
import Routes from './screens/Routes'

export default function App() {
  const [isLoadingFont, setIsLoadingFont] = useState(true);
  useEffect(() => {
    async function fetchFont() {
      await Font.loadAsync({
       'kindergarten': require('./assets/fonts/kindergarten.ttf'),
     });
     setIsLoadingFont(false);
    }
    fetchFont();
  }, []);
  if (isLoadingFont) {
    return <AppLoading />;
  }
  return (
    <Fragment>
      <StatusBar barStyle="light-content" />
      <Routes />
    </Fragment>);
}
