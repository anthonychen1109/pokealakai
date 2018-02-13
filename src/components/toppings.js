import React from 'react';

const toppings = [
  {
    name: "Seaweed Salad"
  },
  {
    name: "Spicy Crab"
  },
  {
    name: "Edamame"
  },
  {
    name: "Cucumber"
  },
  {
    name: "Pickled Ginger & Wasabi"
  },
  {
    name: "Cabbage"
  },
  {
    name: "Sweet Corn"
  },
  {
    name: "Masago"
  },
  {
    name: "Sesame Seeds"
  },
  {
    name: "Sweet Onion"
  },
  {
    name: "Grape Tomato"
  },
  {
    name: "Avocado + $1.50"
  }
]

const Toppings = () => {
  return (
    <ul>
      {toppings.map((item, index) => {
        return (
          <div className="list-item" key={item+index}>
            <li>{item.name}</li>
          </div>
        )
      })}
      <p>Seasonal Topping when available</p>
    </ul>
  )
}

export default Toppings
