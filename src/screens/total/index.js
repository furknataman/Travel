import React, {useContext, useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Image,
  Button,
} from 'react-native';
import {AppContext} from '../../providers/AppProvider';

const Total = () => {
  const {
    setAmount,
    totalAmount,
    furkan,
    setFurkan,
    tamer,
    setTamer,
    cigdem,
    setCigdem,
  } = useContext(AppContext) || {};
  const [show, setShow] = useState('none');
  const showImage = () => {
    if (show == 'none') {
      setShow('flex');
    } else {
      setShow('none');
    }
  };
  return (
    <SafeAreaView style={styles.main}>
      <View style={styles.total}>
        <Text style={styles.total_Text}>TOTAL EXPENSE SCREEN</Text>
        <Text style={[styles.total_Text, {fontSize: 20, color: 'red'}]}>
          {totalAmount} ₺
        </Text>
      </View>
      <View style={styles.users_erea}>
        <Text style={styles.users_Text}>Çiğdem: {cigdem} </Text>
        <Text style={styles.users_Text}>Furkan: {furkan} </Text>
        <Text style={styles.users_Text}>Tamer: {tamer} £ </Text>
      </View>

      <View style={{marginTop: 50}}>
        <Button title="Show Me an ASS" onPress={() => showImage()} />
      </View>
      <View style={styles.image}>
        <Image
          style={{width: 200, height: 200, display: show}}
          source={require('../../tamer.jpeg')}
        />
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
  total: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  total_Text: {
    fontSize: 16,
    color: 'black',
    fontWeight: '400',
    marginTop: 5,
  },
  users_erea: {
    marginTop: 50,
    marginLeft: 20,
    alignContent: 'flex-start',
    alignItems: 'flex-start',
  },
  users_Text: {
    fontSize: 18,
    color: 'black',
    fontWeight: '400',
    marginTop: 10,
  },
  image: {
    flex: 1,
    flexDirection: 'column-reverse',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default Total;
