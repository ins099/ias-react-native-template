import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { ScreenFour, ScreenOne, ScreenThree, ScreenTwo } from '../screens';
import { AuthStackParamList } from './interface';

const Stack = createStackNavigator<AuthStackParamList>();

const AuthStack: React.FC = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name={"Welcome" as never} component={ScreenOne} />
      <Stack.Screen name={"Onboarding" as never} component={ScreenTwo} />
      <Stack.Screen name={"Register" as never} component={ScreenThree} />
      <Stack.Screen name={"Terms" as never} component={ScreenFour} />
    </Stack.Navigator>
  );
};

export default AuthStack;
