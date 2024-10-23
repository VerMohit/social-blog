import React, { useState } from "react";
import { FaTrashAlt, FaEdit } from "react-icons/fa";
import EditPost from "../EditPost/EditPost";

const Content: React.FC<contentProps> = ({
  charLimit,
  contents,
  charCount,
  setChars,
  setContents,
  handleDelete,
}) => {
  const [editedID, setEditedID] = useState(-1);
  const [editedPost, setEditedPost] = useState("");

  const handleEdit = (id: number, post: string) => {
    setEditedID(id);
    setEditedPost(post);
    setChars(post.length);
  };

  const handleSaveEdits = (id: number) => {
    setContents(
      contents.map((content) =>
        content.id === id ? { ...content, post: editedPost } : content
      )
    );
    setEditedID(-1);
    setEditedPost("");
  };

  // ----- MAIN CODE TO RETURN ------ //

  return (
    <div>
      {contents.length ? (
        <ul>
          {contents.map((content) => (
            <li key={content.id}>
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
          ))}
        </ul>
      ) : (
        "Add your first post!"
      )}
    </div>
  );
};

export default Content;
