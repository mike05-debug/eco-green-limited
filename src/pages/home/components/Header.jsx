import React from "react";
import {
  Heading,
  Box,
  Flex,
  Drawer,
  DrawerBody,
  DrawerOverlay,
  useDisclosure,
  Button,
  DrawerCloseButton,
  DrawerContent,
  VStack,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  return (
    <Flex
      h="75"
      w="100%"
      px={{ base: "2%", md: "10%" }}
      align="center"
      justify="space-between"
      bg="#fff"
      color="#000"
      position="fixed"
      top="0"
      left="0"
      zIndex="3"
    >
      <Heading>ECO-GREEN</Heading>{" "}
      <Flex
        dir="row"
        align="center"
        gap="20"
        display={{ base: "none", md: "flex" }}
      >
        <Link to="/">Home</Link>
        <Link to="#about">About</Link>
        <Link to="#gallery">Gallery</Link>
        <Link to="#contact">Contact Us</Link>
      </Flex>
      <Box display={{ base: "block", md: "none" }}>
        <Button ref={btnRef} colorScheme="teal" onClick={onOpen}>
          Open
        </Button>
        <Drawer
          isOpen={isOpen}
          placement="right"
          onClose={onClose}
          finalFocusRef={btnRef}
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerBody>
              <VStack>
                {" "}
                <Link to="/">Home</Link>
                <Link to="#about">About</Link>
                <Link to="#gallery">Gallery</Link>
                <Link to="#contact">Contact Us</Link>
              </VStack>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </Box>
    </Flex>
  );
};

export default Header;
