import "./input-text.css";
import { useState } from "react";

export default function InputText({
  placeholder,
  name,
  value,
  onChange,
  error,
}) {
  const [data, setData] = useState("");

  return (
    <div className="input-text-section">
      <input
        type="text"
        placeholder={placeholder}
        onChange={onChange}
        name={name}
        value={value}
      />
      {error && <span className="error">{error}</span>}
    </div>
  );
}
