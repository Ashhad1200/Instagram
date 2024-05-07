import { Box, Flex, Image, Text, VStack } from "@chakra-ui/react";
import { useState } from "react";

import Signup from "./Signup";
import Login from "./Login";
import GoogleAuth from "./GoogleAuth";

const AuthForm = () => {
  const [isLogin, SetIsLogin] = useState(true);
  return (
    <>
      <Box border={"1px solid gray"} borderRadius={4} padding={5}>
        <VStack spacing={4}>
          <Image src="/logo.png" h={24} cursor={"pointer"} alt="Instagram" />

          {isLogin ? <Login /> : <Signup />}

          <Flex
            alignItems={"center"}
            justifyContent={"center"}
            my={4}
            gap={1}
            w={"full"}
          >
            <Box flex={2} h={"1px"} bg={"gray.400"} />
            <Text mx={1} color={"white"}>
              OR
            </Text>
            <Box flex={2} h={"1px"} bg={"gray.400"} />
          </Flex>

          <GoogleAuth prefix={isLogin ? "Log in" : "Sign up"}/>
        </VStack>
      </Box>

      <Box border={"1px solid gray"} borderRadius={4} padding={5}>
        <Flex alignContent={"center"} justifyContent={"center"}>
          <Box mx={2} fontSize={14}>
            {isLogin ? "Don't Have An Account?" : "Already Have An account"}
          </Box>
          <Box
            onClick={() => SetIsLogin(!isLogin)}
            color={"blue.500"}
            cursor={"pointer"}
          >
            {!isLogin ? "SignUp" : "LogIn"}
          </Box>
        </Flex>
      </Box>
    </>
  );
};

export default AuthForm;
