import { useCallback, useState } from "react";

export function useArray(initialValue) {
  const [array, setArray] = useState(initialValue);

  const push = useCallback((element) => {
    setArray((arr) => [...arr, element]);
  });

  const replace = useCallback((index, newElement) => {
    setArray((arr) =>
      arr.map((item, i) => {
        return index === i ? newElement : item;
      })
    );
  });

  const filter = useCallback((callback) => {
    setArray((arr) => {
      return arr.filter(callback);
    });
  });

  const remove = useCallback((index) => {
    setArray((arr) => arr.filter((item, i) => i !== index && item));
  });

  const clear = useCallback(() => {
    setArray([]);
  }, []);

  const reset = useCallback(() => {
    setArray(initialValue);
  }, [initialValue]);

  console.log(array);

  return { array, set: setArray, push, replace, filter, remove, clear, reset };
}
