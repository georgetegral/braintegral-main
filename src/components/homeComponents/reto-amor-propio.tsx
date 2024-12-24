import { Text, Box, HStack, Image, Link as ChakraLink } from '@chakra-ui/react';
import { Button } from '@/components/ui/button';

export const RetoAmorPropioCard = () => {
  return (
    <Box
      borderWidth="1px"
      borderRadius="2xl"
      overflow="hidden"
      maxW="xl"
      p={4}
      boxShadow="lg"
      transition="all 0.2s"
      _hover={{
        transform: 'scale(1.03)',
        textDecoration: 'none',
      }}
    >
      <HStack alignItems="flex-start">
        <Image
          boxSize="80px"
          borderRadius="2xl"
          src="/retoamorpropio/30diasretoscreenshot.png"
          alt="Digital Product"
        />
        <Box flex="1">
          <Text fontWeight="bold" fontSize="lg">
            30 Días hacia un mayor amor propio
          </Text>
          <Text fontSize="sm" mt={1}>
            Este reto te enseñará a amarte incondicionalmente y nutrir tu
            autoestima con ejercicios simples, ¡pero poderosos!
          </Text>
          <HStack mt={2} alignItems="center">
            <Text fontWeight="bold" fontSize="xl" color="cyan.500">
              $9 USD
            </Text>
            <Text fontSize="sm" as="s" color="gray.500">
              $29 USD
            </Text>
          </HStack>
        </Box>
      </HStack>
      <ChakraLink
        href="/reto-amor-propio"
        mt={4}
        colorScheme="blue"
        w="full"
        fontWeight="bold"
      >
        <Button colorScheme="blue" w="full" size="lg">
          ¡Descarga ahora!
        </Button>
      </ChakraLink>
    </Box>
  );
};
