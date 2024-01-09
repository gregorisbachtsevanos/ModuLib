import { RefObject } from 'react';
declare function useCloseOnClickOutside<T extends HTMLElement = HTMLElement>(ref: RefObject<T> | null, closeFunction: () => void, exceptElementRef?: RefObject<T> | null): void;
export default useCloseOnClickOutside;
