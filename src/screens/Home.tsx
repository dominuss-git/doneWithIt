import { StyleSheet, TouchableOpacity, View } from "react-native";

import { Button, Text } from "../common/components/UI";
import { ERoutes } from "../constants";
import { useTranslation } from "../hooks";

export const Home = ({ navigation }: { navigation: any }) => {
  const { t } = useTranslation(["common"]);
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate(ERoutes.LIST)}>
        <Text>{t('common:home')}</Text>
      </TouchableOpacity>
      <Button title={t('common:home')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  // text: {
  //   color: 'primary'
  // },
});
