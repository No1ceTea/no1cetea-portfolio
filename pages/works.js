import { Container, Heading, SimpleGrid, Link } from '@chakra-ui/react'
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
              My first Website develop with HTML5 and CCS3.
            </WorkGridItem>
          </Section>

          <Section>
            <WorkGridItem id="candy" title="Site de bonbon 'Haribo'" thumbnail={thumbCandy}>
              Candy merchant site to learn PHP.
            </WorkGridItem>
          </Section>

          <Section>
            <WorkGridItem id="montriond" title="Sdcmontriond" thumbnail={thumbMontriond}>
              Website for news from the Créteil condominium for a traineeship.
            </WorkGridItem>
          </Section>

          <Section>
            <WorkGridItem id="banque" title="Application banque" thumbnail={thumbBank}>
              Application project in C# to imitate the functionality of a banking application.
            </WorkGridItem>
          </Section>

          <Section>
            <WorkGridItem id="rcvb" title="Rugby Club Val de Bièvre" thumbnail={thumbRcvb}>
              Website update for the club of rugby at Val de Bièvre for a traineeship.
            </WorkGridItem>
          </Section>

          <Section>
            <WorkGridItem id="sicilylines" title="Sicily-Lines" thumbnail={thumbSicilyLines}>
              Website and heavy app for making boat reservations.
            </WorkGridItem>
          </Section>

        </SimpleGrid>
      </Container>
    </Layout>
  )
}

export default Works
export { getServerSideProps } from '../components/chakra'
