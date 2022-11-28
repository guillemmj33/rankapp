import React, { useRef, useState } from "react";
import {SearchStyle} from "./Search_style";

export const ResultContainer = ({ onChange, suggestions }) => {
  const [q, setQ] = useState("");
  const [active, setActive] = useState(0);
  const boxRef = useRef();
  const handleChange = (e) => {
    setQ(e.target.value);
    onChange(e.target.value);
  };
  const handleKeyUp = (e) => {
    console.log(e.keyCode);
    switch (e.keyCode) {
      case 38: {
        if (active === 1) {
          setActive(0);
        } else if (active <= 0) {
          setActive(suggestions.length);
        } else {
          setActive((prev) => prev - 1);
        }
        if (active > 3) {
          boxRef.current.scrollTop -= 25;
        }
        break;
      }
      case 40: {
        if (active >= suggestions.length) {
          setActive(0);
        } else {
          setActive((prev) => prev + 1);
        }
        if (active > 3) {
          boxRef.current.scrollTop += 25;
        }
        break;
      }
      default: {
        return;
      }
    }
  };

  return (
    <div onKeyUp={handleKeyUp}>      
      <SearchStyle placeholder="search app" value={q} onChange={handleChange} />
      {q && (
        <div ref={boxRef} active={active}>
          {suggestions.map((item, i) => (
            <div onMouseOver={() => setActive(i + 1)} key={item}>
              {item}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
