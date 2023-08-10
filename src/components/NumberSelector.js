import React, { useState } from 'react';
import '../components/selector.css';

const NumberSelector = ({error,  selectedNum,setSelectedNum }) => {
  const arr = [1, 2, 3, 4, 5, 6];
  // const [selectedNum, setSelectedNum] = useState(null);

  const handleBoxClick = (value) => {
    if (selectedNum === value) {
      setSelectedNum(null);
    } else {
      setSelectedNum(value);
    }
  };

  return (
    <div className='selectorContainer'>
      <p>{error}</p>
     <div className='flex'>
     {arr.map((value, i) => (
        <div
          className={`box ${selectedNum === value ? 'selected' : ''}`}
          key={i}
          onClick={() => handleBoxClick(value)}
        >
          {value}
        </div>
      ))}
     </div>
     <p>Select Number</p>
    </div>
  );
};

export default NumberSelector;
