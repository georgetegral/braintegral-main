'use client';

import { Flex, Text } from '@chakra-ui/react';
import { JorgesAvatar } from './components/avatar';
import { SocialIcons } from './components/social-icons';
import { RetoAmorPropio } from './components/reto-amor-propio';
import { useGeolocation } from '@/components/GeolocationContext';

export const Home = () => {
  const geoDetails = useGeolocation();
  console.log(geoDetails);
  return (
    <Flex
      direction="column"
      alignItems="center"
      minHeight="80vh"
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
      <RetoAmorPropio />
    </Flex>
  );
};
