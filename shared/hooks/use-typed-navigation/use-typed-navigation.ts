import { AllNavigatorParams } from '@/shared/types/route.type';
import { NavigationProp, useNavigation } from '@react-navigation/core';

/**
 *
 * @description
 * useSegments 타입 지원 자동으로 되면 그 때 전환
 * expoRouter는 가독성이 좋은 것 같지 않아 추후에 다시 작업 예정
 */
const useTypedRouter = () => {
  const navigation = useNavigation<NavigationProp<AllNavigatorParams>>();

  return navigation;
};

export default useTypedRouter;
