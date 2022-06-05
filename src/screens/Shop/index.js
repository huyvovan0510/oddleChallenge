import React, {useEffect, useRef, useState} from 'react';
import {View, StyleSheet, FlatList, Image, Animated} from 'react-native';
import ProductItem from '@components/ProductItem';
import {H3, SParagraph} from '@components/Typography';
import {getProducts} from '@network/productApi';
import LinearGradient from 'react-native-linear-gradient';
import avatar from '@assets/images/avatar.png';
import {APP_ACC_NAME} from '../../../appConfigs';

const ListAnimated = Animated.createAnimatedComponent(FlatList);

const renderItem = ({item, index}) => {
  return <ProductItem item={item} />;
};

const Shop = () => {
  const [listProduct, setListProduct] = useState();
  const scrollY = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    getProductFromBE();
  }, []);

  const getProductFromBE = async () => {
    const {result} = await getProducts();
    setListProduct(result);
  };

  const renderHeaderComponent = () => {
    return (
      <View style={styles.listHeader}>
        <SParagraph color="#515151">{`${
          listProduct?.length || '0,0'
        } products sorted by price`}</SParagraph>
      </View>
    );
  };

  const transY = scrollY.interpolate({
    inputRange: [0, 10],
    outputRange: [-10, 0],
    extrapolate: 'clamp',
  });

  return (
    <LinearGradient
      colors={['#cac1f1', '#F7FDFF', '#FFFFFF']}
      style={styles.container}>
      <>
        <View style={[styles.header]}>
          <Image source={avatar} style={styles.avatar} />
          <View style={styles.boxInfo}>
            <H3 color="#0A3040" style={styles.userName} bold>
              {APP_ACC_NAME.substring(0, 8)}
            </H3>
          </View>
        </View>
        <Animated.View
          style={[styles.boxShadow, {transform: [{translateY: transY}]}]}
        />
      </>

      <ListAnimated
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {y: scrollY}}}],
          {useNativeDriver: false},
        )}
        style={styles.listStyle}
        ListHeaderComponent={renderHeaderComponent}
        data={listProduct}
        keyExtractor={item => `${item?.id}`}
        renderItem={renderItem}
        contentContainerStyle={styles.contentContainer}
        showsVerticalScrollIndicator={false}
      />
    </LinearGradient>
  );
};
export default Shop;
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
  header: {
    height: 110,
    backgroundColor: '#ffff',
    flexDirection: 'row',
    alignItems: 'flex-end',
    paddingHorizontal: 15,
    paddingBottom: 10,
    zIndex: 2,
  },
  listStyle: {},
  listHeader: {paddingVertical: 20},
  boxShadow: {
    backgroundColor: '#ffff',
    height: 110,
    width: '100%',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,
    elevation: 9,
    zIndex: 1,
  },
  contentContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
