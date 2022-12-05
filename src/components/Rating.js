import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import { Container, Radio, Rate } from "./RatingStyles";
const Rating = () => {
  const [rate, setRate] = useState(0);
  return (
    <Container>
      {[...Array(5)].map((item, index) => {
        const givenRating = index + 1;
        return (
          <label>
            <Radio
              type="radio"
              value={givenRating}
              onClick={() => {
                setRate(givenRating);
                alert(`Are you sure you want to give ${givenRating} stars ?`);
              }}
            />
            <Rate>
              <FaStar
                color={
                  givenRating < rate || givenRating === rate
                    ? "#24E0FA"
                    : "D9D9D9"
                }
              />
            </Rate>
          </label>
        );
      })}
    </Container>
  );
};
  
export default Rating;