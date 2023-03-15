import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { createStackNavigator } from "@react-navigation/stack";

import { ERoutes } from "../../constants";
import { Language, Settings } from "../../screens";

export type TSettingsNavigator = {
  [ERoutes.LANGUAGE]: undefined;
  [ERoutes.HOME]: undefined;
};

const Stack = createStackNavigator<TSettingsNavigator>();

export const SettingsNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName={ERoutes.HOME}
    >
      <Stack.Screen name={ERoutes.LANGUAGE} component={Language} />
      <Stack.Screen name={ERoutes.HOME} component={Settings} />
    </Stack.Navigator>
  );
};
