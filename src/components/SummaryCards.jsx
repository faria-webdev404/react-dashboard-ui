// components/SummaryCards.jsx
import React from "react";

const SummaryCards = () => {
  const cards = [
    { label: "Daily Sales", value: "$249.95", color: "text-green-500", bar: "bg-green-400 w-1/2" },
    { label: "Monthly Sales", value: "$2,942.32", color: "text-red-500", bar: "bg-purple-400 w-1/3" },
    { label: "Yearly Sales", value: "$8,638.32", color: "text-green-500", bar: "bg-teal-400 w-2/3" },
  ];

  return (
    <div className="grid grid-cols-3 gap-6 mb-6">
      {cards.map((card, i) => (
        <div key={i} className="bg-white p-10 rounded-xl shadow">
          <p className="text-gray-800 font-semibold font-montserrat text-lg mb-2">{card.label}</p>
          <h2 className={`text-2xl font-bold ${card.color}`}>{card.value}</h2>
          <div className="h-1 mt-3 bg-gray-200 rounded-full">
            <div className={`h-full rounded-full ${card.bar}`}></div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default SummaryCards;
