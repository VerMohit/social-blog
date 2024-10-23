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
    handleDelete: (id: number) => void;
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

 
  