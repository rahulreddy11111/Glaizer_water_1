/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import Main_screen from './src/Screens/Main_screen';
import Router from './src/navigation/Router';
//import Router from './src/navigation/Router';

import { Amplify, API } from 'aws-amplify';
import awsconfig from './src/aws-exports';

Amplify.configure(awsconfig);
import { withAuthenticator, useAuthenticator } from '@aws-amplify/ui-react-native';
import MyLottieAnimation from './src/Screens/index_dup';
import AddressScreen from './src/Screens/Esp_32activity';


function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style = {{height : '100%' , width : '100%'}}>
      {/* <MyLottieAnimation/> */}
      <Router/>
      {/* <AddressScreen/> */}
    </SafeAreaView>
  );
}

 export default withAuthenticator(App);
 //export default App;
