'use client';

import { Box, Text, Button, Flex, Spinner } from '@chakra-ui/react';
import { loadStripe } from '@stripe/stripe-js';
import { useState } from 'react';
const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY_SANDBOX || ''
);

const RetoAmorPropioLanding = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleCheckout = async () => {
    setIsLoading(true);
    const stripe = await stripePromise;
    if (!stripe) {
      console.error('Stripe has not loaded correctly.');
      setIsLoading(false);
      return;
    }
    try {
      const response = await fetch('/api/checkout-sessions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          priceId: process.env.NEXT_PUBLIC_RETO_AMOR_PROPIO_SANDBOX,
          quantity: 1,
        }),
      });
      const session = await response.json();
      if (session.id) {
        await stripe.redirectToCheckout({ sessionId: session.id });
      } else {
        console.error('Error creating checkout session:', session.error);
      }
    } catch (error) {
      console.error('Error during checkout:', error);
    } finally {
      setIsLoading(false);
    }
  };

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
      {/* Conditionally render Spinner or Button */}
      {isLoading ? (
        <Spinner size="lg" color="cyan.500" borderWidth="4px" />
      ) : (
        <Button
          colorScheme="cyan"
          size="lg"
          fontWeight="bold"
          onClick={handleCheckout}
        >
          ¡Compra ahora por $9 USD!
        </Button>
      )}
    </Flex>
  );
};

export default RetoAmorPropioLanding;
