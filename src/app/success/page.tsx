'use client';

import { useSearchParams } from 'next/navigation';
import { Box, Text, Flex, Spinner } from '@chakra-ui/react';
import { Suspense } from 'react';

const SuccessPageContent = () => {
  const searchParams = useSearchParams();
  const session_id = searchParams.get('session_id');

  return (
    <Box>
      <Text fontSize="2xl" fontWeight="bold">
        ¡Pago Exitoso!
      </Text>
      <Text mt={4} fontSize="lg">
        Gracias por tu compra! Te llegará un correo con la compra
      </Text>
      <Text mt={4} fontSize="lg">
        Session ID: {session_id || 'No session ID found'}
      </Text>
    </Box>
  );
};

const SuccessPage = () => {
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
      <Suspense
        fallback={<Spinner size="lg" color="cyan.500" borderWidth="4px" />}
      >
        <SuccessPageContent />
      </Suspense>
    </Flex>
  );
};

export default SuccessPage;
