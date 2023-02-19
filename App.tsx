import React from 'react';

import { useColorScheme } from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper';
import { ThemeGenerator } from './src/common/styles';
import Main from './src/views/Main';

function App(): JSX.Element {
  const theme = ThemeGenerator(useColorScheme() || 'light');

  return (
    <PaperProvider theme={theme}>
      <Main />
    </PaperProvider>
  );
}

export default App;
