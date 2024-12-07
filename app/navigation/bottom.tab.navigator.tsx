import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View } from 'react-native';

const _BottomTabNavigator = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <_BottomTabNavigator.Navigator>
      <_BottomTabNavigator.Screen
        name="Home"
        component={() => <View style={{ flex: 1, backgroundColor: 'red' }} />}
      />
      <_BottomTabNavigator.Screen
        name="Home2"
        component={() => (
          <View style={{ flex: 1, backgroundColor: 'yellow' }} />
        )}
      />
    </_BottomTabNavigator.Navigator>
  );
};

export default BottomTabNavigator;
