import React, { useState } from 'react';
import { Search, X } from 'lucide-react';

const Input = ({ value, onChange, placeholder = 'Search...', className = '', ...props }) => {
  const [focused, setFocused] = useState(false);

  return (
    <div
      className={`relative flex items-center rounded-xl px-4 py-2 border border-gray-600 bg-black transition-all duration-300 ${
        focused ? 'ring-2 ring-blue-500' : ''
      } ${className}`}
    >
      <Search className="w-4 h-4 text-gray-400 mr-3" />
      <input
        value={value}
        onChange={onChange}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        placeholder={placeholder}
        className="flex-1 bg-transparent text-white outline-none placeholder-gray-500"
        {...props}
      />
      {value && (
        <button onClick={() => onChange({ target: { value: '' } })}>
          <X className="w-4 h-4 text-gray-400 hover:text-white transition" />
        </button>
      )}
    </div>
  );
};

export { Input };
