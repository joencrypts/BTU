import React, { useEffect } from "react";

export const useOutsideClick = (
  ref: React.RefObject<HTMLElement>,
  callback: (event: MouseEvent | TouchEvent) => void
) => {
  useEffect(() => {
    const listener = (event: Event) => {
      // DO NOTHING if the element being clicked is the target element or their children
      if (!ref.current || !(event.target instanceof Node) || ref.current.contains(event.target)) {
        return;
      }
      if (event instanceof MouseEvent || event instanceof TouchEvent) {
        callback(event);
      }
    };

    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);

    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [ref, callback]);
}; 