import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeHostel } from "@/redux/cartSlice";

export default function CartPopup({ isOpen, onClose }) {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.items); // Ensure state path matches your Redux structure

  const handleRemoveFromCart = (hostelId) => {
    dispatch(removeHostel({ id: hostelId }));
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg w-96 p-6 relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-600 hover:text-gray-900"
        >
          ✕
        </button>
        <h2 className="text-2xl font-semibold mb-4">Your Cart</h2>
        {cart.length > 0 ? (
          <div className="space-y-4">
            {cart.map((hostel) => (
              <div
                key={hostel.id}
                className="flex justify-between items-center p-3 border border-gray-200 rounded-lg"
              >
                <p>{hostel.name}</p>
                <button
                  onClick={() => handleRemoveFromCart(hostel.id)}
                  className="text-red-500 hover:underline"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-gray-500">Cart is empty.</p>
        )}
      </div>
    </div>
  );
}
