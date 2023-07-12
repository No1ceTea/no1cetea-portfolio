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
        Bonjour, je suis étudiant en développement web et application en France !
      </Box>

      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Jacquot Thai
          </Heading>
          <p>Étudiant ( Développeur )</p>
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
              borderRadius="full"
              width="100"
              height="100"
            />
          </Box>
        </Box>
      </Box>

      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          Me as a Developer
        </Heading>
        <Paragraph>
        Je m&apos;appelle Thai, j&apos;ai 22 ans et je suis actuellement en deuxième année de cycle ingénieur à {' '}
        <Link
              href="https://www.lyceedecachan.fr/"
              scroll={false}
              target="_blank"
              >l&apos;Institut G4 à paris</Link>.
        </Paragraph>
        <Box align="center" my={4}>
          <NextLink href="/works" scroll={false}>
            <Button
              as={NextLink}
              href="/works"
              scroll={false} 
              rightIcon={<ChevronRightIcon />} 
              colorScheme="teal"
            >
              Mon portfolio
            </Button>
          </NextLink>
        </Box>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          Professional project
        </Heading>
        <Paragraph>
        Je souhaite devenir développeur Web ou Designer UX/UI ou Creative Coder.
        Je suis actuellement en alternance à l&apos;Institut G4 à Paris, et en contrat d&apos;apprentissage de 3 ans à la DSIBA en tant
        que développeur/concepteur d&apos;application en Java.
        </Paragraph>
      </Section>

      <Section delay={0.4}>
        <Heading as="h3" variant="section-title">
          Bio
        </Heading>
        <BioSection>
          <BioYear>2019</BioYear>
          BAC technologique STI2D spécialité SIN (Service Informatique et Numérique)
        </BioSection>
        <BioSection>
          <BioYear>2020-2022</BioYear>
          BTS SIO option SLAM au lycée Polyvalent de Cachan (Non obtenu)
        </BioSection>
        <BioSection>
          <BioYear>2022-2025</BioYear>
          (En cours d&apos;obtention) Titre RNCP niveau 7 &quot;Chef de projet système d&apos;information&quot; à l&apos;Institut G4 Paris
          Étant en contrat d&apos;apprentissage, je travaille actuellement pour la DSIBA à La Banque Postale
        </BioSection>
      </Section>

      <Section delay={0.5}>
        <Heading as="h3" variant="section-title">
          I ♥
        </Heading>
        <Paragraph>
          Musique, Clavier custom, Sneakers, Astronomie, Automobile, Jeu vidéo
        </Paragraph>
      </Section>

      <Section delay={0.7}>
        <Heading as="h3" variant="section-title">
          On the web
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
