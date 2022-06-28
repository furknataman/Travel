import React, {useState, useEffect, useCallback, useContext} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import CheckBox from '@react-native-community/checkbox';

import {AppContext} from '../../providers/AppProvider';

const Expense = () => {
  const {setAmount, totalAmount} = useContext(AppContext) || {};
  const [add, setAdd] = useState(0);

  const [isSelected, setSelection] = useState(false);

  const addAmount = () => {
    setAmount(totalAmount + parseInt(add));
    setAdd(0);
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

      <View>
        <CheckBox value={true} disabled={false} />
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
  input: {
    borderColor: 'green',
    borderWidth: 1,
    borderRadius: 5,
  },
  board: {
    marginTop: 20,
    marginHorizontal: 10,
    justifyContent: 'center',
    alignContent: '',
  },
  input: {
    borderWidth: 1,
    borderColor: '#B0B0C3',
    backgroundColor: '#F7F7F7',
    paddingVertical: 20,
    paddingHorizontal: 20,
    borderRadius: 20,
  },
  
});
