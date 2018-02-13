import React from 'react';

const proteins = [
  {
    name: "Tuna",
  },
  {
    name: "Salmon",
  },
  {
    name: "Shrimp",
  },
  {
    name: "Yellowtail"
  },
  {
    name: "Eel + $1.50",
  },
  {
    name: "Organic Tofu",
  },
  {
    name: "Extra Protein + $1.75",
  }
]

const Proteins = () => {
  return (
    <ul>
      {proteins.map((item, index) => {
        return (
          <div className="list-item" key={item+index}>
            <li>{item.name}</li>
          </div>
        )
      })}
    </ul>
  )
}

export default Proteins;
