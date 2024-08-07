import { Container, Heading } from "@chakra-ui/react";
import { TITLE_HOME } from "../config/strings.config";

type Props = {
  children: React.ReactNode;
};

const Main = ({ children }: Props) => {
  return (
    <Container maxW="container.xl" paddingY={4} paddingX={0} color={"gray.700"}>
      <Heading marginBottom={10}>{TITLE_HOME}</Heading>
      {children}
    </Container>
  );
};

export default Main;
