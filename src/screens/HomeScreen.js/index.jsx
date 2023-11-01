import React from 'react';
import { View, Text, Button } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>UNIPAR</Text>
      <Button
        title="INICIAR"
        color="green"
        onPress={() => navigation.navigate('Screen2')}
      />
    </View>
  );
};

export default HomeScreen;
