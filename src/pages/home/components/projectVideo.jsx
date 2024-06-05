import { Box, Image } from "@chakra-ui/react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import img1 from "../../../assets/images/draft_layout.png";
import img2 from "../../../assets/images/draft_layout_2.png";
import img3 from "../../../assets/images/draft_layout_3.png";
import img4 from "../../../assets/images/draft_layout_4.png";

const ProjectVideo = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Box w="100%" m={0} p={0} bg="#fff">
      <Slider {...settings}>
        <Box>
          <Image w="100%" h="100vh" src={img1} alt="Slide 1" />
        </Box>
        <Box>
          <Image w="100%" h="100%" src={img2} alt="Slide 2" />
        </Box>
        <Box>
          <Image w="100%" h="100%" src={img3} alt="Slide 3" />
        </Box>
        <Box>
          <Image w="100%" h="100%" src={img4} alt="Slide 4" />
        </Box>
      </Slider>
    </Box>
  );
};

export default ProjectVideo;
