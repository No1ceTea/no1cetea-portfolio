import { Container, Heading, SimpleGrid} from '@chakra-ui/react'
import Section from '../components/section'
import Layout from '../components/layouts/article'

const Veilletechnologique = () => {
    return(
        <Layout>
            <Container>
                <Heading as="h3" fontSize={20} mb={4}>
                    Les processeurs Apple
                </Heading>
                <SimpleGrid column={[1,1,2]} gap={6}>
                    <Section>
                        Les processeurs Apple sont sortis en 2020, avec la sortie de leurs nouveau Macbook Air.
                        Les puces sont nommées "M1" 
                    </Section>
                </SimpleGrid>
                
            </Container>
        </Layout>

    )
}

export default Veilletechnologique
export { getServerSideProps } from '../components/chakra'