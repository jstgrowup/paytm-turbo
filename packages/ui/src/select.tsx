"use client";
interface SelectOption {
  key: string;
  value: string;
}
interface SelectProps {
  options: SelectOption[];
  onSelect: (value: string) => void;
  placeholder?: string;
}
export const Select = ({ options, onSelect, placeholder }: SelectProps) => {
  return (
    <select
      onChange={(e) => onSelect(e.target.value)}
      className="w-full px-4 py-2 text-left border border-gray-300 bg-white transition-colors rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
    >
      {placeholder && (
        <option value="" disabled selected>
          {placeholder}
        </option>
      )}
      {options.map((option) => (
        <option value={option.value} key={option.key}>
          {option.key}
        </option>
      ))}
    </select>
  );
};
