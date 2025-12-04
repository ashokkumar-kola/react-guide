import { useState } from 'react';

export function useTextInput(initialValue = '') {
  const [value, setValue] = useState(initialValue);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const val = e.target.value;
    setValue(val);

    // simple validation
    if (!val.trim()) {
      setError('This field is required');
    } else {
      setError('');
    }
  };

  return {
    value,
    error,
    handleChange,
  };
}
