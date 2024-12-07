import { AllScreenParams } from '@/shared/types/route.type';
import { RouteProp, useRoute } from '@react-navigation/native';

const useTypedRouted = <ScreenName extends keyof AllScreenParams>(
  _: ScreenName,
) => {
  const route = useRoute<RouteProp<AllScreenParams, ScreenName>>();

  return route;
};

export default useTypedRouted;
