import { Box, Flex, Input, VStack, Text } from "@chakra-ui/react";
import { useState } from "react";

const Index = () => {
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleSendMessage = () => {
    if (inputValue.trim()) {
      setMessages([...messages, { text: inputValue, sender: "user" }]);
      setInputValue("");
    }
  };

  return (
    <Flex h="100vh">
      <Box w="50%" p={4} bg="gray.100">
        {/* PDF Upload and Viewer Placeholder */}
        <Text mb={4}>PDF Upload and Viewer (Placeholder)</Text>
      </Box>
      <Box w="50%" p={4} bg="gray.200">
        <VStack h="90%" overflowY="auto">
          {messages.map((msg, index) => (
            <Box key={index} bg="blue.100" p={2} borderRadius="md">
              {msg.text}
            </Box>
          ))}
        </VStack>
        <Input
          placeholder="Type a message..."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
          h="10%"
        />
      </Box>
    </Flex>
  );
};

export default Index;