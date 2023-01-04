import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

import ManagePizza from "./screens/ManagePizza";
import RecentPizzas from "./screens/RecentPizzas";
import AllPizzas from "./screens/AllPizzas";
import { Colors } from "./constants/Colors";
import IconButton from "./components/UI/IconButton";
import PizzasContextProvider from "./util/pizzasContext";

const Stack = createNativeStackNavigator();
const BottomTabs = createBottomTabNavigator();

function PizzasOverview() {
  return (
    <BottomTabs.Navigator
      screenOptions={({ navigation }) => ({
        headerStyle: { backgroundColor: Colors.primary500 },
        headerTintColor: "white",
        tabBarStyle: { backgroundColor: Colors.primary500 },
        tabBarActiveTintColor: Colors.accent500,
        headerRight: ({ tintColor }) => (
          <IconButton
            icon="add"
            size={24}
            color={tintColor}
            onPress={() => {
              navigation.navigate("ManagePizza");
            }}
          />
        ),
      })}
    >
      <BottomTabs.Screen
        name="RecentPizzas"
        component={RecentPizzas}
        options={{
          title: "Recent Pizzas",
          tabBarLabel: "Recent",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="alarm" size={size} color={color} />
          ),
        }}
      />
      <BottomTabs.Screen
        name="AllPizzas"
        component={AllPizzas}
        options={{
          title: "All Pizzas",
          tabBarLabel: "All Pizzas",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="infinite" size={size} color={color} />
          ),
        }}
      />
    </BottomTabs.Navigator>
  );
}

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <PizzasContextProvider>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerStyle: { backgroundColor: Colors.primary500 },
              headerTintColor: "white",
            }}
          >
            <Stack.Screen
              name="PizzasOverview"
              component={PizzasOverview}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ManagePizza"
              component={ManagePizza}
              options={{
                presentation: "modal",
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </PizzasContextProvider>
    </>
  );
}
