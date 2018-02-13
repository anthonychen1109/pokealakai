import React from 'react';

const sauces = [
  {
    name: "Unagi (eel)"
  },
  {
    name: "Hawaiian Classic"
  },
  {
    name: "Honey Wasabi"
  },
  {
    name: "Ponzu Fresh"
  },
  {
    name: "Cilantro"
  },
  {
    name: "Spicy Mayo"
  },
  {
    name: "Sesame Ginger"
  },
  {
    name: "Olive Oil"
  },
  {
    name: "Miso"
  }
]

const Sauce = () => {
  return (
    <ul>
      {sauces.map((item, index) => {
        return (
          <div className="list-item" key={item+index}>
            <li>{item.name}</li>
          </div>
        )
      })}
    </ul>
  )
}

export default Sauce;
