import { useState } from "react";
interface TextProps {
  children: string;
  maxChars?: number;
}

function ExpandableText({ children, maxChars = 100 }: TextProps) {
  const [isExpanded, setExpanded] = useState(false);

  const handleClick = () => {
    setExpanded(!isExpanded);
  };

  if (children.length <= maxChars) {
    return <p>{children}</p>;
  }
  const text = isExpanded ? children : children.substring(0, maxChars);

  return (
    <div className="font-['Itim'] text-3xl">
      <p>{text}...</p>
      <button className="btn btn-primary" onClick={handleClick}>
        {isExpanded ? "Less" : "More"}
      </button>
    </div>
  );
}

export default ExpandableText;
