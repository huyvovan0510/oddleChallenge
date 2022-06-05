import React, {useMemo} from 'react';
import {StyleSheet, ScrollView, View, Image} from 'react-native';

import {useSelector} from 'react-redux';
import LottieView from 'lottie-react-native';
import LinearGradient from 'react-native-linear-gradient';
import {SafeAreaView} from 'react-native-safe-area-context';

import ListRecommended from '@components/ListRecommended';
import SameBrandList from '@components/SameBrandList';
import NewReleaseList from '@components/NewReleaseList';
import {H3} from '@components/Typography';

import ic_empty from '@assets/images/ic_empty.png';

import Header from './Header';

const Home = ({navigation}) => {
  const {liked} = useSelector(state => state.favoritesReducer);

  const productFavorite = useMemo(() => {
    if (liked) {
      const arrProduct = Object.keys(liked).map(key => liked?.[key]);
      return arrProduct[0];
    }
    return null;
  }, [liked]);

  return (
    <LinearGradient
      colors={['#F3EFFF', '#F7FDFF', '#FFFFFF']}
      style={styles.container}>
      <SafeAreaView style={styles.fex1}>
        <Header />
        {productFavorite ? (
          <ScrollView style={styles.fex1}>
            <View style={styles.content}>
              <ListRecommended query={productFavorite?.productType} />
              <SameBrandList query={productFavorite?.brand} />
              <NewReleaseList />
            </View>
          </ScrollView>
        ) : (
          <View style={styles.emptyContainer}>
            <Image source={ic_empty} style={styles.icEmpty} />
            <H3 style={styles.txtEmpty}>
              Opps! we don`t have any recommended for you
            </H3>
          </View>
        )}
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
  content: {flex: 1},
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 15,
  },
  txtEmpty: {
    textAlign: 'center',
  },
  icEmpty: {width: 150, height: 150, marginBottom: 20},
});
