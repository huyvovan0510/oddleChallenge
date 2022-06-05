import React, {useRef} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';

import HomeScreen from '@screens/Home';
import ShopScreen from '@screens/Shop';
import FavoritesScreen from '@screens/Favorites';
import ProductDetails from '@screens/ProductDetails';

import CustomizeTab from '@components/CustomizeTab';
import NavigationService from './NavigationService';

const Tabs = createBottomTabNavigator();
const MainStack = createStackNavigator();

const MainTab = () => {
  return (
    <Tabs.Navigator
      tabBar={props => <CustomizeTab {...props} />}
      screenOptions={{header: () => null}}>
      <Tabs.Screen name={'Home'} component={HomeScreen} />
      <Tabs.Screen name={'Shop'} component={ShopScreen} />
      <Tabs.Screen name={'Favorites'} component={FavoritesScreen} />
    </Tabs.Navigator>
  );
};

const RootNavigation = () => {
  const navigationRef = useRef(null);
  const handleReady = () => {
    NavigationService.initNavigationRef(navigationRef.current);
  };
  return (
    <NavigationContainer ref={navigationRef} onReady={handleReady}>
      <MainStack.Navigator screenOptions={{headerShown: false}}>
        <MainStack.Screen name="MainTab" component={MainTab} />
        <MainStack.Screen name="ProductDetails" component={ProductDetails} />
      </MainStack.Navigator>
    </NavigationContainer>
  );
};
export default RootNavigation;
