import React, {useContext} from 'react';
import {View, Text, StyleSheet, SafeAreaView} from 'react-native';
import {AppContext} from '../../providers/AppProvider';

const Total = () => {
  const {setAmount, totalAmount,furkan,
    setFurkan,
    tamer,
    setTamer,
    cigdem,
    setCigdem} = useContext(AppContext) || {};
  return (
    <SafeAreaView style={styles.main}>
      <View style={styles.total}>
        <Text style={styles.total_Text}>TOTAL EXPENSE SCREEN</Text>
        <Text style={[styles.total_Text, {fontSize: 20,color:'red'}]}>{totalAmount} ₺</Text>
      </View>
      <View style={styles.users_erea}>
        <Text style={styles.users_Text}>Çiğdem: {cigdem} </Text>
        <Text style={styles.users_Text}>Furkan: {furkan} </Text>
        <Text style={styles.users_Text}>Tamer:  {tamer} £ </Text>
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
    marginLeft:20,
    alignContent:'flex-start',
    alignItems:'flex-start'
  },
  users_Text:{
    fontSize:18,
    color:'black',
    fontWeight:'400',
    marginTop:10,
  }
});
export default Total;
