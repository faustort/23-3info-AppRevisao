import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text } from "react-native";
import { Button } from "react-native-paper";

export default function App() {
  return (
    <RootNavigation />
  );
}

const Stack = createNativeStackNavigator();

function RootNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="AboutScreen" component={AboutScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function HomeScreen() {
  return (
    <View>
      <Text>Olá Bem vindo a Home</Text>
      <Button mode="contained">Ir para o Sobre</Button>
    </View>
  )
}

function AboutScreen() {
  return (
    <View>
      <Text>Página Sobre</Text>
    </View>
  )
}