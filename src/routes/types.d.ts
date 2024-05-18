interface bottomTabRouteItemProps {
  name: string;
  label: string;
  component: React.FC;
  icon: React.FC<SvgProps>;
}

type RootStackParamListProps = {
  SignIn: undefined;
  Tabs: undefined;
  CriptoDetails: undefined;
};
