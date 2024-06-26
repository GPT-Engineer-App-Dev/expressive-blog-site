import { Container, VStack, Heading, Text, Box, Image, HStack, IconButton, Button, useColorModeValue } from "@chakra-ui/react";
import { FaTrash } from "react-icons/fa";
import { FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const Index = () => {
  const bg = useColorModeValue("white", "gray.800");
  const color = useColorModeValue("black", "white");
  const [posts, setPosts] = useState([]);

  const handleDelete = (index) => {
    const updatedPosts = posts.filter((_, i) => i !== index);
    setPosts(updatedPosts);
    localStorage.setItem("posts", JSON.stringify(updatedPosts));
  };

  useEffect(() => {
    const storedPosts = JSON.parse(localStorage.getItem("posts")) || [];
    setPosts(storedPosts);
  }, []);

  return (
    <Container centerContent maxW="container.md" py={10} bg={bg} color={color}>
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
            {posts.map((post, index) => (
              <Box key={index} p={5} shadow="md" borderWidth="1px" borderRadius="md">
                <HStack justify="space-between">
                  <Heading as="h3" size="md">{post.title}</Heading>
                  <IconButton
                    aria-label="Delete Post"
                    icon={<FaTrash />}
                    onClick={() => handleDelete(index)}
                    colorScheme="red"
                  />
                </HStack>
                <Text mt={2}>{post.content}</Text>
                {post.imageUrl && <Image src={post.imageUrl} alt={post.title} borderRadius="md" mt={2} />}
              </Box>
            ))}
          </VStack>
        </Box>
        <Box textAlign="center">
          <Button as={Link} to="/add-post" colorScheme="teal" size="lg">Add New Post</Button>
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