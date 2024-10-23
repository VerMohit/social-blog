import React from "react";
import { IoMdCheckmarkCircle } from "react-icons/io";
import { MdCancel } from "react-icons/md";

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

  const handleCancel = () => {
    setEditedID(-1);
    setEditedPost("");
  };

  return (
    <div>
      <textarea
        value={editedPost}
        onChange={(e) => handleTextEdit(e)}
        maxLength={charLimit}
      />
      <p>{`${charCount}/${charLimit}`}</p>
      <IoMdCheckmarkCircle
        role="button"
        aria-label="Save changes"
        onClick={() => handleSaveEdits(content.id)}
      />
      <MdCancel
        role="button"
        aria-label="Save changes"
        onClick={() => handleCancel()}
      />
    </div>
  );
};

export default EditPost;
