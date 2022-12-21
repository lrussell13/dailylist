import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import Main from './src/screens/Main';
import WelcomeScreen from './src/screens/WelcomeScreen';
import CreateTask from './src/screens/CreateTask';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faCheck } from '@fortawesome/free-solid-svg-icons/faCheck';


library.add(faCheck);

export default function App() {
  return (
    <CreateTask />
  );
}

const styles = StyleSheet.create({

});
