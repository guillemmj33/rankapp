import { useState } from "react";
import {useLocalStorage} from './useLocalStorage'

import React from "react";

const useLocalStorage = (key, initialValue) => {
  const [storedValue, setStoredValue] = useState(() => {
    try{
        const item = window.localStorage.getItem(key)
        return item ? JSON.parse(item) : initialValue
    }catch(error){
        return initialValue
    }
});
    const setValue = value => {
    try {
      setStoredValue(value);
      window.localStorage.setItem(key,JSON.stringify (value));
    } catch(error) {
        console.error(error)
    }
}

return
<div>

</div>;
};

export default useLocalStorage;
