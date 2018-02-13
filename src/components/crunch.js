import React from 'react';

const crunch = [
  {
    name: "Onion Crisps"
  },
  {
    name: "Furikake"
  },
  {
    name: "Macadamia Nuts"
  },
  {
    name: "Shredded Nori"
  },
  {
    name: "Tempura Flake"
  }
]

const Crunch = () => {
  return (
    <ul>
      {crunch.map((item, index) => {
        return (
          <div className="list-item" key={item+index}>
            <li>{item.name}</li>
          </div>
        )
      })}
    </ul>
  )
}

export default Crunch;
