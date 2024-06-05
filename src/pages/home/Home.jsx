import { Box } from "@chakra-ui/react";
import Header from "./components/Header";
import ProjectVideo from "./components/projectVideo";

const Home = () => {
  return (
    <Box>
      <Header/>
      {/* <ProjectVideo/> */}
      <img src="src\assets\draft_layout.png" alt="img" />
      <img src="src\assets\draft_layout_2.png" alt="img" />
      <img src="src\assets\draft_layout_3.png" alt="img" />
      <img src="src\assets\draft_layout_4.png" alt="img" />
    </Box>
  );
};

export default Home;
