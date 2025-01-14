import { useState } from "react";

interface CustomTagSelectProps {
  selectedTags: string[];
  onTagChange: (selected: string[]) => void;
}

const CustomTagSelect = ({
  selectedTags,
  onTagChange,
}: CustomTagSelectProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const options = ["Red", "Blue", "Green", "Yellow", "Purple"];

  const handleTagClick = (tag: string) => {
    const updatedTags = selectedTags.includes(tag)
      ? selectedTags.filter((t) => t !== tag)
      : [...selectedTags, tag];
    onTagChange(updatedTags);
  };

  return (
    <div className="relative w-full">
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="w-full p-2 text-left border rounded"
      >
        Select Tags
      </button>
      {isOpen && (
        <div className="absolute z-10 w-full mt-1 bg-white border rounded shadow">
          {options.map((option) => (
            <div
              key={option}
              onClick={() => handleTagClick(option)}
              className={`p-2 cursor-pointer hover:bg-gray-100 ${
                selectedTags.includes(option) ? "bg-blue-100" : ""
              }`}
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CustomTagSelect;
