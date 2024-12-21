import { Stack } from '@chakra-ui/react';
import { Image } from '@chakra-ui/react';

export const JorgesAvatar = () => {
  return (
    <Stack alignItems="center">
      <Image
        src="/profile-pic.jpg"
        boxSize="100px"
        borderRadius="full"
        fit="cover"
        alt="Jorge Garcia"
      />
    </Stack>
  );
};
