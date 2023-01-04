import { useContext, useLayoutEffect } from "react";
import { StyleSheet, View } from "react-native";

import PizzaForm from "../components/ManagePizza/PizzaForm";
import IconButton from "../components/UI/IconButton";
import { PizzasContext } from "../util/pizzasContext";
import { Colors } from "../constants/Colors";

function ManagePizza({ route, navigation }) {
  const pizzasCtx = useContext(PizzasContext);

  const editedPizzaId = route.params?.pizzaId;
  const isEditing = !!editedPizzaId;

  const selectedPizza = pizzasCtx.pizzas.find(
    (pizza) => pizza.id === editedPizzaId
  );

  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEditing ? "Edit Pizza" : "Add Pizza",
    });
  }, [navigation, isEditing]);

  function deletePizzaHandler() {
    pizzasCtx.deletePizza(editedPizzaId);
    navigation.goBack();
  }

  function cancelHandler() {
    navigation.goBack();
  }

  function confirmHandler(pizzaData) {
    if (isEditing) {
      pizzasCtx.updatePizza(editedPizzaId, pizzaData);
    } else {
      pizzasCtx.addPizza(pizzaData);
    }
    navigation.goBack();
  }

  return (
    <View style={styles.container}>
      <PizzaForm
        submitButtonLabel={isEditing ? "Update" : "Add"}
        onSubmit={confirmHandler}
        onCancel={cancelHandler}
        defaultValues={selectedPizza}
      />
      {isEditing && (
        <View style={styles.deleteContainer}>
          <IconButton
            icon="trash"
            color={Colors.error500}
            size={36}
            onPress={deletePizzaHandler}
          />
        </View>
      )}
    </View>
  );
}

export default ManagePizza;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: Colors.primary800,
  },
  deleteContainer: {
    marginTop: 16,
    paddingTop: 8,
    borderTopWidth: 2,
    borderTopColor: Colors.primary200,
    alignItems: "center",
  },
});
