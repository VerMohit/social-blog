import React, { useState } from "react";
import PostItem from "../PostItem/PostItem";

const PostList: React.FC<postListProps> = ({
  contents,
  charCount,
  charLimit,
  setChars,
  setContents,
}) => {
  const [editedID, setEditedID] = useState(-1);
  const [editedPost, setEditedPost] = useState("");

  const handleSaveEdits = (id: number) => {
    setContents(
      contents.map((content) =>
        content.id === id ? { ...content, post: editedPost } : content
      )
    );
    setEditedID(-1);
    setEditedPost("");
  };

  const handleDelete = (id: number) => {
    const remainingPosts = contents.filter((content) => content.id !== id);
    setContents(remainingPosts);
  };

  return (
    <ul>
      {contents.map((content) => (
        <PostItem
          key={content.id}
          content={content}
          editedID={editedID}
          editedPost={editedPost}
          charCount={charCount}
          charLimit={charLimit}
          setEditedPost={setEditedPost}
          setChars={setChars}
          setEditedID={setEditedID}
          handleSaveEdits={handleSaveEdits}
          handleDelete={handleDelete}
        />
      ))}
    </ul>
  );
};

export default PostList;
