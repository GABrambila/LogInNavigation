import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';

const NameScreen = ({ navigation }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Informe seu Nome:</Text>
      <TextInput
        value={firstName}
        onChangeText={(text) => setFirstName(text)}
        placeholder="Nome"
      />
      <Text>Informe seu Sobrenome:</Text>
      <TextInput
        value={lastName}
        onChangeText={(text) => setLastName(text)}
        placeholder="Sobrenome"
      />
      <Button
        title="Próxima"
        color="green"
        onPress={() => navigation.navigate('Screen3')}
      />
    </View>
  );
};

export default NameScreen;
