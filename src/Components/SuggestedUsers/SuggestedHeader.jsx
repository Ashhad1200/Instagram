import { Avatar, Box, Flex, Link } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
const SuggestedHeader = () => {
  return (
    <Flex justifyContent={"space-between"} alignItems="center" w={"full"}>
      <Flex alignItems={"center"} gap={2}>
        <Avatar name="As a Programmer" size={"lg"} src="/profilepic.png" />
        <Box fontSize={12} fontWeight={"bold"}>
          asaprogrammer_
        </Box>
      </Flex>
      <Link
      as={RouterLink}
      to="/auth"
      fontSize={14}
      color={"blue.400"}
      cursor={"pointer"}
      fontWeight={"medium"}
      
      style={{textDecoration:"none"}}
      >
      Log Out
      </Link>
    </Flex>
  );
};

export default SuggestedHeader;
