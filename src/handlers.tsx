import { Dispatch, SetStateAction } from "react";

const handleTextEdit = (
  e: React.ChangeEvent<HTMLTextAreaElement>,
  setEditedPost: Dispatch<SetStateAction<string>>,
  setChars: Dispatch<SetStateAction<number>>
) => {
  const val = e.target.value;
  setEditedPost(val);
  setChars(val.length);
};

const handleDelete = (
  id: number,
  contents: ContentItem[],
  setContents: Dispatch<SetStateAction<ContentItem[]>>
) => {
  const remainingPosts = contents.filter((content) => content.id !== id);
  setContents(remainingPosts);
};

const handleEdit = (
  id: number,
  post: string,
  setEditedID: Dispatch<SetStateAction<number>>,
  setEditedPost: Dispatch<SetStateAction<string>>,
  setChars: Dispatch<SetStateAction<number>>
) => {
  setEditedID(id);
  setEditedPost(post);
  setChars(post.length);
};

const handleSave = (
  id: number,
  editedPost: string,
  contents: ContentItem[],
  setContents: Dispatch<SetStateAction<ContentItem[]>>,
  setEditedID: Dispatch<SetStateAction<number>>,
  setEditedPost: Dispatch<SetStateAction<string>>
) => {
  setContents(
    contents.map((content) =>
      content.id === id ? { ...content, post: editedPost } : content
    )
  );
  setEditedID(-1);
  setEditedPost("");
};

const handleCancel = (
  setEditedID: Dispatch<SetStateAction<number>>,
  setEditedPost: Dispatch<SetStateAction<string>>
) => {
  setEditedID(-1);
  setEditedPost("");
};

export { handleTextEdit, handleDelete, handleEdit, handleSave, handleCancel };

// // ----- EVENT HANDLERS -------- //

// const handleTextEdit = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
//   const val = e.target.value;
//   setEditedPost(val);
//   setChars(val.length);
// };

// const handleDelete = (id: number) => {
//   const remainingPosts = contents.filter((content) => content.id !== id);
//   setContents(remainingPosts);
// };

// const handleEdit = (id: number, post: string) => {
//   setEditedID(id);
//   setEditedPost(post);
//   setChars(post.length);
// };

// const handleSave = (id: number) => {
//   setContents(
//     contents.map((content) =>
//       content.id === id ? { ...content, post: editedPost } : content
//     )
//   );
//   setEditedID(-1);
//   setEditedPost("");
// };

// const handleCancel = () => {
//   setEditedID(-1);
//   setEditedPost("");
// };
