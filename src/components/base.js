import React from 'react';

const base = [
  {
    name: "Sushi Rice"
  },
  {
    name: "Brown Rice"
  },
  {
    name: "Fresh Romaine & Spring Mixed"
  }
]

const Base = () => {
  return (
    <ul>
      {base.map((item, index) => {
        return (
          <div className="list-item" key={item+index}>
            <li>{item.name}</li>
          </div>
        )
      })}
    </ul>
  )
}

export default Base;
