export const Button = ({ children, onClick, className }) => (
    <button
      onClick={onClick}
      className={`px-3 py-1 rounded text-white border ${className}`}
    >
      {children}
    </button>
  );
  