import React from "react";
import Post from "../Post/Post";

const EditPost: React.FC<editPost> = ({
  content,
  editedPost,
  charCount,
  charLimit,
  setEditedPost,
  setChars,
  setEditedID,
  handleSaveEdits,
}) => {
  const handleTextEdit = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const val = e.target.value;
    setEditedPost(val);
    setChars(val.length);
  };

  return (
    <Post
      content={content}
      value={editedPost}
      charCount={charCount}
      charLimit={charLimit}
      confirmLabel={"Save changes"}
      cancelLabel={"Cancel changes"}
      setEditedID={setEditedID}
      setEditedPost={setEditedPost}
      handlerText={handleTextEdit}
      handlerPost={handleSaveEdits}
    />
  );
};

export default EditPost;
