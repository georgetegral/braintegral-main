import { Flex, Text } from '@chakra-ui/react';
import { ColorModeButton } from '@/components/ui/color-mode';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <Flex
      as="footer"
      width="full"
      justifyContent="space-between"
      alignItems="center"
      padding={4}
    >
      <Text fontSize="sm">&copy; {currentYear} - Braintegral</Text>
      <ColorModeButton />
    </Flex>
  );
};
