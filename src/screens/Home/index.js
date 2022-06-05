import React from 'react';
import {StyleSheet, ScrollView} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';
import {SafeAreaView} from 'react-native-safe-area-context';

import Header from './Header';

const Home = () => {
  return (
    <LinearGradient
      colors={['#cac1f1', '#F7FDFF', '#FFFFFF']}
      style={styles.container}>
      <SafeAreaView style={styles.fex1}>
        <ScrollView>
          <Header />
        </ScrollView>
      </SafeAreaView>
    </LinearGradient>
  );
};
export default Home;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  fex1: {
    flex: 1,
  },
  content: {
    marginTop: 8,
  },
});
