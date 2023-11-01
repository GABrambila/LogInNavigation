import React from 'react';
import { View, Text, Button } from 'react-native';

const TeamScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 24, marginBottom: 20 }}>Equipe da UNIPAR</Text>
      <Text>Nome do Membro 1</Text>
      <Text>Nome do Membro 2</Text>
      <Text>Nome do Membro 3</Text>
      <Text>Nome do Membro 4</Text>
      
      <Button
        title="Voltar"
        color="red"
        onPress={() => navigation.goBack()}
      />
    </View>
  );
};

export default TeamScreen;
