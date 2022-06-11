import React from 'react';
import { preventAutoHideAsync, hideAsync } from 'expo-splash-screen';
import { SafeAreaView, StatusBar } from 'react-native';

import Routes from './src/routes';

preventAutoHideAsync();
setTimeout(hideAsync, 4000);

export default function App() {
  return (
    <>
      <StatusBar animated barStyle="default" backgroundColor="#6A6A6A" />
      <SafeAreaView style={{ flex: 1 }}>
        <Routes />
      </SafeAreaView>
    </>
  );
}
