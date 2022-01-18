import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Customer {
  id: string;
  name: string;
  food: string[];
}

interface customerState {
  value: Customer[];
}

interface addFood {
  food: string;
  id: string;
}

const initialState: customerState = {
  value: [],
};
export const customerSlice = createSlice({
  name: "customers",
  initialState,
  reducers: {
    addCustomer: (state, action: PayloadAction<Customer>) => {
      state.value.push(action.payload);
    },
    addFoodForCustomer: (state, action: PayloadAction<addFood>) => {
      state.value.forEach((customer) => {
        if (customer.id === action.payload.id)
          customer.food.push(action.payload.food);
      });
    },
  },
});

export const { addCustomer } = customerSlice.actions;

export default customerSlice.reducer;
