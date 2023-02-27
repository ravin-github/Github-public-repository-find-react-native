import React  from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '@screens/dashboard';

const Stack = createNativeStackNavigator();

const MainNavigator = () => {

  return (
    <NavigationContainer>
      <Stack.Navigator >
       <Stack.Screen name="Find Repository" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigator;
