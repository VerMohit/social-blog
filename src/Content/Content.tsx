import React from "react";
import PostList from "../PostList/PostList";

const Content: React.FC<contentProps> = ({
  charLimit,
  contents,
  charCount,
  setChars,
  setContents,
}) => {
  return (
    <div>
      {contents.length ? (
        <PostList
          contents={contents}
          charCount={charCount}
          charLimit={charLimit}
          setChars={setChars}
          setContents={setContents}
        />
      ) : (
        "Add your first post!"
      )}
    </div>
  );
};

export default Content;
