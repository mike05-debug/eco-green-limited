import { Box } from "@chakra-ui/react";
import Header from "./components/Header";
import ProjectVideo from "./components/projectVideo";

const Home = () => {
  return (
    <Box w="100%" bg="#fff">
      <Header />
      <ProjectVideo />
    </Box>
  );
};

export default Home;
