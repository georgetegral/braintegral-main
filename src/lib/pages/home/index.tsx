import { Flex } from '@chakra-ui/react';
import { JorgesAvatar } from './components/avatar';
import { SocialIcons } from './components/social-icons';

export const Home = () => {
  return (
    <Flex
      direction="column"
      alignItems="center"
      minHeight="70vh"
      gap={4}
      mb={8}
      w="full"
    >
      <JorgesAvatar />
      <SocialIcons />
    </Flex>
  );
};
