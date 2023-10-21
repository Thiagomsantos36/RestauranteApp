import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './src/LoginScreen'; // Importe a tela de login
import Sales from './src/vendas'; // Importe a tela de vendas

const Stack = createStackNavigator(); // Cria uma instância do Stack Navigator

export default function App() { // Função principal do aplicativo
  return (
    <NavigationContainer> 
      <Stack.Navigator initialRouteName="Login"> 
        <Stack.Screen name="Login" component={Login} /> 
        <Stack.Screen name="Vendas" component={Sales} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
//  este código configura a estrutura de navegação do aplicativo usando o React Navigation.
// Ele cria um Stack Navigator com duas telas, "Login" e "Vendas", e define a tela "Login" como a tela inicial
// quando o aplicativo é iniciado. Quando o aplicativo é executado, a navegação entre essas telas 
//será gerenciada automaticamente pelo Stack Navigator, permitindo que o usuário navegue entre as telas de forma eficiente.
