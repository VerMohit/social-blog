import React from "react";
import { useState } from "react";
import { FaTrashAlt, FaEdit } from "react-icons/fa";
import { IoMdCheckmarkCircle } from "react-icons/io";
import { MdCancel } from "react-icons/md";

interface ContentItem {
  id: number;
  datePosted: string;
  userName: string;
  post: string;
}

interface contentProps {
  charLimit: number;
  contents: ContentItem[];
  setContents: any;
}

const Content: React.FC<contentProps> = ({
  charLimit,
  contents,
  setContents,
}) => {
  const [editedID, setEditedID] = useState(-1);
  const [editedPost, setEditedPost] = useState("");
  const [charCont, setChars] = useState(0);

  // ----- EVENT HANDLERS -------- //

  const handleTextEdit = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const val = e.target.value;
    setEditedPost(val);
    setChars(val.length);
  };

  const handleDelete = (id: number) => {
    const remainingPosts = contents.filter((content) => content.id !== id);
    setContents(remainingPosts);
  };

  const handleEdit = (id: number, post: string) => {
    setEditedID(id);
    setEditedPost(post);
    setChars(post.length);
  };

  const handleSave = (id: number) => {
    setContents(
      contents.map((content) =>
        content.id === id ? { ...content, post: editedPost } : content
      )
    );
    setEditedID(-1);
    setEditedPost("");
  };

  const handleCancel = () => {
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
                <div>
                  <textarea
                    value={editedPost}
                    onChange={(e) => handleTextEdit(e)}
                    maxLength={charLimit}
                  />
                  <p>{`${charCont}/${charLimit}`}</p>
                  <IoMdCheckmarkCircle
                    role="button"
                    aria-label="Save changes"
                    onClick={() => handleSave(content.id)}
                  />
                  <MdCancel
                    role="button"
                    aria-label="Save changes"
                    onClick={() => handleCancel()}
                  />
                </div>
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
