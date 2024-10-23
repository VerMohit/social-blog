import React from "react";
import { IoMdCheckmarkCircle } from "react-icons/io";
import { MdCancel } from "react-icons/md";

const Post: React.FC<postProps> = ({
  content,
  value,
  charCount,
  charLimit,
  confirmLabel,
  cancelLabel,
  setEditedID,
  setEditedPost,
  handlerText,
  handlerPost,
}) => {
  const handleCancel = () => {
    setEditedID(-1);
    setEditedPost("");
  };

  return (
    <div>
      <textarea
        value={value}
        onChange={(e) => handlerText(e)}
        maxLength={charLimit}
      />
      <p>{`${charCount}/${charLimit}`}</p>
      <IoMdCheckmarkCircle
        role="button"
        aria-label={confirmLabel}
        onClick={() => handlerPost(content.id)}
      />
      <MdCancel
        role="button"
        aria-label={cancelLabel}
        onClick={() => handleCancel()}
      />
    </div>
  );
};

export default Post;
