import { useTranslation as useI18Translation } from 'react-i18next';
import { Namespace, TNamespaceStructure, en } from '../i18n';

type NestedKeyOf<T extends Namespace = Namespace> = {
  [Key in T[number]]: `${Key}:${keyof TNamespaceStructure[Key] & (string | number)}`
}[T[number]];

export const useTranslation = <T extends Namespace>(ns: T) => {
  const { t: translate } = useI18Translation<T>(ns);


  const t = (str: NestedKeyOf<T>) => {
    return translate(str as any);
  }

  return {
    t
  }
};
