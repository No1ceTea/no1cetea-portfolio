import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'

import thumbBlackhole from '../public/images/BlackHole_V2.png'
import thumbAstro from '../public/images/AstroThai1.png'
import thumbBank from '../public/images/bank1.png'
import thumbCandy from '../public/images/bonbonweb.png'
import thumbSicilyLines from '../public/images/Accueil_Réservation.png'
import thumbblackbot from '../public/images/Blackbotscript.png'

const Works = () => {
  return (
    <Layout>
      <Container>
        <Heading as="h3" fontSize={20} mb={4}>
          Projets
        </Heading>

        <SimpleGrid column={[1, 1, 2]} gap={6}>
          <Section>
            <WorkGridItem id="blender" title="Modélisation 3D avec Blender" thumbnail={thumbBlackhole}>
              Pour mon loisir, j'ai appris à modéliser avec Blender.
            </WorkGridItem>
          </Section>
        </SimpleGrid>

        <SimpleGrid column={[1, 1, 2]} gap={6}>
          <Section>
            <WorkGridItem id="astro" title="Premier site en html" thumbnail={thumbAstro}>
              Création d'un site en html et css avec un sujet ou thème libre.
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
              Project d'application lourde, création d'une application banquaire,
              avec les fonctionnalités suivantes :

            </WorkGridItem>
          </Section>

          <Section>
            <WorkGridItem id="blackbot" title="BlackBot.me" thumbnail={thumbblackbot}>

            </WorkGridItem>
          </Section>

          <Section>
            <WorkGridItem id="rcvb" title="Rugby Club Val de Bièvre" thumbnail={thumbBank}>
              Stage
            </WorkGridItem>
          </Section>

          <Section>
            <WorkGridItem id="sicilylines" title="Sicily-Lines" thumbnail={thumbSicilyLines}>
              Site et application lourde permettant de faire des resérvations de bateau
            </WorkGridItem>
          </Section>

        </SimpleGrid>
      </Container>
    </Layout>
  )
}

export default Works
export { getServerSideProps } from '../components/chakra'