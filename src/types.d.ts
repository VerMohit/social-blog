interface ContentItem {
    id: number;
    datePosted: string;
    userName: string;
    post: string;
  }
  
  interface contentProps {
    charLimit: number;
    contents: ContentItem[];
    charCount:number;
    setChars: React.Dispatch<React.SetStateAction<number>>;
    setContents: React.Dispatch<React.SetStateAction<ContentItem[]>>;
  }

  interface editPost {
    content: ContentItem;
    editedPost: string;
    charCount: number;
    charLimit: number;
    setEditedPost: React.Dispatch<React.SetStateAction<string>>;
    setChars: React.Dispatch<React.SetStateAction<number>>;
    setEditedID: React.Dispatch<React.SetStateAction<number>>;
    handleSaveEdits: (id: number) => void;
  }

  interface postListProps {
      contents: ContentItem[],
      charCount: number;
      charLimit: number;
      setChars: React.Dispatch<React.SetStateAction<number>>;
      setContents: React.Dispatch<React.SetStateAction<ContentItem[]>>;
  }

  interface postItemProps {
    content: ContentItem;
    editedID: number;
    editedPost: string;
    charCount: number;
    charLimit: number;
    setEditedPost: React.Dispatch<React.SetStateAction<string>>;
    setChars: React.Dispatch<React.SetStateAction<number>>;
    setEditedID: React.Dispatch<React.SetStateAction<number>>;
    handleSaveEdits: (id: number) => void;
    handleDelete: (id: number) => void;
  }

 interface postProps {
  content: ContentItem;
  value: string;
  charCount: number;
  charLimit: number;
  confirmLabel: string;
  cancelLabel: string;
  setEditedID: React.Dispatch<React.SetStateAction<number>>;
  setEditedPost: React.Dispatch<React.SetStateAction<string>>;
  handlerText: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  handlerPost: (id: number) => void;
 }
  