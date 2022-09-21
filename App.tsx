import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Dasboard } from './src/pages/Dashboard';
import theme from './src/global/styles/theme';

import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_700Bold,
} from '@expo-google-fonts/poppins';

export default function App() {
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold,
  });

  console.log(fontsLoaded);

  return (
    <ThemeProvider theme={theme}>
      <Dasboard />
    </ThemeProvider>
  );
}