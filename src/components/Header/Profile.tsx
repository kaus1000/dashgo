import { Flex, Text, Box, Avatar } from '@chakra-ui/react'

interface ProfileProps {
  showProfileData: boolean;
}

export function Profile({ showProfileData }: ProfileProps) {
  return (
    <Flex align='center'>
      {showProfileData && (
        <Box
          mr='4'
          textAlign='right'
        >
          <Text>Sérgio Damaceno</Text>
          <Text color='gray.300' fontSize='small'>
            sergio.damaceno0002@gmail.com
          </Text>
        </Box>
      )}

      <Avatar size='md' name='Sérgio Damaceno' src='https://github.com/kaus1000.png' />
    </Flex>
  )
}