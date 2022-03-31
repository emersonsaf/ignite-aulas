import { Box, Flex, Text, Avatar } from "@chakra-ui/react";

interface ProfileProps {
  showProfileData?: boolean;
}

export function Profile({ showProfileData = true }: ProfileProps) {
  return (
    <Flex align="center">
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Emerson Filho</Text>
          <Text color="gray.300" fontSize="small">
            emerson@gmail.com
          </Text>
        </Box>
      )}
      <Avatar
        size="md"
        nome="Emerson Filho"
        src="https://github.com/emersonsaf.png"
      />
    </Flex>
  );
}
