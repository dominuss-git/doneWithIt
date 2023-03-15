import { useNavigation } from '@react-navigation/native';
import { Platform, Switch, TouchableOpacity, View } from 'react-native';

import { Back } from '../../../assets/icons';
import { Text } from '../../common/components/UI';
import { ERoutes } from '../../constants';
import { useAppSettings } from '../../context';
import { useTranslation } from '../../hooks';
import { TNavigator } from '../../navigations';

export const Settings = () => {
  const navigation = useNavigation<TNavigator['navigation']>();
  const { t } = useTranslation(['settings']);
  const { createStyles, isDark, theme, changeTheme } = useAppSettings();

  const styles = createStyles((theme) => ({
    container: {
      flex: 1,
    },
    configurationSection: {
      padding: 10,
    },
    section: {
      borderColor: theme.primary,
      borderWidth: 2,
      borderRadius: 10,
      rowGap: 10,
      paddingVertical: 10,
      paddingHorizontal: 10,
    },
    modeBlock: {
      justifyContent: 'space-between',
      flexDirection: 'row',
      alignItems: 'center',
      columnGap: 10,
    },
    switch: Platform.OS === 'android' ? {
      height: 20,
      right: -10,
    } : {},
    language: {
      color: theme.disabled,
    },
  }));

  return (
    <View style={styles.container}>
      <View style={styles.configurationSection}>
        <View style={styles.section}>
          <View style={styles.modeBlock}>
            <Text>{t('settings:mode')}</Text>
            <Switch
              style={styles.switch}
              trackColor={{
                false: theme.disabled,
                true: theme.secondary_light,
              }}
              thumbColor={theme.primary}
              value={isDark}
              ios_backgroundColor={theme.disabled}
              onValueChange={changeTheme}
            />
          </View>
          <TouchableOpacity onPress={() => navigation.navigate(ERoutes.SETTINGS, { screen: ERoutes.LANGUAGE })}>
            <View style={styles.modeBlock}>
              <View style={[styles.modeBlock, { flex: 1 }]}>
                <Text>{t('settings:language')}</Text>
                <Text style={styles.language}>Russian</Text>
              </View>
              <Back
                height={15}
                width={9}
                style={{
                  transform: [
                    {
                      rotate: '180deg',
                    },
                  ],
                }}
              />
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
