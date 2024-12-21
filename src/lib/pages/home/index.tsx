import { Flex } from '@chakra-ui/react';
import { JorgesAvatar } from './components/avatar';
import { Text } from '@chakra-ui/react';
import { SocialIcons } from './components/social-icons';

export const Home = () => {
  return (
    <Flex
      direction="column"
      alignItems="center"
      minHeight="70vh"
      gap={2}
      mb={8}
      w="full"
    >
      <JorgesAvatar />
      <Text textStyle="3xl" fontWeight="semibold">
        Jorge García
      </Text>
      <Text textStyle="md" fontWeight="medium" textAlign="center">
        Ayudo a las personas a aumentar su amor propio y alcanzar su máximo
        potencial en la vida
      </Text>
      <SocialIcons />
    </Flex>
  );
};
