import { Stack } from 'expo-router';
import { Text, View } from 'react-native';

const NotFoundScreen = () => {
  return (
    <>
      <Stack.Screen options={{ title: 'Oops!' }} />
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize: 20, textAlign: 'center', margin: 10 }}>
          Not Found
        </Text>
      </View>
    </>
  );
};

export default NotFoundScreen;
