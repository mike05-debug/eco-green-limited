import { Box, Text, Flex } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <Box>
      <Flex w="20%" align="center" justify="space-between">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </Flex>

      <Text>This is the about page</Text>
    </Box>
  );
};

export default About;
