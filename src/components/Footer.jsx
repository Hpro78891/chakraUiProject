import React from 'react'
import {Box,Stack,VStack,Heading,HStack,Button,Input,Text} from '@chakra-ui/react';
import {AiOutlineSend} from 'react-icons/ai'


const Footer = () => {
  return (
    <Box bgColor={'blackAlpha.900'} minH={'40'} p="16" color={'white'}>
      <Stack direction={['column', 'row']}>
        <VStack alignItems={'stretch'} w={'full'} px={'4'}>
          <Heading size="md" textTransform={'uppercase'} textAlign={['center','left']}>
            Welcome to the world of Videos
          </Heading>
          <HStack borderBottom={'2px solid white'}>
            <Input
              placeholder="Enter Email Here..."
              border={'none'}
              borderRadius="none"
              outline={'none'}
              focusBorderColor={'none'}
            />
            <Button
              p={'0'}
              colorScheme={'purple'}
              variant={'ghost'}
              borderRadius={'0 20px 20px 0'}
              py="2"
            >
              <AiOutlineSend />
            </Button>
          </HStack>
        </VStack>

        <VStack
          w={'full'}
          borderLeft={['none', '1px solid white']}
          borderRight={['none', '1px solid white']}
        >
          <Heading textTransform={'uppercase'} textAlign={'center'}>
            MyTube
          </Heading>
          <Text>All rights reserved</Text>
        </VStack>
        <VStack w={'full'}>
          <Heading size={'md'} textTransform={'uppercase'}>
            Social Media
          </Heading>
          <Button variant={'link'} colorScheme={'whiteAlpha'}>
            <a href="https://www.youtube.com/channel/UCwWaRUxOlO2QfcpsLuOGEbQ" target={"blank"} >
         Youtube
            </a>
          </Button>
          <Button variant={'link'} colorScheme={'whiteAlpha'}>
            <a href="https://www.instagram.com/handsomeprogrammer/" target={"blank"}>
            Instagram
            </a>
          </Button>
          <Button variant={'link'} colorScheme={'whiteAlpha'}>
            <a href="https://www.linkedin.com/in/rishabh-rathour-1b012314b/" target={"blank"}>
            Linkedin
            </a>
          </Button>
        </VStack>
      </Stack>
    </Box>
  );
}

export default Footer