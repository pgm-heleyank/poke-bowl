import React, { useContext, useEffect } from "react";
import { OrderContext } from "../App";
import { CheckOut, NotHungry } from "../components";

const CheckOutPage = () => {
  const [order] = useContext(OrderContext);
  useEffect(() => {
    if (order === null || order.length === 0) {
      const timer = setTimeout(() => {
        window.location.href = "/";
      }, 4500);
      return () => clearTimeout(timer);
    }
  }, [order]);
  return order === null || order.length === 0 ? <NotHungry /> : <CheckOut />;
};

export default CheckOutPage;
