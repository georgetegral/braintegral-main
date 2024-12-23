import { Button } from '@/components/ui/button';
import { Box, Heading, Flex, Link as ChakraLink } from '@chakra-ui/react';

export const Page404 = () => {
  return (
    <Flex
      minHeight="70vh"
      direction="column"
      justifyContent="center"
      alignItems="center"
    >
      <Heading size="7xl" textAlign="center">
        404
      </Heading>
      <Heading size="lg" textAlign="center" marginTop={2}>
        Página no encontrada
      </Heading>
      <Box marginTop={6}>
        <Button asChild size="lg">
          <ChakraLink href="/">Regresar</ChakraLink>
        </Button>
      </Box>
    </Flex>
  );
};
