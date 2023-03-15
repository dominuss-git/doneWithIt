import { useNavigation } from '@react-navigation/native';
import { View, TouchableOpacity } from 'react-native';

import { useAppSettings } from '../../context';
import { TNavigator } from '../../navigations';
import { Back, Settings } from '../../../assets/icons';
import { ERoutes } from '../../constants';

export const Header = () => {
  const { createStyles } = useAppSettings();
  const navigation = useNavigation<TNavigator['navigation']>();

  const styles = createStyles({
    container: {
      height: 40,
      alignItems: 'center',
      flexDirection: 'row',
      width: '100%',
      justifyContent: 'space-between',
      paddingHorizontal: 10,
    },
    // back: { height: 19, width: 11 },
    settings: {
      height: 24,
      width: 24,
    },
  });

  return (
    <View style={styles.container}>
      <View>
        <TouchableOpacity onPress={navigation.goBack}>
          <Back />
        </TouchableOpacity>
      </View>
      <View style={styles.settings}>
        <TouchableOpacity onPress={() => navigation.navigate(ERoutes.SETTINGS, { screen: ERoutes.HOME })}>
          <Settings />
        </TouchableOpacity>
      </View>
    </View>
  );
};
