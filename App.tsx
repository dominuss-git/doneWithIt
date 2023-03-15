import "react-native-gesture-handler";
import "./src/i18n/config";

import { StatusBar } from "expo-status-bar";
import {
  SafeAreaView,
  StyleSheet,
  StatusBar as StatusBarApi,
  Text,
  View,
  Image,
  TouchableWithoutFeedback,
  TouchableOpacity,
  TouchableHighlight,
  TouchableNativeFeedback,
  Alert,
  Platform,
  ImageBackground,
} from "react-native";
import {
  useDeviceOrientation,
  useImageDimensions,
  useLayout,
} from "@react-native-community/hooks";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { Navigator } from "./src/navigations";
import { colors, ERoutes } from "./src/constants";
import { AppProvider, useAppSettings } from "./src/context";
import { ReactNode } from "react";
import { Button } from "./src/common/components/UI";
import { Header } from "./src/common/components";
// import { StackNavigationProp } from "@react-navigation/stack";

const Main = () => {
  const { theme, createStyles, isDark } = useAppSettings();
  const appTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: theme.primary_light,
      text: theme.contrast,
      primary: theme.contrast,
    },
  };

  const styles = createStyles((theme) => ({
    container: {
      flex: 1,
      backgroundColor: theme.primary_light,
      paddingTop: Platform.OS === "android" ? StatusBarApi.currentHeight : 0,
    },
  }));

  return (
    <NavigationContainer theme={appTheme}>
      <SafeAreaView style={styles.container}>
        <StatusBar backgroundColor={theme.primary_light} style={!isDark ? 'dark' : 'light'} />
        <Header />
        <Navigator />
      </SafeAreaView>
    </NavigationContainer>
  );
};

export default function App() {
  return (
    <AppProvider>
      <Main />
    </AppProvider>
  );
}
