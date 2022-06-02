import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import HomeScreen from '@screens/Home';
import ShopScreen from '@screens/Shop';
import FavoritesScreen from '@screens/Favorites';

import CustomizeTab from '@components/CustomizeTab';

const Tabs = createBottomTabNavigator();

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
  return (
    <NavigationContainer>
      <MainTab />
    </NavigationContainer>
  );
};
export default RootNavigation;
