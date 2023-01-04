import { useContext } from "react";

import PizzasOutput from "../components/PizzasOutput/PizzasOutput";
import { PizzasContext } from "../util/pizzasContext";

function AllPizzas() {
  const pizzasCtx = useContext(PizzasContext);

  return (
    <PizzasOutput
      pizzas={pizzasCtx.pizzas}
      pizzasPeriod="Total"
      fallbackText="No registered pizzas found!"
    />
  );
}

export default AllPizzas;
