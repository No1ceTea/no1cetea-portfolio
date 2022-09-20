import { Container, Badge, List, ListItem, Link } from '@chakra-ui/react'
import { Title, Meta, WorkImage } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="Blender">
    <Container>
      <Title>
        Modelization with Blender <Badge>2019</Badge>
      </Title>
      <P>
        I learn how to use Blender by recreating projects of{' '}
        <Link href="https://www.youtube.com/c/PolygonRunway" scroll={false} target="_blank">PolygonRunway</Link>.      
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Images</Meta>
        </ListItem>
      </List>
      
      
      <WorkImage src="/images/BlackHole_V1.png" />
      <WorkImage src="/images/BlackHole_V2.png" />
      <WorkImage src="/images/Lowpolygarden.png" />
      <WorkImage src="/images/Kitchen.png" />
      <WorkImage src="/images/Bedroom.png" />
      <WorkImage src="/images/Sushi.png" />
      <WorkImage src="/images/Island.png" />
      <WorkImage src="/images/Forestroad.png" />

    </Container>
  </Layout>
)
export default Work
export { getServerSideProps } from '../../components/chakra'
