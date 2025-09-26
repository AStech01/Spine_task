import { useEffect, useState } from "react";
import { loadTasks } from "../utils/localStorage";

export default function Items() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const tasks = loadTasks();
    setProducts(tasks);
  }, []);

  if (products.length === 0) {
    return <p className="text-center text-gray-500 mt-10">No items added yet.</p>;
  }

  return (
    <div className="flex justify-center mt-10 px-4">
      <div className="w-full max-w-4xl bg-white shadow-lg rounded-lg p-6">
      
        <h2 className="text-2xl font-semibold text-center mb-6">My Items</h2>

      
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 justify-items-center">
          {products.map((item) => (
            <div
              key={item.id}
              className="bg-gray-50 p-4 w-64 rounded-lg shadow-md hover:shadow-lg transition"
            >
          
              <div className="h-40 w-full flex items-center justify-center bg-gray-200 mb-3 rounded-md">
                <span className="text-gray-400 text-sm">No Image</span>
              </div>

              <h3 className="text-lg font-semibold">{item.title}</h3>
              <p className="text-sm text-gray-600">
                Status: {item.completed ? "✅ Completed" : "⏳ Pending"}
              </p>
              {item.important && (
                <p className="text-sm text-yellow-500 font-medium">⭐ Important</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
