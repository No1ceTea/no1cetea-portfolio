import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="CandyShop">
    <Container>
      <Title>
        CandyShop &quot;Haribo&quot; <Badge>2021</Badge>
      </Title>
      <P>
        Site créé pour utiliser toutes les connaissances que nous avons dans la
        première année de BTS. Nous pouvons ajouter, modifier et supprimer des
        bonbons de la base de données. Vous pouvez également ajouter et voir
        tous les produits que vous avez ajoutés au panier.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Source</Meta>
          <Link href="https://github.com/No1ceTea/BonbonWeb">
            Github <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>HTML, CSS, Bootstrap, JS, PHP, MySQL, PHPMyAdmin</span>
        </ListItem>
      </List>

      <WorkImage src="/images/works/bonbonweb.png" />
      <WorkImage src="/images/works/haribo.png" />
      <WorkImage src="/images/works/hariboAdmin.png" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
