import React from 'react';
import { View, Text, Button } from 'react-native';

const UserDataScreen = ({ route, navigation }) => {
  const { username, cpf, rg } = route.params;

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Olá, {username}</Text>
      <Text>Portador do documento CPF: {cpf}</Text>
      <Text>RG: {rg}</Text>
      <Button
        title="Voltar"
        color="red"
        onPress={() => navigation.goBack()}
      />
      <Button
        title="Finalizar"
        color="green"
        onPress={() => navigation.navigate('Screen1')}
      />
    </View>
  );
};

export default UserDataScreen;
