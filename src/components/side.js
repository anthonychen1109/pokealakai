import React from 'react';

const sides = [
  {
    name: "Miso Soup",
    price: "1.95"
  },
  {
    name: "Seaweed Salad",
    price: "4.25"
  },
  {
    name: "Octopus Salad",
    price: "4.25"
  },
  {
    name: "Water (Bottle)",
    price: "1.50"
  },
  {
    name: "Can Soda",
    price: "1.25"
  },
]

const Side = () => {
  return (
    <div className="side">
      <div className="container">
        <h2>Side</h2>
        <div className="svgFlag">
          <svg width='100%' height='100%'
            preserveAspectRatio="none"
            viewBox="0 0 100 100">
            <polyline points="0 0, 0 100,100 100,95 50, 100 0, 0 0" />
          </svg>
        </div>
      </div>
        {sides.map((item, index) => {
          return (
            <div key={item+index} className="sides container">
              <div className="sides-name">
                <div><p>{item.name}</p></div>
              </div>
              <div className="sides-price">
                <div><p>{item.price}</p></div>
              </div>
            </div>
          )
        })}
    </div>
  )
}

export default Side;
