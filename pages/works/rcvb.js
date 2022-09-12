import { Container, Badge, List, Link, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, Meta, WorkImage } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="RCVB">
    <Container>
      <Title>
        RCVB <Badge>2022</Badge>
      </Title>
      <P>
        Website for my second year of internship, developing and setting up a website for a rugby association. 
        It updates the old site and includes more security for the new features integrated into the site such as
        the registration of new members with a database and the management of its members.
      </P>
      
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Source</Meta>
          <Link href="https://github.com/No1ceTea/RCVB">
            RCVB <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>HTML, CSS, JS, MySQL</span>
        </ListItem>
      </List>

      <WorkImage src="/images/rcvb1.png" />
      <WorkImage src="/images/rcvb2.png" />
      <WorkImage src="/images/rcvb3.png" />
      <WorkImage src="/images/rcvb4.png" />

    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
