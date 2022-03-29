import { Container, Badge, List, Link, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, Meta, WorkImage } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="BlackBot">
    <Container>
      <Title>
        BlackBot.me <Badge>2021</Badge>
      </Title>
      <P>
      BlackBot est un outil qui permet de s'exercer au développement pour avoir les bagages
      nécessaires à développer sont propre bot.
      BlackBot.me est le site vitrine pour vendre cette formation.
      Grâce à ces cours, vous apprenez à installer Python, faire des requêtes,
      parse une réponse JSON/HTML, faire un script qui autocheckout sur un Shopify,
      reverse engineer un anti-bot...
      </P>

      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://blackbotme.vercel.app/">
            BlackBot.me <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>NodeJS, ReactJS, Python</span>
        </ListItem>
      </List>
      
      <WorkImage src="/images/Blackbotme.png" />
      <WorkImage src="/images/Blackbotscript.png" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'