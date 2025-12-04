import React, { useState } from 'react';
import { TextInput } from '../components/Input';
import { Search, User } from 'lucide-react';

const InputsPage = () => {
  const [name, setName] = useState('');
  const [error, setError] = useState('');

  const validate = (e) => {
    const val = e.target.value;
    setName(val);
    setError(!val.trim() ? 'Name is required' : '');
  };

  return (
    <div className="p-6 ">
      <h1 className="text-2xl font-bold mb-4">Inputs</h1>

      <div className="flex gap-4">
        <TextInput
          label="Full Name"
          name="full_name"
          placeholder="Enter full name"
          value={name}
          onChange={validate}
          required
          error={error}
          leftIcon={<User size={18} />}
          rightIcon={<Search size={18} />}
        />
      </div>
      {name && <p className="mt-4 text-green-600">Hello, {name}!</p>}
    </div>
  );
};

export default InputsPage;
