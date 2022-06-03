import HorizontalList from '@components/HorizontalList';
import ProductItem from '@components/ProductItem';
import {H3} from '@components/Typography';
import {getProducts} from '@network/Api';
import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  ScrollView,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {SafeAreaView} from 'react-native-safe-area-context';
import Header from './Header';

const Home = () => {
  const [listProduct, setListProduct] = useState();
  useEffect(() => {
    getProductFromBE();
  }, []);

  const getProductFromBE = async () => {
    const {result} = await getProducts();
    setListProduct(result);
  };

  const renderItem = ({item, index}) => {
    return <ProductItem item={item} />;
  };
  return (
    <LinearGradient
      colors={['#cac1f1', '#F7FDFF', '#FFFFFF']}
      style={styles.container}>
      <SafeAreaView style={styles.fex1}>
        <ScrollView>
          <Header />
          <HorizontalList data={listProduct} label="Recommended for you" />
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
