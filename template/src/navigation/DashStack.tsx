import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { ScreenOne } from '../screens';
import { DashStackParamList } from './interface';

interface DashProps { }

const Stack = createStackNavigator<DashStackParamList>();

const DashStack: React.FC<DashProps> = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name={"profile" as never} component={ScreenOne} />
    </Stack.Navigator>
  );
};

export default DashStack;
