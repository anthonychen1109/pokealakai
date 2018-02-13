import React from 'react';

// Components
import Build from './build';
import Side from './side';

const signature = [
  {
    name: "Hawaiian Classic",
    price: "9.95",
    desc: "Fresh tuna, green & sweet onion, cucumber, avocado, furikake, sesame seeds, red tobiko, Hawaiian salt, Jalapeno, sweet chili & cilantro sauce"
  },
  {
    name: "Salmon Lover",
    price: "9.50",
    desc: "Fresh Salmon, green onion, edamame, sweet corn, cucumber, cabbage, masago, sesame seeds, onion crisps, tempura flake, Hawaiian classic & sesame ginger sauce"
  },
  {
    name: "Shrimp & Crab",
    price: "9.25",
    desc: "Shrimp, spicy crab, mango, masago, cucumber, avocado, sesame seeds, shredded nori, tempura flake, unagi & spicy mayo sauce"
  },
  {
    name: "Vege Tofu",
    price: "8.50",
    desc: "Organic tofu, green & sweet onion, macadamia nuts, onion crispy, edamame, grape tomatoes, sweet corn, sesame seeds, unagi & honey wasabi sauce"
  },
]

const Signature = () => {
  return (
    <div className="signature">
      <div className="container">
        <h2>Signature&nbsp;Bowls</h2>
        <div className="svgFlag">
          <svg width='100%' height='100%'
            preserveAspectRatio="none"
            viewBox="0 0 100 100">
            <polyline points="0 0, 0 100,100 100,95 50, 100 0, 0 0" />
          </svg>
        </div>


        <strong><p>Choose one: Sushi Rice/Brown Rice/Fresh Romaine & Spring Mixed</p></strong>
      </div>
        {signature.map((item, index) => {
          return (
            <div key={item+index} className="container">
              <div className="signature-item-price">
                <div><h4>{item.name}</h4></div>
                <div><h4>{item.price}</h4></div>
              </div>
              <div className="signature-desc">
                <div><p>{item.desc}</p></div>
              </div>
            </div>
          )
        })}
        <Build />
        <Side />
    </div>
  )
}

export default Signature;
