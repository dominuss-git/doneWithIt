import { createStackNavigator } from '@react-navigation/stack';
import { NavigatorScreenParams } from '@react-navigation/native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';

import { ERoutes } from '../constants';
import { Home, List } from '../screens';
import { SettingsNavigator, TSettingsNavigator } from './nestedNavigators';

type TRootNavigator = {
  [ERoutes.HOME]: undefined;
  [ERoutes.LIST]: undefined;
  [ERoutes.SETTINGS]: NavigatorScreenParams<TSettingsNavigator>;
};

const Stack = createStackNavigator<TRootNavigator>();

export const Navigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName={ERoutes.HOME}
    >
      <Stack.Screen name={ERoutes.HOME} component={Home} />
      <Stack.Screen name={ERoutes.LIST} component={List} />
      <Stack.Screen name={ERoutes.SETTINGS} component={SettingsNavigator} />
    </Stack.Navigator>
  );
};

export type TNavigator<T extends keyof TRootNavigator = any> = NativeStackScreenProps<TRootNavigator, T>;
