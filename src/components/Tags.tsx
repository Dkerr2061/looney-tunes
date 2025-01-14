export type TagProps = {
  tags?: string[];
};

const Tags = ({ tags }: TagProps) => {
  return (
    <div className="flex flex-wrap gap-2">
      {tags &&
        tags.map((tag) => (
          <span
            key={tag}
            className="px-4 py-1 text-sm text-white bg-blue-500 rounded-full"
          >
            {tag}
          </span>
        ))}
    </div>
  );
};

export default Tags;
