import React from "react";

export default function Tag({ tagName }) {
  return (
    <div className="tag">
      <span className="tag-name">{tagName}</span>
    </div>
  );
}
