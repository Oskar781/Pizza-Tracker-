import { useContext } from "react";

import PizzasOutput from "../components/PizzasOutput/PizzasOutput";
import { PizzasContext } from "../util/pizzasContext";
import { getDateMinusDays } from "../util/date";

const RecentPizzas = () => {
  const pizzasCtx = useContext(PizzasContext);

  const recentPizzas = pizzasCtx.pizzas.filter((pizza) => {
    const today = new Date();
    const date7DaysAgo = getDateMinusDays(today, 7);

    return pizza.date >= date7DaysAgo && pizza.date <= today;
  });

  return (
    <PizzasOutput
      pizzas={recentPizzas}
      pizzasPeriod="Last 7 Days"
      fallbackText="No pizzas registered for the last 7 days."
    />
  );
};

export default RecentPizzas;
