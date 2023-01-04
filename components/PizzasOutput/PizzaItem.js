import { View, Text, Pressable, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { Colors } from "../../constants/Colors";
import { getFormattedDate } from "../../util/date";

const PizzaItem = ({ id, description, amount, date }) => {
  const navigation = useNavigation();

  const pizzaPressHandler = () => {
    navigation.navigate("ManagePizza", {
      pizzaId: id,
    });
  };

  return (
    <Pressable
      onPress={pizzaPressHandler}
      style={({ pressed }) => pressed && styles.pressed}
    >
      <View style={styles.pizzaItem}>
        <View>
          <Text style={[styles.textBase, styles.description]}>
            {description}
          </Text>
          <Text style={styles.textBase}>{getFormattedDate(date)}</Text>
        </View>
        <View style={styles.amountContainer}>
          <Text style={styles.amount}>{amount.toFixed(2)}</Text>
        </View>
      </View>
    </Pressable>
  );
};

export default PizzaItem;

const styles = StyleSheet.create({
  pressed: {
    opacity: 0.75,
  },
  pizzaItem: {
    padding: 12,
    marginVertical: 8,
    backgroundColor: Colors.primary500,
    flexDirection: "row",
    justifyContent: "space-between",
    borderRadius: 6,
    elevation: 3,
    shadowColor: Colors.gray500,
    shadowRadius: 4,
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.4,
  },
  textBase: {
    color: "white",
  },
  description: {
    fontSize: 16,
    marginBottom: 4,
    fontWeight: "bold",
  },
  amountContainer: {
    paddingHorizontal: 12,
    paddingVertical: 4,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 4,
    minWidth: 80,
  },
  amount: {
    color: Colors.primary500,
    fontWeight: "bold",
  },
});
