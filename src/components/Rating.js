import React, { useState } from 'react';

function RatingSystem() {
  const [rating, setRating] = useState(0);

  const smileys = ['😀', '😃', '😄', '😁', '😆'];
  const feelings = ['Alright', 'Ok', 'Happy', 'Delighted', 'Ecstatic'];

  return (
    <div>
      <h3>Happy Student</h3>
      {smileys.map((smiley, index) => (
        <button
          key={index}
          onClick={() => setRating(index + 1)}
          style={{
            fontSize: '4rem',
            cursor: 'pointer',
            opacity: rating === 0 || index + 1 === rating ? 1 : 0.3,
          }}
        >
          {smiley}
        </button>
      ))}
      <p>{rating > 0 ? feelings[rating - 1] : 'Choose a rating'}</p>
    </div>
  );
}

export default RatingSystem;
