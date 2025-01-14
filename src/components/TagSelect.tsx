type SelectTagProp = {
  selectedTag: string[];
  onTagChange: (selected: string[]) => void;
};

function TagSelect({ selectedTag, onTagChange }: SelectTagProp) {
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selected = Array.from(
      event.target.selectedOptions,
      (option) => option.value
    );
    onTagChange(selected);
  };
  return (
    <select
      multiple
      className="w-full max-w-xs mb-4 select select-accent"
      value={selectedTag}
      onChange={handleChange}
    >
      <option value="Red">Red</option>
      <option value="Blue">Blue</option>
      <option value="Green">Green</option>
      <option value="Yellow">Yellow</option>
      <option value="Purple">Purple</option>
    </select>
  );
}

export default TagSelect;
