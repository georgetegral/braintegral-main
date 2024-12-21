import { Stack } from '@chakra-ui/react';
import { Text } from '@chakra-ui/react';
import { Image } from '@chakra-ui/react';

export const JorgesAvatar = () => {
  return (
    <Stack alignItems="center">
      <Image
        src="/profile-pic.jpg"
        boxSize="150px"
        borderRadius="full"
        fit="cover"
        alt="Jorge Garcia"
      />
      <Text textStyle="4xl" fontWeight="semibold">
        Jorge García
      </Text>
    </Stack>
  );
};
