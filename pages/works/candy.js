import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="CandyShop">
    <Container>
      <Title>
        CandyShop "Haribo" <Badge>2021</Badge>
      </Title>
      <P>
        Site créer pour mettre en pratique nos premières connaissance de première année. Nous avons ici utilisé principalement du PHP
        pour créer des fonctionnalités tel que ajouter, modifier ou supprimer des bonbons de la base de données. 
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
          <span>HTML, CSS, JS, PHP</span>
        </ListItem>
      </List>

      <WorkImage src="" alt="Candy00" />
      <WorkImage src="" alt="Candy01" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'