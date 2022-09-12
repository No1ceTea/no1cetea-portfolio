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
        Website create for my first traineeship.
        In use for the owner of the condominium at Créteil,
        It allows access through a connection space to all the latest information concerning the co-ownership 
        as well as an updated list of the numbers to contact in the event of a problem.  
        There is also a live space for meetings with real-time chat.
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
