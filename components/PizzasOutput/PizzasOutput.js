import { StyleSheet, Text, View } from "react-native";

import { Colors } from "../../constants/Colors";
import PizzasList from "./PizzasList";
import PizzasSummary from "./PizzasSummary";

const PizzasOutput = ({ pizzas, pizzasPeriod, fallbackText }) => {
  let content = <Text style={styles.infoText}>{fallbackText}</Text>;

  if (pizzas.length > 0) {
    content = <PizzasList pizzas={pizzas} />;
  }

  return (
    <View style={styles.container}>
      <PizzasSummary pizzas={pizzas} periodName={pizzasPeriod} />
      {content}
    </View>
  );
};

export default PizzasOutput;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 24,
    paddingBottom: 0,
    backgroundColor: Colors.primary700,
  },
  infoText: {
    color: "white",
    fontSize: 16,
    textAlign: "center",
    marginTop: 32,
  },
});
