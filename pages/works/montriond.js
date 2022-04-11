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
        Site effectuer lors de mon stage de première année. 
        Il permet pour les propriétaires du bâtiment Montriond situé
        à Créteil d'avoir un accès au information des prestataires, 
        accès au live pour assister au réunion avec un LiveChat et les dernières actualités lié au bâtiment.
        Il est connecter à une base de données qui contient les prestaires ainsi que les propriétaires
        pour qu'il puisse se connecter grâce à leurs identifiant client.
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
          <span>HTML, CSS, JS, PHP</span>
        </ListItem>
      </List>

      <WorkImage src="/images/montriond.png" />
      <WorkImage src="/images/montriondadmin.png" />
      <WorkImage src="/images/montriondmodif.png" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'