import { useState } from "react";
import Tags from "../components/Tags";
import CustomTagSelect from "../components/CustomTagSelect";

function AddArtist() {
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  const handleTagChange = (selected: string[]) => {
    setSelectedTags(selected);
  };

  return (
    <div className="flex justify-center border-2 border-black w-80">
      <form className="flex flex-col items-center w-72">
        <label>Add Artist Name</label>
        <input type="text" />
        <label>Add Artist Image</label>
        <input type="text" />
        <label>Please Select Tags</label>
        <CustomTagSelect
          selectedTags={selectedTags}
          onTagChange={handleTagChange}
        />
        <Tags tags={selectedTags} />
        <button type="submit" className="mt-4 btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}

export default AddArtist;
