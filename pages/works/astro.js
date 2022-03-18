import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, Meta, WorkImage } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
    <Layout title = "CandyShop">
        <Container>
            <Title>
                AstroThai <Badge>2020</Badge>
            </Title>
            <P>
                Tout premier site créer pour pratiquer du HTML et du CSS.
                Inspiré par les vidéos de <Link href="https://www.youtube.com/c/inanutshell">Kurzgesagt</Link>. 
            </P>
            <List ml={4} my={4}>
                <ListItem>
                    <Meta>Website</Meta>
                    <Link href="#">
                        Pas de lien pour le moment <ExternalLinkIcon mx="2px" />
                    </Link>
                </ListItem>
                <ListItem>
                    <Meta>Stack</Meta>
                    <span>HTML, CSS</span>
                </ListItem>
                <ListItem>
                    <Meta>Source et inspiration</Meta>
                    <Link href="https://www.youtube.com/c/inanutshell">
                        In a nutshell <ExternalLinkIcon mx="2px" />
                    </Link>
                </ListItem>
            </List>

            <WorkImage src="/images/AstroThai1.png" alt="astro1" />
            <WorkImage src="/images/AstroThai2.png" alt="astro2" />
            <WorkImage src="/images/AstroThai3.png" alt="astro3" />
        </Container>
    </Layout>
)

    export default Work
    export { getServerSideProps } from '../../components/chakra'