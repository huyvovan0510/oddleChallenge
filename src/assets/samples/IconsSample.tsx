import IconAddressBookActive from '../components/Icons/IconAddressBookActive';
import IconAddressBookInactive from '../components/Icons/IconAddressBookInactive';
import IconHeart from '../components/Icons/IconHeart';
import IconHeartOutlined from '../components/Icons/IconHeartOutlined';
import IconInformation from '../components/Icons/IconInformation';
import IconMinOrder from '../components/Icons/IconMinOrder';
import IconShopActive from '../components/Icons/IconShopActive';
import IconShopInactive from '../components/Icons/IconShopInactive';
import IconStar from '../components/Icons/IconStar';

import React from 'react';
import { FlatList, StyleSheet, Text, View, SafeAreaView } from 'react-native';
import { Divider } from 'react-native-paper';

const icons: {
  [key: string]: () => JSX.Element;
} = {
  IconAddressBookActive,
  IconAddressBookInactive,
  IconHeart,
  IconHeartOutlined,
  IconInformation,
  IconMinOrder,
  IconShopActive,
  IconShopInactive,
  IconStar,
};

const iconsKey = Object.keys(icons);

const IconsSample = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Icons Sample</Text>
      <FlatList
        data={iconsKey}
        keyExtractor={item => item}
        ItemSeparatorComponent={Divider}
        renderItem={({ item }) => {
          const Icon = icons[item];
          return (
            <View style={styles.itemContainer}>
              <Text>{item}</Text>
              <Icon />
            </View>
          );
        }}
      />
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
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 16,
  },
});

export default IconsSample;
