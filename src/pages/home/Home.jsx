import { Box } from "@chakra-ui/react";
import Header from "./components/Header";
import ProjectVideo from "./components/projectVideo";

const Home = () => {
  return (
    <Box w="100%">
      <Header />
      <ProjectVideo />
    </Box>
  );
};

export default Home;
