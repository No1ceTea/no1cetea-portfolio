import { Container, Heading, SimpleGrid, Box, useColorModeValue} from '@chakra-ui/react'
import Section from '../components/section'
import Layout from '../components/layouts/article'

const Veilletechnologique = () => {
    return(
        <Layout>
            <Container>
            <Box
                borderRadius="lg"
                mb={6}
                p={3}
                textAlign="center"
                bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
            >
                <Heading as="h1" fontSize={20}>
                    Les bots sneakers
                </Heading>
            </Box>

                <Heading as="h3" fontSize={20} mb={8}>
                    Pour commencer, qu'est ce qu'une veille technologique ?
                </Heading>
                <SimpleGrid column={[1,1,2]} gap={6}>
                    <Section>
                    La veille technologique, élément de la veille stratégique, consiste à surveiller les évolutions techniques,
                    les innovations dans un secteur d'activité donnée. La veille technologique comprend notamment la surveillance, la collecte,
                    le partage et la diffusion d'information permettant d'anticiper ou de s'informer sur des changements en matière de recherche,
                    développement, brevet, lancement de nouveaux produits, matériaux, processus, concepts, innovation de fabrication, etc…. 
                    Cela a pour but d'évaluer l'impact sur l'environnement et l'organisation.
                    </Section>
                </SimpleGrid>
                
            </Container>
        </Layout>

    )
}

export default Veilletechnologique
export { getServerSideProps } from '../components/chakra'