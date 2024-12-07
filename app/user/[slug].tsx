import { useLocalSearchParams, useNavigation, useRouter } from 'expo-router';
import { Text, TouchableOpacity, View } from 'react-native';

const UserScreen = () => {
  const { slug } = useLocalSearchParams();

  const bb = useRouter();

  bb.navigate('..');

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <TouchableOpacity onPress={() => navigation.navigate('index')}>
        <Text style={{ fontSize: 20, textAlign: 'center', margin: 10 }}>
          Tab Two Screen
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default UserScreen;
