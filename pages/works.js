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
            <WorkGridItem id="astro" title="AstroThai" thumbnail={thumbAstro}>
              Création d'un site en html et css avec un sujet ou thème libre.
            </WorkGridItem>
          </Section>

          <Section>
            <WorkGridItem id="candy" title="Site de bonbon 'Haribo'" thumbnail={thumbCandy}>
              Site marchand de bonbon pour mettre en pratique nos connaissance en PHP.
            </WorkGridItem>
          </Section>

          <Section>
            <WorkGridItem id="banque" title="Application banque" thumbnail={thumbBank}>
              Project d'application en C# avec Visual Studio pour imiter les fonctions d'une banque.

            </WorkGridItem>
          </Section>

          <Section>
            <WorkGridItem id="blackbot" title="BlackBot.me" thumbnail={thumbblackbot}>
              Projet personnel, site de vente pour vendre une formation sur le développement des bots.
            </WorkGridItem>
          </Section>

          <Section>
            <WorkGridItem id="rcvb" title="Rugby Club Val de Bièvre" thumbnail={thumbBank}>
              Site mise à jour pour le club de rugby du Val de Bièvre lors de mon stage de seconde année.
            </WorkGridItem>
          </Section>

          <Section>
            <WorkGridItem id="sicilylines" title="Sicily-Lines" thumbnail={thumbSicilyLines}>
              Site et application lourde permettant de faire des resérvations de bateau en Siclily.
            </WorkGridItem>
          </Section>

        </SimpleGrid>
      </Container>
    </Layout>
  )
}

export default Works
export { getServerSideProps } from '../components/chakra'