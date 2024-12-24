import { HStack, Text, Image, Link as ChakraLink } from '@chakra-ui/react';

export const EtereaCard = () => {
  return (
    <ChakraLink
      href="https://www.eterea.shop/BRAINTEGRAL"
      target="_blank"
      display="flex"
      overflow="hidden"
      maxW="xl"
      px={4}
      py={2}
      borderWidth="1px"
      borderRadius="2xl"
      boxShadow="lg"
      transition="all 0.2s"
      _hover={{
        transform: 'scale(1.03)',
        textDecoration: 'none',
      }}
    >
      <HStack>
        <Text fontSize="lg" fontWeight="bold">
          ¡Mis galletas favoritas! Orgánicas, veganas, sin azúcar y 100%
          saludables.
        </Text>
        <Image
          boxSize="40px"
          borderRadius="2xl"
          objectPosition="center"
          src="/affiliates/chocolate-chip-cookie-eterea-1.webp"
          alt="Galleta de chocolate Eterea"
        />
      </HStack>
    </ChakraLink>
  );
};
