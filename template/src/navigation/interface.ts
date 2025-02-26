import { StackScreenProps } from '@react-navigation/stack';
import { IconProps } from '../components/common/types';

export type AuthStackParamList = {
};

export type TabStackParamList = {};

export type DashStackParamList = {};

export type DashStackProps<Screen extends keyof DashStackParamList> =
  StackScreenProps<DashStackParamList, Screen>;

export type AuthStackProps<Screen extends keyof AuthStackParamList> =
  StackScreenProps<AuthStackParamList, Screen>;

export type TabStackProps<Screen extends keyof TabStackParamList> =
  StackScreenProps<TabStackParamList, Screen>;

export interface TabList {
  id: number | string;
  label: any;
  icon: IconProps | any;
  component: React.FC<any>;
}
