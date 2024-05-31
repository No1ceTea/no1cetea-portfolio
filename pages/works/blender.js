import { Container, Badge, List, ListItem, Link } from '@chakra-ui/react'
import { Title, Meta, WorkImage } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="Blender">
    <Container>
      <Title>
        Modélisation 3D avec Blender <Badge>2019</Badge>
      </Title>
      <P>
        J&apos;ai appris à utiliser Blender en recréant des projets de{' '}
        <Link
          href="https://www.youtube.com/c/PolygonRunway"
          scroll={false}
          target="_blank"
        >
          PolygonRunway
        </Link>
        .
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Images</Meta>
        </ListItem>
      </List>

      <WorkImage src="/images/works/BlackHole_V1.png" />
      <WorkImage src="/images/works/BlackHole_V2.png" />
      <WorkImage src="/images/works/Lowpolygarden.png" />
      <WorkImage src="/images/works/Kitchen.png" />
      <WorkImage src="/images/works/Bedroom.png" />
      <WorkImage src="/images/works/Sushi.png" />
      <WorkImage src="/images/works/Island.png" />
      <WorkImage src="/images/works/Forestroad.png" />
    </Container>
  </Layout>
)
export default Work
export { getServerSideProps } from '../../components/chakra'
