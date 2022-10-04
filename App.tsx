import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Dasboard } from './src/pages/Dashboard';
import { Register } from './src/pages/Register';
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

  return (
    <ThemeProvider theme={theme}>
      <Register />
    </ThemeProvider>
  );
}