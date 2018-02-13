import React from 'react';

// Components
import Base from './base';
import Proteins from './proteins';
import Mixins from './mixins';
import Sauces from './sauce';
import Toppings from './toppings';
import Crunch from './crunch';

const Build = () => {
  return (
    <div className="build">
      <div className="container">
      <h2>Build&nbsp;Your&nbsp;Own&nbsp;Bowl</h2>
        <div className="svgFlag">
          <svg width='100%' height='100%'
            preserveAspectRatio="none"
            viewBox="0 0 100 100">
            <polyline points="0 0, 0 100,100 100,95 50, 100 0, 0 0" />
          </svg>
        </div>

      <strong><p>Small $9.25 (2 Scoops of proteins)</p></strong>
      <strong><p>Large $10.55 (3 Scoops of proteins)</p></strong>
    </div>
    <div className="build-menu container">
      <div className="build-left">
        <h3><span className="step">Step 1:</span> <span className="step-item">Base</span></h3>
        <Base />
        <h3><span className="step">Step 2:</span> <span className="step-item">Proteins</span></h3>
        <Proteins />
        <h3><span className="step">Step 3:</span> <span className="step-item">Mixin-Ins</span></h3>
        <Mixins />
      </div>
      <div className="build-right">
        <h3><span className="step">Step 4:</span> <span className="step-item">Poke Sauce</span></h3>
        <Sauces />
        <h3><span className="step">Step 5:</span> <span className="step-item">Top It Off</span></h3>
        <Toppings />
        <h3><span className="step">Step 6:</span> <span className="step-item">Choose Crunch</span></h3>
        <Crunch />
      </div>
    </div>
  </div>
  )
}

export default Build;
