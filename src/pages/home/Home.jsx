import { Box, Flex, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <Box>
      <Flex w="20%" align="center" justify="space-between">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </Flex>

      <Text>Welcome to the Home page</Text>
    </Box>
  );
};

export default Home;
