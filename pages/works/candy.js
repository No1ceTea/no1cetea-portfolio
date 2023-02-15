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
        Website created to use all the knowledge we have in the first year.
        We can add, edit and remove candy of the database.
        You can also add and see all the product you added to the basket.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Source</Meta>
          <Link href="https://github.com/No1ceTea/BonbonWeb">
            CandyShop &quot;Haribo&quot; <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>HTML, CSS, JS, PHP</span>
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
