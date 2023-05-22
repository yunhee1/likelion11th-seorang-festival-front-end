import React from "react";

function ContentList({ contents }) {
  return (
    <div>
      {contents.map((content) => (
        <li key={content.id}>{content.content}</li>
      ))}
    </div>
  );
}

export default ContentList;
