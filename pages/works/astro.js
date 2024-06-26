import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, Meta, WorkImage } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="CandyShop">
    <Container>
      <Title>
        AstroThai <Badge>2020</Badge>
      </Title>
      <P>
        Premier site créé avec HTML5, CSS3 et Bootstrap. Inspiré par{' '}
        <Link href="https://www.youtube.com/c/inanutshell">Kurzgesagt</Link>.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Source</Meta>
          <Link href="https://github.com/No1ceTea/AstroThai">
            Github
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>HTML, CSS, Bootstrap</span>
        </ListItem>
        <ListItem>
          <Meta>Inspiration</Meta>
          <Link href="https://www.youtube.com/c/inanutshell">
            In a nutshell <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
      </List>

      <WorkImage src="/images/works/AstroThai1.png" alt="astro1" />
      <WorkImage src="/images/works/AstroThai2.png" alt="astro2" />
      <WorkImage src="/images/works/AstroThai3.png" alt="astro3" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
