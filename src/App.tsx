// import { Text, Button, Stack } from "@mantine/core";
import { Container } from "@mantine/core";
import Content from "./Content/Content";
import { useState } from "react";

interface ContentItem {
  id: number;
  datePosted: string;
  userName: string;
  post: string;
}

function postDate(): string {
  const currentDate = new Date();
  const month = currentDate.toLocaleString("default", { month: "short" });
  const day = currentDate.getDate();
  const year = currentDate.getFullYear();

  return `${month} ${day}, ${year}`;
}

export default function App() {
  const layoutProps = {
    bg: "#dbe4ff",
    h: "100vh",
  };

  const user: string = "admin";
  const charLimit: number = 500;

  const loremTexts: string =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

  const formattedDate = postDate();

  // Empty list added to ensure that contents is not read as NULL if no contents exist when app opens
  const [contents, setContents] = useState<ContentItem[]>(
    [
      {
        id: 1,
        datePosted: formattedDate,
        userName: user,
        post: "This is my first post",
      },
      {
        id: 2,
        datePosted: formattedDate,
        userName: user,
        post: loremTexts,
      },
    ] || []
  );

  const [charCount, setChars] = useState(0);

  return (
    <Container {...layoutProps}>
      <Content
        charLimit={charLimit}
        contents={contents}
        charCount={charCount}
        setChars={setChars}
        setContents={setContents}
      />
    </Container>
  );
}
