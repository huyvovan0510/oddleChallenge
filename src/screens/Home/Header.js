import React, {useMemo} from 'react';
import {View, Image, StyleSheet} from 'react-native';
import avatar from '@assets/images/avatar.png';
import {H3, SParagraph} from '@components/Typography';
import {APP_ACC_NAME} from '../../../appConfigs';
import moment from 'moment';
const HomeHeader = () => {
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
    <View style={styles.container}>
      <Image source={avatar} style={styles.avatar} />
      <View style={styles.boxInfo}>
        <SParagraph color="#515151">{sayHi}</SParagraph>
        <H3 color="#0A3040" style={styles.userName} bold>
          {APP_ACC_NAME}
        </H3>
      </View>
    </View>
  );
};
export default HomeHeader;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingVertical: 8,
  },
  avatar: {
    width: 50,
    height: 50,
  },
  boxInfo: {
    marginLeft: 10,
    flex: 1,
  },
  userName: {
    marginTop: 3,
  },
});
