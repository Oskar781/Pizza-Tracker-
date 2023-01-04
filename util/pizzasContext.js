import { createContext, useReducer } from "react";

const PIZZAS = [];

export const PizzasContext = createContext({
  pizzas: [],
  addPizza: ({ description, amount, date }) => {},
  deletePizza: (id) => {},
  updatePizza: (id, { description, amount, date }) => {},
});

const pizzasReducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      const id = new Date().toString() + Math.random().toString();
      return [{ ...action.payload, id: id }, ...state];
    case "UPDATE":
      const updatablePizzaIndex = state.findIndex(
        (pizza) => pizza.id === action.payload.id
      );
      const updatablePizza = state[updatablePizzaIndex];
      const updatedItem = { ...updatablePizza, ...action.payload.data };
      const updatedPizzas = [...state];
      updatedPizzas[updatablePizzaIndex] = updatedItem;
      return updatedPizzas;
    case "DELETE":
      return state.filter((pizza) => pizza.id !== action.payload);
    default:
      return state;
  }
};

function PizzasContextProvider({ children }) {
  const [pizzasState, dispatch] = useReducer(pizzasReducer, PIZZAS);

  function addPizza(pizzaData) {
    dispatch({ type: "ADD", payload: pizzaData });
  }

  function deletePizza(id) {
    dispatch({ type: "DELETE", payload: id });
  }

  function updatePizza(id, pizzaData) {
    dispatch({ type: "UPDATE", payload: { id: id, data: pizzaData } });
  }

  const value = {
    pizzas: pizzasState,
    addPizza: addPizza,
    deletePizza: deletePizza,
    updatePizza: updatePizza,
  };

  return (
    <PizzasContext.Provider value={value}>{children}</PizzasContext.Provider>
  );
}

export default PizzasContextProvider;
