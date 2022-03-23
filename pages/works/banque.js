import { Container, Badge, List, Link, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, Meta, WorkImage } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="Bank">
    <Container> 
      <Title>
        Banque <Badge>2021</Badge>
      </Title>
      <P>
        Application en C#
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Application</Meta>
          <Link href="#">
            Pas de lien pour le moment <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>C#</span>
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