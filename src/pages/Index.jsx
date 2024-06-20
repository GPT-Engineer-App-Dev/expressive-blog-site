import { Container, VStack, Heading, Text, Box, Image, HStack, IconButton } from "@chakra-ui/react";
import { FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" py={10}>
      <VStack spacing={8} align="stretch">
        <Box textAlign="center">
          <Heading as="h1" size="2xl" mb={4}>Welcome to My Blog</Heading>
          <Text fontSize="lg">Sharing my thoughts and experiences on web development, technology, and life.</Text>
        </Box>
        <Box>
          <Image src="/images/blog-image.jpg" alt="Blog Image" borderRadius="md" />
        </Box>
        <Box>
          <Heading as="h2" size="xl" mb={4}>Latest Posts</Heading>
          <VStack spacing={4} align="stretch">
            <Box p={5} shadow="md" borderWidth="1px" borderRadius="md">
              <Heading as="h3" size="md">Understanding React Hooks</Heading>
              <Text mt={2}>A deep dive into the world of React Hooks and how they can simplify your code.</Text>
            </Box>
            <Box p={5} shadow="md" borderWidth="1px" borderRadius="md">
              <Heading as="h3" size="md">JavaScript ES2021 Features</Heading>
              <Text mt={2}>An overview of the latest features introduced in JavaScript ES2021.</Text>
            </Box>
            <Box p={5} shadow="md" borderWidth="1px" borderRadius="md">
              <Heading as="h3" size="md">CSS Grid vs. Flexbox</Heading>
              <Text mt={2}>Comparing CSS Grid and Flexbox for building modern web layouts.</Text>
            </Box>
          </VStack>
        </Box>
        <Box textAlign="center">
          <Heading as="h2" size="xl" mb={4}>Follow Me</Heading>
          <HStack spacing={4} justify="center">
            <IconButton as="a" href="https://twitter.com" aria-label="Twitter" icon={<FaTwitter />} size="lg" />
            <IconButton as="a" href="https://linkedin.com" aria-label="LinkedIn" icon={<FaLinkedin />} size="lg" />
            <IconButton as="a" href="https://github.com" aria-label="GitHub" icon={<FaGithub />} size="lg" />
          </HStack>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;