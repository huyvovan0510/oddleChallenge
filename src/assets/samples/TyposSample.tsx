import React from 'react';
import { StyleSheet, Text, SafeAreaView, ScrollView } from 'react-native';
import {
  FormTitle,
  H1,
  H2,
  H3,
  H4,
  Paragraph,
  SParagraph,
  TextLink,
} from '../components/Typography';

const TyposSample = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Typos Sample</Text>
      <ScrollView>
        <H1 bold style={styles.text}>
          H1 Bold (26/Auto)
        </H1>
        <H2>H2 Regular (24/Auto)</H2>
        <H2 bold style={styles.text}>
          H2 Bold
        </H2>
        <H3>H3 Regular (20/Auto)</H3>
        <H3 bold style={styles.text}>
          H3 Bold
        </H3>
        <H4>H4 Regular (18/Auto)</H4>
        <H4 bold style={styles.text}>
          H4 Bold
        </H4>
        <Paragraph>Paragraph Regular (16/Auto)</Paragraph>
        <Paragraph bold style={styles.text}>
          Paragraph Bold
        </Paragraph>
        <SParagraph>Small Paragraph Regular (14/20px Line-height)</SParagraph>
        <SParagraph bold style={styles.text}>
          Small Paragraph Bold
        </SParagraph>
        <TextLink style={styles.text}>Textlink (16/20)</TextLink>
        <FormTitle>Form Title (10/12)</FormTitle>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 16,
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

export default TyposSample;
