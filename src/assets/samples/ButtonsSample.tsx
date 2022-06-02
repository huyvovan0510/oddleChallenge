import React from 'react';
import { StyleSheet, Text, SafeAreaView, ScrollView, View } from 'react-native';
import Button from '../components/Button';

const ButtonsSample = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Buttons Sample</Text>
      <ScrollView>
        <View style={styles.row}>
          <Button type="large" mode="contained" onPress={() => {}} active>
            Large
          </Button>
          <Button type="medium" mode="contained" onPress={() => {}} loading>
            Medium
          </Button>
          <Button type="small" mode="contained" onPress={() => {}} disabled>
            Small
          </Button>
        </View>
        <View style={styles.row}>
          <Button type="large" mode="outlined" onPress={() => {}} active>
            Large
          </Button>
          <Button type="medium" mode="outlined" onPress={() => {}} loading>
            Medium
          </Button>
          <Button type="small" mode="outlined" onPress={() => {}} disabled>
            Small
          </Button>
        </View>
        <View style={styles.row}>
          <Button type="large" mode="text" onPress={() => {}} active>
            Large
          </Button>
          <Button type="medium" mode="text" onPress={() => {}} loading>
            Medium
          </Button>
          <Button type="small" mode="text" onPress={() => {}} disabled>
            Small
          </Button>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 16,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
  },
  title: {
    textDecorationLine: 'underline',
    fontWeight: 'bold',
    fontSize: 24,
    marginBottom: 24,
  },
  text: {
    marginBottom: 24,
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 16,
  },
});

export default ButtonsSample;
