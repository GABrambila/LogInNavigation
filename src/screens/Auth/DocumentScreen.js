import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';

const DocumentScreen = ({ navigation }) => {
  const [cpf, setCpf] = useState('');
  const [rg, setRg] = useState('');

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Informe seu CPF:</Text>
      <TextInput
        value={cpf}
        onChangeText={(text) => setCpf(text)}
        placeholder="CPF"
      />
      <Text>Informe seu RG:</Text>
      <TextInput
        value={rg}
        onChangeText={(text) => setRg(text)}
        placeholder="RG"
      />
      <Button
        title="Voltar"
        color="red"
        onPress={() => navigation.goBack()}
      />
      <Button
        title="Próximo"
        color="green"
        onPress={() => navigation.navigate('Screen4')}
      />
    </View>
  );
};

export default DocumentScreen;
