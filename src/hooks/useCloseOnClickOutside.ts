import { RefObject, useEffect } from 'react';

function useCloseOnClickOutside<T extends HTMLElement = HTMLElement>(
  ref: RefObject<T> | null,
  closeFunction: () => void,
  exceptElementRef?: RefObject<T> | null
) {
  useEffect(() => {
    const handleCloseOnClickOutside = (event: any) => {
      const element = ref?.current;
      const exceptionElement = exceptElementRef?.current;

      if (exceptionElement && exceptionElement.contains(event.target as Node)) return;
      if (element && !element.contains(event.target as Node)) closeFunction();
    };

    document.querySelector('#root')?.addEventListener('mousedown', handleCloseOnClickOutside);
    return () => {
      document.querySelector('#root')?.removeEventListener('mousedown', handleCloseOnClickOutside);
    };
  }, [closeFunction, exceptElementRef, ref]);
}

export default useCloseOnClickOutside;
