import { View, Text, StyleSheet } from "react-native";

import { Colors } from "../../constants/Colors";

function PizzasSummary({ pizzas, periodName }) {
  const pizzasSum = pizzas.reduce((sum, pizza) => {
    return sum + pizza.amount;
  }, 0);

  return (
    <View style={styles.container}>
      <Text style={styles.period}>{periodName}</Text>
      <Text style={styles.sum}>PLN {pizzasSum.toFixed(2)}</Text>
    </View>
  );
}

export default PizzasSummary;

const styles = StyleSheet.create({
  container: {
    padding: 8,
    backgroundColor: Colors.primary50,
    borderRadius: 6,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  period: {
    fontSize: 12,
    color: Colors.primary100,
  },
  sum: {
    fontSize: 16,
    fontWeight: "bold",
    color: Colors.primary100,
  },
});
