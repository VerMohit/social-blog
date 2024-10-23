import React from "react";
import { FaTrashAlt, FaEdit } from "react-icons/fa";
import EditPost from "../EditPost/EditPost";

const PostItem: React.FC<postItemProps> = ({
  content,
  editedID,
  editedPost,
  charCount,
  charLimit,
  setEditedPost,
  setChars,
  setEditedID,
  handleSaveEdits,
  handleDelete,
}) => {
  const handleEdit = (id: number, post: string) => {
    setEditedID(id);
    setEditedPost(post);
    setChars(post.length);
  };

  return (
    <li>
      <h3>{content.userName}</h3>
      <p>{content.datePosted}</p>
      {editedID === content.id ? (
        <EditPost
          content={content}
          editedPost={editedPost}
          charCount={charCount}
          charLimit={charLimit}
          setEditedPost={setEditedPost}
          setChars={setChars}
          setEditedID={setEditedID}
          handleSaveEdits={handleSaveEdits}
        />
      ) : (
        <p>{content.post}</p>
      )}
      <div>
        <FaTrashAlt
          role="button"
          tabIndex={0}
          aria-label={`Delete ${content.post}`}
          onClick={() => handleDelete(content.id)}
        />
        Delete
      </div>
      <div>
        <FaEdit
          role="button"
          tabIndex={0}
          aria-label={`Edit ${content.post}`}
          onClick={() => handleEdit(content.id, content.post)}
        />
        Edit
      </div>
    </li>
  );
};

export default PostItem;
