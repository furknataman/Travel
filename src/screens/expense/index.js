import React, {useState, useEffect, useCallback, useContext} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  SafeAreaView,
  TouchableOpacity,
  Alert,
  Keyboard,
} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {AppContext} from '../../providers/AppProvider';

const Expense = () => {
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
  const [add, setAdd] = useState(0);
  const [furkanRadio, setFurkanRadio] = useState(false);
  const [tamerRadio, setTamerRadio] = useState(false);
  const [cigdemRadio, setCigdemRadio] = useState(false);

  const storeData = async (key, value) => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem(key, jsonValue);
    } catch (e) {
      // saving error
    }
  };

  const getData = async x => {
    try {
      const value = await AsyncStorage.getItem(x);
      if (value !== null) {
        return JSON.parse(value);
      }
    } catch (e) {
      // error reading value
    }
  };

  const addAmount = () => {
    if (add == 0) return Alert.alert('Spending added');
    if (!cigdemRadio && !tamerRadio && !furkanRadio)
      return Alert.alert('Please select the spender');

    setAmount(totalAmount + parseInt(add));
    let count = 0;
    let newAmmount = 0;
    cigdemRadio && count++;
    furkanRadio && count++;
    tamerRadio && count++;
    newAmmount = add / count;
    cigdemRadio && setCigdem(cigdem + newAmmount), setCigdemRadio(false);
    furkanRadio && setFurkan(furkan + newAmmount), setFurkanRadio(false);
    tamerRadio && setTamer(tamer + newAmmount), setTamerRadio(false);
    setAdd(0);
    Alert.alert('Successful');
    storeData('cigdem', cigdem);
    let x = {};
    getData('cigdem').then(response => {
      x = JSON.stringify(response);
      console.log('Çiğdem harcanan: ' + x);
    });
    Keyboard.dismiss();
  };

  return (
    <SafeAreaView style={{flex: 1, flexDirection: 'column'}}>
      <View style={styles.board}>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          value={add}
          onChangeText={add => setAdd(add)}
          placeholderTextColor="grey"
          placeholder="Please enter expenditure"
        />
      </View>
      <View style={styles.radioarea}>
        <View style={styles.radio}>
          <CheckBox
            value={cigdemRadio}
            onValueChange={setCigdemRadio}
            disabled={false}
          />
          <Text style={styles.radio_Text}>Çiğdem</Text>
        </View>
        <View style={styles.radio}>
          <CheckBox
            value={furkanRadio}
            disabled={false}
            onValueChange={setFurkanRadio}
            onAnimationType="fill"
          />
          <Text style={styles.radio_Text}>Furkan</Text>
        </View>
        <View style={styles.radio}>
          <CheckBox
            value={tamerRadio}
            onValueChange={setTamerRadio}
            disabled={false}
          />
          <Text style={styles.radio_Text}>Tamer</Text>
        </View>
      </View>
      <View style={[styles.board, {alignItems: 'center'}]}>
        <TouchableOpacity
          onPress={() => addAmount()}
          style={[
            styles.input,
            {paddingVertical: 10, backgroundColor: '#20C3AF'},
          ]}>
          <Text style={{fontSize: 18}}>Add Expense</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Expense;
const styles = StyleSheet.create({
  board: {
    marginTop: 20,
    marginHorizontal: 10,
    justifyContent: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#B0B0C3',
    backgroundColor: '#F7F7F7',
    paddingVertical: 20,
    paddingHorizontal: 20,
    borderRadius: 20,
  },
  radioarea: {
    marginTop: 30,
    alignContent: 'center',
    flexDirection: 'row',
  },
  radio: {
    flexDirection: 'row',
    marginTop: 20,
    marginLeft: 30,
    alignItems: 'center',
  },
  radio_Text: {
    alignItems: 'center',
    marginLeft: 6,
    fontSize: 16,
  },
});
