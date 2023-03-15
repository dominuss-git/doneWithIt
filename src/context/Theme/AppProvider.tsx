import AsyncStorage from "@react-native-async-storage/async-storage";
import { ReactNode, useCallback, useEffect, useState } from "react";
import { StyleSheet, useColorScheme } from "react-native";

import { colors, EStoreKeys } from "../../constants";
import { IAppState, AppContext, TStyles, TTheme } from "./AppContext";

interface IThemeProviderProps {
  children: ReactNode;
}

enum ETheme {
  DARK = 'dark',
  LIGHT = 'light'
}

export const AppProvider = ({ children }: IThemeProviderProps) => {
  const { dark, light, ...rest } = colors;

  const [state, setState] = useState<IAppState>({
    theme: { ...rest, ...light },
    isDark: false,
  });
  const colorScheme = useColorScheme();

  const loadTheme = async () => {
    const savedTheme = await AsyncStorage.getItem(EStoreKeys.theme);
    const isDark = (savedTheme || colorScheme) === "dark";

    const theme = { ...rest, ...(isDark ? dark : light) };

    setState({ theme, isDark });
  }

  useEffect(() => {
    loadTheme();
  }, [colorScheme]);

  const createStyles = useCallback(
    <T extends TStyles<T> | TStyles<any>>(
      prop: ((props: TTheme) => T | TStyles<T>) | T | TStyles<T>
    ): T => {
      if (typeof prop === "function") {
        prop = prop(state!.theme);
      }

      return StyleSheet.create(prop);
    },
    [state?.theme]
  );

  const changeTheme = (isDark: boolean) => {
    setState(prev => ({ ...prev, isDark, theme: { ...rest, ...(isDark ? dark : light) } }))
    AsyncStorage.setItem(EStoreKeys.theme, isDark ? ETheme.DARK : ETheme.LIGHT)
  }

  return (
    <AppContext.Provider value={{ ...state, createStyles, changeTheme }}>
      {state ? children : null}
    </AppContext.Provider>
  );
};
