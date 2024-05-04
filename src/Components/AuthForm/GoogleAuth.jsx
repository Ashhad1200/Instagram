import { Flex, Image, Text } from "@chakra-ui/react";

const GoogleAuth = () => {
  return (
    <>
      <Flex
        alignContent={"center"}
        justifyContent={"center"}
        cursor={"pointer"}
      >
        <Image src="/google.png" w={5} />
        <Text mx={"2"} color={"blue.500"}>
          Log In With Google
        </Text>
      </Flex>
    </>
  );
};

export default GoogleAuth;
