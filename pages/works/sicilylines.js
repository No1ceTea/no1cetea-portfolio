import { Container, Badge, List, Link, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, Meta, WorkImage } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="SicilyLines">
    <Container>
      <Title>
        SicilyLines <Badge>2022</Badge>
      </Title>
      <P>
        Projet divisé en 3 missions pour mettre en pratique nos connaissance en Symfony et twig.
        Une base de données en MySQL est aussi lié au site SicilyLines.
      <P>
        Dans la mission 3, une application lourde en C# à été demander avec les fonctionnalités suivantes : 
        
      </P>
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="#">
            Pas de lien pour le moment <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Symfony, Twig, CSS</span>
        </ListItem>
      </List>

      <WorkImage src="/images/Accueil_Réservation.png" />

      <List ml={4} my={4}>
        <ListItem>
          <Meta>Application</Meta>
          <Link href="#">
            Pas de lien disponible pour le moment <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>C#, Java, PHP</span>
        </ListItem>
      </List>
      
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'