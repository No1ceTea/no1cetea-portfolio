import { Container, Heading, SimpleGrid, Link } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'

import thumbBlackhole from '../public/images/BlackHole_V2.png'
import thumbAstro from '../public/images/AstroThai1.png'
import thumbBank from '../public/images/bank1.png'
import thumbCandy from '../public/images/bonbonweb.png'
import thumbSicilyLines from '../public/images/Accueil_Réservation.png'
import thumbMontriond from '../public/images/montriond.png'
import thumbRcvb from '../public/images/rcvb1.png'

const Works = () => {
  return (
    <Layout>
      <Container>
        <Heading as="h3" fontSize={20} mb={4}>
          Works
        </Heading>

        <SimpleGrid column={[1, 1, 2]} gap={6}>
          <Section>
            <WorkGridItem id="blender" title="Modélisation 3D avec Blender" thumbnail={thumbBlackhole}>
              Learn to use Blender with <Link href="https://www.youtube.com/c/PolygonRunway" scroll={false} target="_blank">PolygonRunway</Link>.
            </WorkGridItem>
          </Section>
    
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
            <WorkGridItem id="montriond" title="Sdcmontriond" thumbnail={thumbMontriond}>
              Site web pour la diffusion es information pour le batiment Montriond situé à Créteil.
            </WorkGridItem>
          </Section>

          <Section>
            <WorkGridItem id="banque" title="Application banque" thumbnail={thumbBank}>
              Project d'application en C# avec Visual Studio pour imiter les fonctions d'une application
              bancaire.
            </WorkGridItem>
          </Section>

          <Section>
            <WorkGridItem id="rcvb" title="Rugby Club Val de Bièvre" thumbnail={thumbRcvb}>
              Site mise à jour pour le club de rugby du Val de Bièvre lors de mon stage de seconde année.
            </WorkGridItem>
          </Section>

          <Section>
            <WorkGridItem id="sicilylines" title="Sicily-Lines" thumbnail={thumbSicilyLines}>
              Site web et application lourde permettant de faire des resérvations de bateau en Siclile.
            </WorkGridItem>
          </Section>

        </SimpleGrid>
      </Container>
    </Layout>
  )
}

export default Works
export { getServerSideProps } from '../components/chakra'
