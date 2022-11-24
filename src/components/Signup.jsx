import React from 'react';

import { Link } from 'react-router-dom';
import {
  Container,
  VStack,
  Heading,
  Input,
  Button,
  Text,
  Avatar,
} from '@chakra-ui/react';

const Signup = () => {
  return (
    <Container maxW={'container.xl'} h={'120vh'} p={'16'}>
      <form>
        <VStack
          alignItems={'stretch'}
          spacing={'8'}
          w={['full', '96']}
          m={'auto'}
          my={'16'}
        >
          <Heading>MyTube</Heading>
          <Avatar alignSelf={'center'} boxSize={'28'} />

          <Input
            type={'text'}
            placeholder={'Enter your Name '}
            required
            focusBorderColor={'purple.500'}
          />
          <Input
            type={'email'}
            placeholder={'Write an Email '}
            required
            focusBorderColor={'purple.500'}
          />
          <Input
            type={'password'}
            placeholder={'Password '}
            required
            focusBorderColor={'purple.500'}
          />

          <Button colorScheme={'purple'} type={'submit'}>
            Login
          </Button>
          <Text textAlign={'right'}>
            Already Signup?{' '}
            <Button variant={'link'} colorScheme={'purple'}>
              <Link to={'/login'}>Login</Link>
            </Button>
          </Text>
        </VStack>
      </form>
    </Container>
  );
};

export default Signup;
