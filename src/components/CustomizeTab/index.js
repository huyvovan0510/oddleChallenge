import React, {useMemo} from 'react';
import {View, StyleSheet, TouchableOpacity, Text} from 'react-native';
import {FormTitle} from '@components/Typography';
import IconHomeActive from '@components/Icons//IconHomeActive';
import IconHomeInActive from '@components/Icons//IconHomeInActive';
import IconHeart from '@components/Icons/IconHeart';
import IconHeartOutlined from '@components/Icons/IconHeartOutlined';
import IconShopActive from '@components/Icons/IconShopActive';
import IconShopInactive from '@components/Icons/IconShopInactive';

const getTabInfo = tabName => {
  switch (tabName) {
    case 'Home':
      return {
        title: 'Home',
        inActiveIcon: IconHomeInActive,
        activeIcon: IconHomeActive,
      };
    case 'Shop':
      return {
        title: 'Shop',
        inActiveIcon: IconShopInactive,
        activeIcon: IconShopActive,
      };
    case 'Favorites':
      return {
        title: 'Favorites',
        inActiveIcon: IconHeartOutlined,
        activeIcon: IconHeart,
      };
    default:
  }
};

const CustomizeTab = props => {
  const {navigation = {}, state = {}} = props || {};
  const {routes = [], index: activeTabIndex} = state || {};

  const navigateToTab = tabName => {
    if (tabName) {
      navigation?.navigate(tabName);
    }
  };

  const tabIconStyle = useMemo(() => {
    const getStyles = (_, index) => {
      return {...styles.tabItems};
    };
    return routes?.map(getStyles);
  }, [routes]);

  const renderTabItems = (itemTab, indexTab) => {
    const {key = '', name = ''} = itemTab;
    const active = indexTab === activeTabIndex;
    const tabInfo = getTabInfo(name);
    const Icon = active ? tabInfo?.activeIcon : tabInfo?.inActiveIcon;
    return (
      <TouchableOpacity
        key={`item-main-tab-${key}`}
        style={tabIconStyle[indexTab]}
        activeOpacity={0.8}
        onPress={() => {
          if (indexTab !== activeTabIndex) {
            navigateToTab(name);
          }
        }}>
        <Icon />
        <FormTitle style={styles.tabTitle} color="#0A3040">
          {tabInfo?.title}
        </FormTitle>
      </TouchableOpacity>
    );
  };

  return <View style={styles.tabContainer}>{routes?.map(renderTabItems)}</View>;
};

export default CustomizeTab;
const styles = StyleSheet.create({
  tabContainer: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    backgroundColor: '#fff',
    height: 68,
  },
  tabItems: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  iconTabbar: {
    top: -21,
  },
  tabTitle: {
    marginVertical: 6,
  },
});
