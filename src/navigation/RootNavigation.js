import * as React from 'react';
import {Button} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Expense from '../screens/expense';
import Total from '../screens/total';

const Stack = createNativeStackNavigator();

export const RootNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Total"
          component={Total}
          options={({navigation}) => ({
            title: 'TOTAL',
            headerRight: props => (
              <Button
                title="Add"
                onPress={() => navigation.navigate('Expense')}
              />
            ),
          })}
        />
        <Stack.Screen
          name="Expense"
          component={Expense}
          options={{title: 'ADD EXPENSE'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
