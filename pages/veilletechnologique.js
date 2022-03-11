import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Section from '../components/section'
import Layout from '../components/layouts/article'

const Veilletechnologique = () => {
    return(
        <Layout>
            <Container>
                <Heading as="h3" fontSize={20} mb={4}>
                    Veille technologique
                </Heading>

                <SimpleGrid column={[1,1,2]} gap={6}>
                    <Section>
                        Ceci n'est qu'un test
                        
                    </Section>
                </SimpleGrid>
            </Container>
        </Layout>

    )
}

export default Veilletechnologique
export { getServerSideProps } from '../components/chakra'