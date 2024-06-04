import { Box, AspectRatio } from "@chakra-ui/react";

const ProjectVideo = () => {
  return (
    <Box w="100%">
      <AspectRatio maxW="560px" ratio={1} h="650px">
        <iframe
          title="naruto"
          src="https://www.youtube.com/embed/QhBnZ6NPOY0"
          allowFullScreen
        />
      </AspectRatio>
    </Box>
  );
};

export default ProjectVideo;
