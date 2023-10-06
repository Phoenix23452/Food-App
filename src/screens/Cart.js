import React from 'react';
import DeleteIcon from '@material-ui/icons/Delete';
import { useCart, useDispatchCart } from '../components/ContextReducers';

export default function Cart() {
  let data = useCart();
  let dispatch = useDispatchCart();

  if (data.length === 0) {
    return (
      <div className="m-5 w-100 text-center text-lg">
        The Cart is Empty!
      </div>
    );
  }

  const handleCheckOut = async () => {
    let userEmail = localStorage.getItem("userEmail");
 
    let response = await fetch("http://localhost:5000/api/orderData", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        order_data: data,
        email: userEmail,
        order_date: new Date().toDateString()
      })
    });

    if (response.status === 200) {
      dispatch({ type: "DROP" });
    }
  };

  let totalPrice = data.reduce((total, food) => total + food.price, 0);

  return (
    <div className="container mx-auto mt-5">
      <div className="overflow-x-auto">
        <table className="min-w-full table-auto">
          <thead className="bg-green-500 text-white text-lg">
            <tr>
              <th className="px-4 py-2">#</th>
              <th className="px-4 py-2">Name</th>
              <th className="px-4 py-2">Quantity</th>
              <th className="px-4 py-2">Option</th>
              <th className="px-4 py-2">Amount</th>
              <th className="px-4 py-2"></th>
            </tr>
          </thead>
          <tbody>
            {data.map((food, index) => (
              <tr key={index}>
                <td className="px-4 py-2">{index + 1}</td>
                <td className="px-4 py-2">{food.name}</td>
                <td className="px-4 py-2">{food.qty}</td>
                <td className="px-4 py-2">{food.size}</td>
                <td className="px-4 py-2">{food.price}</td>
                <td className="px-4 py-2">
                  <button
                    type="button"
                    className="bg-red-500 text-white py-1 px-2 rounded-full shadow-md hover:shadow-xl"
                    onClick={() => {
                      dispatch({ type: "REMOVE", index: index });
                    }}
                  >
                    <DeleteIcon />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="mt-4">
          <h1 className="text-2xl font-semibold">Total Price: {totalPrice}/-</h1>
        </div>
        <div className="mt-4">
          <button
            className="bg-green-500 text-white py-2 px-4 rounded-lg"
            onClick={handleCheckOut}
          >
            Check Out
          </button>
        </div>
      </div>
    </div>
  );
}