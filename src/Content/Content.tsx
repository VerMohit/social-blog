import React from "react";
import { useState } from "react";
import { FaTrashAlt, FaEdit } from "react-icons/fa";

interface contentProps {
  user: string;
}

const Content: React.FC<contentProps> = ({ user }) => {
  const currentDate = new Date();
  const month = currentDate.toLocaleString("default", { month: "short" });
  const day = currentDate.getDate();
  const year = currentDate.getFullYear();
  const formattedDate = `${month} ${day}, ${year}`;

  const loremTexts = [
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  ];

  const [contents, setContents] = useState([
    {
      id: 1,
      datePosted: formattedDate,
      userName: user,
      post: "This is my first post",
    },
    {
      id: 2,
      datePosted: new Date().toLocaleDateString(),
      userName: user,
      post: loremTexts,
    },
  ]);

  const handleDelete = (id: number) => {
    const remainingPosts = contents.filter((content) => content.id !== id);
    setContents(remainingPosts);
  };

  return (
    <div>
      {contents.length ? (
        <ul>
          {contents.map((content) => (
            <li key={content.id}>
              <h3>{content.userName}</h3>
              <p>{content.datePosted}</p>
              <div>
                <FaTrashAlt
                  role="button"
                  tabIndex={0}
                  aria-label={`Delete ${content.userName}`}
                  onClick={() => handleDelete(content.id)}
                />
                Delete
              </div>
              <div>
                <FaEdit
                  role="button"
                  tabIndex={0}
                  aria-label={`Edit ${content.userName}`}
                />
                Edit
              </div>

              <p>{content.post}</p>
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
