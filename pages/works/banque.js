import { Container, Badge, List, Link, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, Meta, WorkImage } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="Banque">
    <Container> 
      <Title>
        Bank <Badge>2021</Badge>
      </Title>
      <P> 
        Application that imitates banking applications. We can create an account and modify or delete it, which directly affects the database that is connected to this application. 
        We can also debit or credit an account, as well as modify its overdraft.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Source</Meta>
          <Link href="https://github.com/No1ceTea/Bank">
            Github <ExternalLinkIcon mx="2px" />
          </Link> 
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>C#, Java, PHP</span>
        </ListItem>
      </List>

      <WorkImage src="/images/works/bank1.png" />
      <WorkImage src="/images/works/bank2.png" />
      <WorkImage src="/images/works/bank3.png" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
