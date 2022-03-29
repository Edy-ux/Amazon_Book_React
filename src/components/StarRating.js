import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';
import '../index.css';

//return implicito
const Star = ({ selected = false, onSelect = (f) => f }) => (
  <FaStar
    color={selected ? '#FBA42F' : 'grey'}
    onClick={onSelect}
    style={styleStar}
  />
);

const createArray = (length) => [...Array(length)];

export default function StarRating({ totalStars = 5 }) {
  const [selectedStars, setSelectedStars] = useState(0);

  console.log(selectedStars);

  return [
    <>
      <div className="stars-rating ">
        {createArray(totalStars).map((n, i) => (
          <Star
            key={i}
            onSelect={() => setSelectedStars(i + 1)}
            selected={selectedStars > i}
          />
        ))}
      </div>
      <p>
        {selectedStars} of {totalStars} stars
      </p>
    </>,
  ];
}

const styleStar = { fontSize: '22px', marginTop: '10px',  };
