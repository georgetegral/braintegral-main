import { Box, Text, Button, Flex } from '@chakra-ui/react';
import Link from 'next/link';

const RetoAmorPropioLanding = () => {
  return (
    <Flex
      direction="column"
      alignItems="center"
      justifyContent="center"
      minHeight="80vh"
      px={4}
      gap={6}
      textAlign="center"
    >
      <Box>
        <Text fontSize="2xl" fontWeight="bold">
          Descubre el camino hacia el amor propio
        </Text>
        <Text mt={4} fontSize="lg">
          Transforma tu vida en solo 30 días con este reto diseñado para
          ayudarte a amarte más, fortalecer tu autoestima y alcanzar una vida
          más plena.
        </Text>
      </Box>
      <Link href="/checkout">
        <Button colorScheme="cyan" size="lg" fontWeight="bold">
          ¡Compra ahora por $9 USD!
        </Button>
      </Link>
    </Flex>
  );
};

export default RetoAmorPropioLanding;
