import { Box, Flex } from '@chakra-ui/react';
import { ColorModeButton } from '@/components/ui/color-mode';
export const Footer = () => {
  return (
    <Flex as="footer" width="full" justifyContent="center">
      <Box marginLeft="auto">
        <ColorModeButton />
      </Box>
    </Flex>
  );
};
