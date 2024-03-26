import { Container, Flex, Box, Image, VStack } from "@chakra-ui/react";
import AuthForm from "../../Components/AuthForm/AuthForm";

const AuthPage = () => {
  return (
    <Flex minH={"100vh"} justifyContent={"Conter"} alignItems={"center"} px={5}>
      <Container maxW={"container.md"} padding={0}>
        <Flex justifyContent={"center"} alignItems={"center"} gap={10}>

          {/* left */}
          <Box display={{ base: "none", md: "block" }}>
            <Image src="/auth.png" h={600} />
          </Box>

          {/* right */}
          <VStack spacing={1} align={"stretch"}>
            <AuthForm />
            <Box textAlign={"center"}>Get The App</Box>
            <Flex gap={5} justifyContent={"center"}>
              <Image src="/playstore.png" h={10}></Image>
              <Image src="/microsoft.png" h={10}></Image>
            </Flex>
          </VStack>

        </Flex>
      </Container>
    </Flex>
  );
};

export default AuthPage;
