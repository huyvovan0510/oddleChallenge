import React from 'react';
import {Platform, StyleSheet, TouchableOpacity, View} from 'react-native';
import {WebView} from 'react-native-webview';
import {H1} from '@components/Typography';
const HEADER_HEIGHT = Platform.OS === 'android' ? 80 : 110;

const ProductDetails = props => {
  const {params} = props?.route || {};
  const goBack = () => {
    props?.navigation.goBack();
  };
  return (
    <View style={styles.container}>
      <View style={[styles.header]}>
        <View style={styles.leftBox}>
          <TouchableOpacity onPress={goBack}>
            <H1>{'<'}</H1>
          </TouchableOpacity>
        </View>
        <View style={styles.centerBox}>
          <H1 color="#0A3040" style={styles.userName} bold>
            {'Details'}
          </H1>
        </View>
        <View style={styles.rightBox} />
      </View>
      <View style={styles.content}>
        <WebView source={{uri: params?.productLink}} />
      </View>
    </View>
  );
};
export default ProductDetails;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  header: {
    height: HEADER_HEIGHT,
    backgroundColor: '#ffff',
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'center',
    paddingHorizontal: 15,
    paddingBottom: 10,
    zIndex: 2,
  },
  centerBox: {
    flex: 1,
    alignItems: 'center',
  },
  leftBox: {
    flex: 1,
    justifyContent: 'center',
    marginLeft: 15,
  },
  rightBox: {
    flex: 1,
  },
  content: {
    flex: 1,
  },
});
