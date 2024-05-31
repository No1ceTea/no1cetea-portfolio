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
        Site internet pour ma deuxième année de stage, développement et mise en
        place d&apos;un site internet pour une association de rugby. Il met au
        goût du jour l&apos;ancien site et inclut plus de sécurité pour les
        nouvelles fonctionnalités intégrées au site telles que
        l&apos;inscription des nouveaux membres auprès d&apos;une base de
        données et la gestion de ses membres.
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
          <span>HTML, CSS, PHP, JS, MySQL, PHPMyAdmin</span>
        </ListItem>
      </List>

      <WorkImage src="/images/works/rcvb1.png" />
      <WorkImage src="/images/works/rcvb2.png" />
      <WorkImage src="/images/works/rcvb3.png" />
      <WorkImage src="/images/works/rcvb4.png" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
