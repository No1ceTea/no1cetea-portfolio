import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, Meta, WorkImage } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="Montriond">
    <Container>
      <Title>Montriond <Badge>2021</Badge>
      </Title>
      <P>
        Site créé pour mon premier stage.
        En usage pour le propriétaire de la copropriété à Créteil, ainsi que ces habitants.
        Il permet d&apos;accéder via un espace de connexion à toutes les dernières informations concernant la copropriété.
        Ainsi qu&apos;une liste actualisée des numéros à contacter en cas de problème.
        Il y a aussi un espace en direct pour les réunions avec chat en temps réel.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="http://sdcmontriond.fr/">
            sdcmontriond.fr <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>HTML, CSS, JS, PHP, MySQL, PHPMyAdmin</span>
        </ListItem>
      </List>

      <WorkImage src="/images/works/montriond.png" />
      <WorkImage src="/images/works/montriondadmin.png" />
      <WorkImage src="/images/works/montriondmodif.png" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
