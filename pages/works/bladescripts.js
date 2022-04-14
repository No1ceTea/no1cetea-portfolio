import { Container, Badge, List, Link, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, Meta, WorkImage } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="Bladescripts">
    <Container>
      <Title>Bladescripts <Badge>2022</Badge></Title>
      <P>
        Bladescripts est une extention google qui grâce à un menu
        permet d'automatiser et de rendre plus rapide l'achat d'un produit.
      </P>

      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://github.com/No1ceTea/BladeScripts">
            Blade Scripts <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>JS, JSON</span>
        </ListItem>
      </List>

      <WorkImage src="/images/bladescripts.jpg" />
      <WorkImage src="/images/bladescriptsite.jpg" />
      <WorkImage src="/images/bladescriptzalando.png" />
      <WorkImage src="/images/bladescripts2.jpg" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'