import { Container, Heading, SimpleGrid, Link, Divider } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'

import thumbBlackhole from '../public/images/works/BlackHole_V2.png'
import thumbAstro from '../public/images/works/AstroThai1.png'
import thumbBank from '../public/images/works/bank1.png'
import thumbCandy from '../public/images/works/bonbonweb.png'
import thumbSicilyLines from '../public/images/works/Accueil_Réservation.png'
import thumbMontriond from '../public/images/works/montriond.png'
import thumbRcvb from '../public/images/works/rcvb1.png'

const Works = () => (
  <Layout title="Works">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Creation
      </Heading>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <WorkGridItem id="blender" title="Modélisation 3D avec Blender" thumbnail={thumbBlackhole}>
            Apprentissage de Blender avec les vidéos de <Link href="https://www.youtube.com/c/PolygonRunway" scroll={false} target="_blank">PolygonRunway</Link>.
          </WorkGridItem>
        </Section>
      </SimpleGrid>

      <Section delay={0.1}>
        <Divider my={6}/>

        <Heading as="h3" fontSize={20} mb={4}>
          Old works
        </Heading>
      </Section>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section delay={0.2}>
          <WorkGridItem id="astro" title="AstroThai" thumbnail={thumbAstro}>
            Mon premier site web développé avec HTLM5, CSS3 et Bootstrap
          </WorkGridItem>
        </Section>

        <Section delay={0.2}>
          <WorkGridItem id="candy" title="Site de bonbon 'Haribo'" thumbnail={thumbCandy}>
          Site marchand Candy pour apprendre le PHP
          </WorkGridItem>
        </Section>

        <Section delay={0.3}>
          <WorkGridItem id="montriond" title="Sdcmontriond" thumbnail={thumbMontriond}>
            Site d&apos;actualité de la copropriété de Créteil
          </WorkGridItem>
        </Section>

        <Section delay={0.3}>
          <WorkGridItem id="banque" title="Application banque" thumbnail={thumbBank}>
          Projet d&apos;application en C# pour imiter les fonctionnalités d&apos;une application bancaire
          </WorkGridItem>
        </Section>

        <Section delay={0.4}>
          <WorkGridItem id="rcvb" title="Rugby Club Val de Bièvre" thumbnail={thumbRcvb}>
            Refonte du site internet du club de rugby du Val de Bièvre
          </WorkGridItem>
        </Section>

        <Section delay={0.4}>
          <WorkGridItem id="sicilylines" title="Sicily-Lines" thumbnail={thumbSicilyLines}>
            Site Web et application lourde pour faire des réservations de bateaux
          </WorkGridItem>
        </Section>
      </SimpleGrid>
    </Container>
  </Layout>
)                            

export default Works
export { getServerSideProps } from '../components/chakra'
