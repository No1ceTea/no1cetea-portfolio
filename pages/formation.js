import { Container, Heading, List, ListItem, Text } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section' 
import P from '../components/paragraph'
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'

const Formation = () => {
  return(
    <Layout>
      <Container>
        <Heading as="h3" fontSize={20} mn={4}>
          Qu'est ce que le BTS SIO ? 
        </Heading>
        <Section>
          <P>
          Le BTS Services Informatiques aux Organisations est un diplôme reconnu par l'état de niveau BAC+2.
          Il remplace depuis Septembre 2011, l'ancien BTS IG (Informatique de gestion). En effet, 
          cette nouvelle formule réponds aux attentes de la profession en matière de qualification.
          Le programme a évolué en fonction de la place et du rôle des TIC (Technologies de l'Information et de la Communication) 
          et propose deux spécialités bien distinctes : Le BTS SIO Option SISR et Option SLAM.
          </P>

          <Tabs isFitted variant="soft-rounded" colorScheme="teal" mt={8}>
            <TabList mb="1em">
              <Tab>SLAM | Solutions Logicielles et Applications Métiers</Tab>
              <Tab>SISR | Solutions d'Infrastructures Systèmes et Réseaux</Tab>
            </TabList>
            <TabPanels>
              <TabPanel>
                <P>
                La spécialisation SLAM du BTS SIO est elle plus orientée Développement. Elle permet d'apprendre à réaliser 
                des logiciels, sites webs, applications mobiles, mais aussi de rédiger des documentations techniques 
                liées à celles-ci. De plus, elle permet d'apprendre à former des utilisateurs pour gérer la 
                maintenance des applications.
                </P>
              </TabPanel>
              <TabPanel>
                <P>
                La spécialisation SISR du BTS SIO permet d'apprendre un métier qui consiste à installer, 
                configurer et gérer les équipements et les réseaux informatiques. Cela signifie intervenir 
                sur la conception, la mise en place, le déploiement et la maintenance des programmes destinés 
                à la gestion au sein d'une organisation, avec un œil également du côté de la cybersécurité.
                </P>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Section>

        <Heading as="h3" fontSize={20} mb={8}>
          Matière enseignées en BTS SIO
        </Heading>
        <Section>
          
          <Tabs isFitted variant="soft-rounded" colorScheme="teal" mt={8}>
            <TabList mb="1em">
              <Tab>Première année</Tab>
              <Tab>Seconde année</Tab>
            </TabList>
            <TabPanels>
              <TabPanel>
                <List>
                  <ListItem textAlign="center" p={2}><Text as="u">Enseignements de spécialité (SLAM OU SISR) :</Text> 2 modules uniquement au second semestre</ListItem>
                  <ListItem textAlign="center" p={2}><Text as="u">Enseignements communs :</Text> 4 modules au 1er semestre puis 2 au second semestre</ListItem>
                  <ListItem textAlign="center" p={2}>Projets personnels et encadrés (PPE)</ListItem>
                  <ListItem textAlign="center" p={2}>Culture générale et expression</ListItem>
                  <ListItem textAlign="center" p={2}>Anglais</ListItem>
                  <ListItem textAlign="center" p={2}>Algorithme et mathématique de l'informatique</ListItem>
                  <ListItem textAlign="center" p={2}>Analyse économique, managériale et juridiques des services informatiques</ListItem>
                </List>
              </TabPanel>
              <TabPanel>
                <List>
                  <ListItem textAlign="center" p={2}><Text as="u">Enseignements de spécialité (SLAM ou SISR) :</Text> 3 modules</ListItem>
                  <ListItem textAlign="center" p={2}><Text as="u">Enseignements cummuns :</Text> 1 module de gestion de projet</ListItem>
                  <ListItem textAlign="center" p={2}>Projets personnels et encadrés (PPE)</ListItem>
                  <ListItem textAlign="center" p={2}>Culture générale et expression</ListItem>
                  <ListItem textAlign="center" p={2}>Anglais</ListItem>
                  <ListItem textAlign="center" p={2}>Mathématique de l'informatique</ListItem>
                  <ListItem textAlign="center" p={2}>Analyse économique, managériale et juridiques des services informatiques</ListItem>
                </List>
              </TabPanel>
            </TabPanels>
          </Tabs>

        </Section>
      </Container>
    </Layout>
  )     
  
}



export default Formation
export { getServerSideProps } from '../components/chakra'