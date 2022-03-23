import NextLink from 'next/link'
import {
  Box,
  Heading,
  Text,
  Container,
  Divider,
  Button
} from '@chakra-ui/react'

const NotFound = () => {
  return (
    <Container>
      <Heading as="h1">Error 404</Heading>
      <Text>La page que vous chercher n'existe pas</Text>
      <Divider my={6} />
      <Box my={6} align="center">
        <NextLink href="/">
          <Button colorScheme="teal">Retour à la page d'accueil</Button>
        </NextLink>
      </Box>
    </Container>
  )
}

export default NotFound
