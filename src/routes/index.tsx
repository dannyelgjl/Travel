import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
const {Navigator, Screen} = createStackNavigator();
import {Home, Detail} from '../screens';
import {SCREEN} from './constant/route-name';

const Routes: React.FC = () => (
  <Navigator
    screenOptions={{
      headerShown: false,
    }}>
    <Screen name={SCREEN.HOME} component={Home} />
    <Screen name={SCREEN.DETAIL} component={Detail} />
  </Navigator>
);

export default Routes;
