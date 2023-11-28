export function multiply(a: number, b: number): Promise<number> {
  return Promise.resolve(a * b);
}

import InputScreen from './components//input';
import { add, selectInputState } from './redux/inputSlice';
import { store } from './redux/store';

export { InputScreen, add, selectInputState, store };
