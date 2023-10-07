import {
  DefaultTheme,
  Provider as PaperProvider,
} from 'react-native-paper';

export const theme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: '#ff7f41',
    accent: '#ededed',
    tertiary: '#000000',
  },
  // fonts: configureFonts({config: fontConfig}),
};
