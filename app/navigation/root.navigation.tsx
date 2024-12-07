import { createStackNavigator } from '@react-navigation/stack';
import BottomTabNavigator from './bottom.tab.navigator';
import {
  createNavigationContainerRef,
  NavigationContainer,
} from '@react-navigation/native';
import { AllScreenParams } from '../shared/types/route.type';

const RootStack = createStackNavigator();

export const rootNavigationRef =
  createNavigationContainerRef<AllScreenParams>();

const RootNavigation = () => {
  return (
    <NavigationContainer ref={rootNavigationRef}>
      <RootStack.Navigator>
        <RootStack.Screen name="BottomTab" component={BottomTabNavigator} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigation;
