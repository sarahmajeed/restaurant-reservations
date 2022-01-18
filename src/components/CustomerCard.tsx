import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addFoodForCustomer } from "../features/customerSlice";

interface CustomerProps {
  id: string;
  name: string;
  food: string[];
}

function CustomerCard({ id, name, food }: CustomerProps) {
  const dispatch = useDispatch();
  const [customerFoodInput, setCustomerFoodInput] = useState("");

  const handleAddFood = () => {
    dispatch(
      addFoodForCustomer({
        id,
        food: customerFoodInput,
      })
    );

    setCustomerFoodInput("");
  };

  return (
    <div className="customer-food-card-container">
      <p>{name}</p>
      <div className="customer-foods-container">
        <div className="customer-food">
          {food.map((food) => {
            return <p>{food}</p>;
          })}
        </div>
        <div className="customer-food-input-container">
          <input
            value={customerFoodInput}
            onChange={(e) => setCustomerFoodInput(e.target.value)}
          />
          <button onClick={handleAddFood}>Add</button>
        </div>
      </div>
    </div>
  );
}

export default CustomerCard;
