import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import {NativeBaseProvider, extendTheme} from "native-base"

import "react-native-gesture-handler"


import AppLoading from 'expo-app-loading';

//fotn from expo
import {
  useFonts,
  BalsamiqSans_400Regular,
  BalsamiqSans_400Regular_Italic,
} from "@expo-google-fonts/balsamiq-sans"

//import Container
import Container from './Container';

export default function App() {

  // // //Load font with Expo
  // let [fontsLoaded] =useFonts({
  //   BalsamiqSans_400Regular,
  //   BalsamiqSans_400Regular_Italic,
  // })

  // // //setup font
  // const fontConfig={
  //   BalsamiqSans:{
  //     400:{
  //       normal : "BalsamiqSans_400Regular",
  //       italic : "BalsamiqSans_400Regular_italic",
  //     }
  //   }
  // }

  // // //setup theme
  // const customColor ={
  //   primary: {
  //     50: '#E3F2F9',
  //     100: '#C5E4F3',
  //     200: '#A2D4EC',
  //     300: '#7AC1E4',
  //     400: '#47A9DA',
  //     500: '#0088CC',
  //     600: '#007AB8',
  //     700: '#006BA1',
  //     800: '#005885',
  //     900: '#003F5E',
  //   },
  //   // Redefinig only one shade, rest of the color will remain same.
  //   amber: {
  //     400: '#d97706',
  //   },
  // }

  // // // Configuration Native Base Custom Theme
  // const theme = extendTheme({
  //   colors: customColor,
  //   fontConfig,
  //   fonts: {
  //     heading: "BalsamiqSans",
  //     body: "BalsamiqSans",
  //     mono: "BalsamiqSans",
  //   },
  //   config: { initialColorMode: "dark" },
  // });

  // if (!fontsLoaded) {
  //   return <AppLoading />;
  // }else{
  //   return (
  //     <NativeBaseProvider theme={theme}>
  //       <Container/>
  //     </NativeBaseProvider>
  //   );
  // }
  return(
    <NativeBaseProvider >
      <Container/>
    </NativeBaseProvider>
  )
}


