import React, {useEffect, useMemo, useRef, useState} from 'react';
import {
  View,
  StyleSheet,
  FlatList,
  Image,
  Animated,
  Platform,
} from 'react-native';
import ProductItem from '@components/ProductItem';
import {H3, SParagraph} from '@components/Typography';
import {getProducts} from '@network/productApi';
import LinearGradient from 'react-native-linear-gradient';
import avatar from '@assets/images/avatar.png';
import {APP_ACC_NAME} from '../../../appConfigs';
import ListSkeleton from '@components/ListSkeleton';
import moment from 'moment';

const HEADER_HEIGHT = Platform.OS === 'android' ? 80 : 110;
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
  const renderEmpty = () => {
    return <ListSkeleton />;
  };

  const transY = scrollY.interpolate({
    inputRange: [0, 10],
    outputRange: [-10, 0],
    extrapolate: 'clamp',
  });

  const sayHi = useMemo(() => {
    const now = moment().hour();
    if (now >= 3 && now <= 11) {
      return 'Good Morning';
    } else if (now >= 12 && now <= 14) {
      return 'Good afternoon';
    } else {
      return 'Good evening';
    }
  }, []);

  return (
    <LinearGradient
      colors={['#cac1f1', '#F7FDFF', '#FFFFFF']}
      style={styles.container}>
      <>
        <View style={[styles.header]}>
          <Image source={avatar} style={styles.avatar} />
          <View style={styles.boxInfo}>
            <SParagraph color="#515151">{sayHi}</SParagraph>
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
        ListEmptyComponent={renderEmpty}
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
    height: HEADER_HEIGHT,
    backgroundColor: '#ffff',
    flexDirection: 'row',
    alignItems: 'flex-end',
    paddingHorizontal: 15,
    paddingBottom: 10,
    zIndex: 2,
  },
  listStyle: {},
  listHeader: {
    paddingVertical: 20,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    paddingHorizontal: 15,
  },
  boxShadow: {
    backgroundColor: '#ffff',
    height: HEADER_HEIGHT,
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
    // alignItems: 'center',
  },
  emptyContent: {
    backgroundColor: 'red',
    alignItems: 'center',
  },
  boxInfo: {
    marginLeft: 10,
  },
});
