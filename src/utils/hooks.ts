import React, { useState } from "react";

export interface UseInput<T> {
  value: T;
  onChange: Function;
}

export const useInput = (initValue: any): UseInput<any> => {
  const [value, setValue] = useState(initValue);
  const onChange = (e) => {
    const {
      target: { value },
    } = e;
    setValue(value);
  };
  return { value, onChange };
};
