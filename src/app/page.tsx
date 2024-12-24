'use client';

import { Flex, Text } from '@chakra-ui/react';
import { JorgesAvatar } from '../components/homeComponents/avatar';
import { SocialIcons } from '../components/homeComponents/social-icons';
import { RetoAmorPropioCard } from '../components/homeComponents/reto-amor-propio';
import { EtereaCard } from '@/components/homeComponents/eterea';
import { useGeolocation } from '@/components/GeolocationContext';

const Home = () => {
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
      <RetoAmorPropioCard />
      <EtereaCard />
    </Flex>
  );
};

export default Home;
