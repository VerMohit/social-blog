// import { Text, Button, Stack } from "@mantine/core";
import { Container } from "@mantine/core";
import Content from "./Content/Content";
// import Layout from "./Layout/Layout";

export default function App() {
  const user: string = "admin";
  const layoutProps = {
    bg: "#dbe4ff",
    h: "100vh",
  };

  return (
    <Container {...layoutProps}>
      <Content user={user} />
    </Container>
  );
}
