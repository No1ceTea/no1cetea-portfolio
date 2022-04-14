import { Container, Badge, List, Link, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, Meta, WorkImage } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="Banque">
    <Container> 
      <Title>
        Banque <Badge>2021</Badge>
      </Title>
      <P>
        Application qui imite les applications bancaires. Nous pouvons créer un compte et le modifier
        ou le supprimer, ce qui affecte directement la base de données qui est connecter à cette application.
        Nous pouvons également débiter un créditer un compte, ainsi que modifier son découvert.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Source</Meta>
          <Link href="#">
            Pas de lien pour le moment <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>C#, Java, PHP</span>
        </ListItem>
      </List>

      <WorkImage src="/images/bank1.png" />
      <WorkImage src="/images/bank2.png" />
      <WorkImage src="/images/bank3.png" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'