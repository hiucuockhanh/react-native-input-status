import { useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { add } from '../../redux/inputSlice';
import type { RootState } from '../../redux/store';

export const useInput = () => {
  const dispatch = useDispatch();
  const selectInputStates = (state: RootState) => state.input;
  const inputStates = useSelector(selectInputStates);
  console.log('inputStates: ', inputStates.status);
  console.log('inputStates: ', inputStates.icon);
  const [status, setStatus] = useState<string>('');
  const [icon, setIcon] = useState<string>('');
  const handleSubmit = useCallback(() => {
    dispatch(add({ status, icon }));
  }, [dispatch, icon, status]);

  return {
    status,
    setStatus,
    icon,
    setIcon,
    handleSubmit,
  };
};
