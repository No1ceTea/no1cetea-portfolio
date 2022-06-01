import NextLink from 'next/link'
import {
  Link,
  Container,
  Heading,
  Box,
  Button,
  List,
  ListItem,
  useColorModeValue,
  chakra
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { IoLogoTwitter, IoLogoInstagram, IoLogoGithub } from 'react-icons/io5'
import Image from 'next/image'

const ProfileImage = chakra(Image, {
  shouldForwardProp: prop => ['width', 'height', 'src', 'alt'].includes(prop)
})

const Home = () => (
  <Layout>
    <Container>
      <Box
        borderRadius="lg"
        mb={6}
        p={3}
        textAlign="center"
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
      >
        || This is my Desktop  ||
        <br />
        Bonjour, Je suis étudiant en développement informatique en France!
      </Box>

      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Jacquot Thai
          </Heading>
          <p>Etudiant ( Developpeur )</p>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          textAlign="center"
        >
          <Box
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            w="100px"
            h="100px"
            display="inline-block"
            borderRadius="full"
            overflow='hidden'
          >
            <ProfileImage
              src="/images/thai.jpg"
              alt="Profile image"
              borderRadius='full'
              width="100%"
              height="100%"
            />
          </Box>
        </Box>
      </Box>

      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          C'est moi
        </Heading>
        <Paragraph>
        Je m'appelle Thai, j'ai 20 ans et je suis actuellement en seconde année de BTS au{' '}
        <Link
              href="https://www.lyceedecachan.fr/"
              scroll={false}
              target="_blank"
              >Lycée Polyvalent de Cachan</Link>.
        </Paragraph>
        <Box align="center" my={4}>
          <NextLink href="/works" scroll={false}>
            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
              Mon portfolio
            </Button>
          </NextLink>
        </Box>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          Projet professionnel
        </Heading>
        <Paragraph>
          Je souhaite devenir WebMaster / Web développeur ou Designer UX / UI.
          Après mon BTS SIO, je souhaite me dirigé dans un cycle ingénieur informatique et management à 
          l'institut G4 à Châtelet.
        </Paragraph>
      </Section>

      <Section delay={0.4}>
        <Heading as="h3" variant="section-title">
          Bio
        </Heading>
        <BioSection>
          <BioYear>2019</BioYear>
          Obtention du BAC technologique STI2D spécialité SIN (Service d'information et numérique)
        </BioSection>
        <BioSection>
          <BioYear>2021</BioYear>
          Formation en première année de BTS SIO option SLAM
        </BioSection>
        <BioSection>
          <BioYear>2022</BioYear>
          (En cours) Formation en seconde année de BTS SIO option SLAM
        </BioSection>
      </Section>

      <Section delay={0.5}>
        <Heading as="h3" variant="section-title">
          I ♥
        </Heading>
        <Paragraph>
          Musique, Basket, Beatmaking, Jeux vidéos, Sneakers, Astronomie
        </Paragraph>
      </Section>

      <Section delay={0.7}>
        <Heading as="h3" variant="section-title">
          Réseaux sociaux
        </Heading>
        <List>
          <ListItem>
            <Link href="https://github.com/No1ceTea" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoGithub />}
              >
                @No1ceTea
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://twitter.com/No1ceTea" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoTwitter />}
              >
                @No1ceTea
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://instagram.com/no1cetea" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoInstagram />}
              >
                @no1cetea
              </Button>
            </Link>
          </ListItem>
        </List>
      </Section>
    </Container>
  </Layout>
)

export default Home
export { getServerSideProps } from '../components/chakra'
