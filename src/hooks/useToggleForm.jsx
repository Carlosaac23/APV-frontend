import { useState } from 'react';

export function useToggleForm() {
  const [showForm, setShowForm] = useState(false);

  function toggleForm() {
    setShowForm(prevState => !prevState);
  }

  return { showForm, toggleForm };
}
