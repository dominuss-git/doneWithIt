import { createContext } from "react";
import { ImageStyle, TextStyle, ViewStyle } from "react-native";

import { colors } from "../../constants";

type TColors = typeof colors;

export type TTheme = Record<keyof TColors['dark'] | Exclude<keyof TColors, 'dark' | 'light'>, string>;
export type TStyles<T> = {[P in keyof T]: ViewStyle | TextStyle | ImageStyle}; 

export interface IAppState {
  theme: TTheme,
  isDark: boolean,
}

export interface IAppContext extends IAppState {
  createStyles: <T extends TStyles<T> | TStyles<any>>(prop: T | TStyles<T> | ((props: TTheme) => T | TStyles<T>)) => T,
  changeTheme: (isDark: boolean) => void,
}

export const AppContext = createContext<IAppContext | undefined>(undefined)