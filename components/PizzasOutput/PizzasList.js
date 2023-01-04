import PizzaItem from "./PizzaItem";

import { FlatList } from "react-native";

const renderPizzaItem = (itemData) => {
  return <PizzaItem {...itemData.item} />;
};

const PizzasList = ({ pizzas }) => {
  return (
    <FlatList
      data={pizzas}
      renderItem={renderPizzaItem}
      keyExtractor={(item) => item.id}
    />
  );
};

export default PizzasList;
