import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import NewNumberForm from './NewNumberForm/NewNumberForm/NewNumberForm.view';


export default function App() {
  return (
    

    <View style={styles.container}>
      <NewNumberForm/>
    </View>
   
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
