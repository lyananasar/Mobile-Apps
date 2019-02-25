import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Puteri Nur Liyana Nasaruddin 1610012</Text>
        <Text>I am a second student: Nur Aida Shazana Ahmad 1615504</Text>
        <Text> Hye, I am a third student : Siti Nur Farrah Aisyah Binti Zainal Abidin 1612272</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
