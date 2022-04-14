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
        pour créer des fonctionnalités tel qu'ajouter, modifier ou supprimer des bonbons de la base de données. 
        Nous pouvons aussi mettre des produits dans un panier où le prix total de tous les produits sont calculer.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Source</Meta>
          <Link href="https://github.com/No1ceTea/BonbonWeb">
            CandyShop "Haribo" <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>HTML, CSS, JS, PHP</span>
        </ListItem>
      </List>

      <WorkImage src="/images/bonbonweb.png" />
      <WorkImage src="/images/haribo.png" />
      <WorkImage src="/images/hariboAdmin.png" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'