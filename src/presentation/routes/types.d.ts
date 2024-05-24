interface bottomTabRouteItemProps {
  name: string;
  label: string;
  component: React.FC;
  icon: React.FC<SvgProps>;
  testID: string;
}

type RootStackParamListProps = {
  SignIn: StackNavigationProp<RootStackParamList, 'SignIn'>;
  Tabs: StackNavigationProp<RootStackParamList, 'Tabs'>;
  CriptoDetails: StackNavigationProp<RootStackParamList, 'CriptoDetails'>;
};
