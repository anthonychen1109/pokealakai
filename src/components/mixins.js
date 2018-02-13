import React from 'react';

const mixins = [
  {
    name: "Masago"
  },
  {
    name: "Hawaiian Salt"
  },
  {
    name: "Cilantro"
  },
  {
    name: "Diced mango"
  },
  {
    name: "Edamame"
  },
  {
    name: "Green Onion"
  },
  {
    name: "Sesame Seed"
  },
]

const Mixins = () => {
  return (
    <ul>
      {mixins.map((item, index) => {
        return (
          <div className="list-item" key={item+index}>
            <li>{item.name}</li>
          </div>
        )
      })}
    </ul>
  )
}

export default Mixins;
