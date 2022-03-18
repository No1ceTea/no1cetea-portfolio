import { Container, Heading, SimpleGrid} from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'

import thumbAstro from '../public/images/AstroThai1.png'
import thumbBank from '../public/images/thai.jpg'
import thumbCandy from '../public/images/bonbonweb.png'

const Works = () => {
    return (
        <Layout>
            <Container>
                <Heading as="h3" fontSize={20} mb={4}>
                    Projets
                </Heading>

                <SimpleGrid column={[1,1,2]} gap={6}>
                    <Section>
                        <WorkGridItem id="astro" title="Premier site en html" thumbnail={thumbAstro}>
                            Créer un site en html et css avec un sujet ou thème libre.
                        </WorkGridItem>
                    </Section>

                    <Section>
                        <WorkGridItem id="candy" title="Site de bonbon 'Haribo'" thumbnail={thumbCandy}>
                            Création d'un site web marchand avec les fonctionnalités suivantes :
                            ajouter, modifier, supprimer un produit de la base de données, et ajouter un produit au panier.
                        </WorkGridItem>
                    </Section>

                    <Section>
                        <WorkGridItem id="banque" title="Application banque" thumbnail={thumbBank}>
                            Project d'application lourd, création d'une application banquaire,
                            avec les fonctionnalités suivantes : 
                            
                        </WorkGridItem>
                    </Section>

                </SimpleGrid>
            </Container>
        </Layout>
    )
}

export default Works
export { getServerSideProps } from '../components/chakra'
