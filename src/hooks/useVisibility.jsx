import { useState } from 'react';

export function useVisibility() {
  const [toggleVisibility, setToggleVisibility] = useState('password');

  const changeVisibility = () => {
    setToggleVisibility(toggleVisibility === 'password' ? 'text' : 'password');
  };

  return { toggleVisibility, changeVisibility };
}
