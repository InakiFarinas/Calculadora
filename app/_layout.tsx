import { styles_globales } from '@/styles/styles_globales';
import { useFonts } from 'expo-font';
import { Slot } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View } from 'react-native';

const RootLayout = () => {
  const [cargada] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });
  if (!cargada) {
    return null;
  }
  return (
    <View style={styles_globales.fondo}>
      <Text>RootLayout</Text>

      <Slot />
      <StatusBar style="auto" />
    </View>
  );
};

export default RootLayout;
