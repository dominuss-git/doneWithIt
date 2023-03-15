import { StyleSheet, View } from "react-native";

import { Text } from "../common/components/UI";
import { ERoutes } from "../constants";
import { TNavigator } from "../navigations";

export const List = ({ navigation }: TNavigator<ERoutes.LIST>) => {
  return (
    <View style={styles.container}>
      <Text>List ghjklkjhgfghjklkjhgfhjk</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#fff'
  },
});