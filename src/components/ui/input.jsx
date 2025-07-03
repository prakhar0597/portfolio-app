export const Input = ({ value, onChange, placeholder, className }) => (
  <input
    type="text"
    value={value}
    onChange={onChange}
    placeholder={placeholder}
    className={`px-3 py-2 rounded border w-full ${className}`}
  />
);
