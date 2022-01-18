import React from "react";
import { useDispatch } from "react-redux";
import { addCustomer } from "../features/customerSlice";
import { removeReservation } from "../features/reservationSlice";
import { v4 as uuid } from "uuid";

interface ReservationProps {
  name: string;
  index: number;
}

function ReservationCard({ name, index }: ReservationProps) {
  const dispatch = useDispatch();
  return (
    <div>
      <div
        onClick={() => {
          dispatch(removeReservation(index));
          dispatch(
            addCustomer({
              id: uuid(),
              name,
              food: [],
            })
          );
        }}
        className="reservation-card-container"
      >
        {name}
      </div>
    </div>
  );
}

export default ReservationCard;
