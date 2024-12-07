import { useNavigation, useRouter } from 'expo-router';
import { Text, TouchableOpacity, View } from 'react-native';

const Test1Screen = () => {
  const navigation = useNavigation();

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

export default Test1Screen;
