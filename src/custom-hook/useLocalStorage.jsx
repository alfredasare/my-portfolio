import React, { useState } from "react"

const useLocalStorage = (key, initialValue) => {

  const [storedValue, setStoredValue] = useState(initialValue);

  const setValue = (value) => {
    window.localStorage.setItem(key, value);
    setStoredValue(value);
  }
}

export default useLocalStorage
