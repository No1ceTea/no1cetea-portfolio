import { Container, Heading, SimpleGrid, Box, useColorModeValue, Link, Badge, Button, ListItem} from '@chakra-ui/react'
import Section from '../components/section'
import Layout from '../components/layouts/article'
import P from '../components/paragraph'
import { WorkImage } from '../components/work'

import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverArrow,
  PopoverCloseButton,
} from '@chakra-ui/react'

const Veilletechnologique = () => {
  return (
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
            Processeur Apple 
          </Heading>
        </Box>

        <Heading as="h3" fontSize={20} mb={8}>
          Pour commencer, qu'est ce qu'une veille technologique ?
        </Heading>
        <SimpleGrid column={[1, 1, 2]} gap={6}>
          <Section>
            <P>
              La veille technolgique, élément de la veille stratégique, consiste  à surveiller les évolutions techniques,
              les innovations dans un secteur d'activité donnée. Elle comprend aussi la surveillance, la collecte,
              le partage et la diffusion d'infotmation permettant d'anticiper ou de s'informer sur des changements en
              matière de recherche et de développement, tout en passant par les brevets, matériaux utilisés, processus,
              concept, etc... <br />
              Cela a pour but de d'évaluer l'impact sur l'environnement et l'organisation.
            </P>
          </Section>
        </SimpleGrid>

        <Heading as="h3" fontSize={20} mb={8}>
          Les outils de ma veille technologique
        </Heading>
        <SimpleGrid column={[1, 1, 2]} gap={6}>
          <Section>
            <P>
              J'ai effectuer ma veille grâce à un agrégateur de flux RSS nommé feedlyn. En plus des informations fournis
              tout les mois, j'ai utilisé en plus des recherches certains sites pour me tenir au courant des dernières actualités à la tech tel que 
              <Link
              href="https://www.cowcotland.com/"
              scroll={false}
              target="_blank"
              > Cowcotland.com</Link>, qui regroupe l'actualité hardware et 
              <Link
              href="https://www.frandroid.com/"
              scroll={false}
              target="_blank"
              >  Frandroid.com</Link> qui regroupe l'actualité hardware et software, avec aussi des tests sur les derniers
              produits high-tech.
             </P>
          </Section>
        </SimpleGrid>
        
        <Heading as="h3" fontSize={20} mb={8}>
          Le sujet de ma veille technologique
        </Heading>
        <SimpleGrid column={[1, 1, 2]} gap={6}>
          <Section>
            <P>
              Pour ma veille technologique, j'ai décidé de choisir les nouveaux processeurs Apple qui viens indirectement 
              en concurrence avec Intel et AMD car les puces Apple étant privé et unique au MacBook.
              Pour introduire ces nouvelles puces, nous allons regarder en détail les technologies qui y sont 
              embarqués et qu'est ce que cela par rapport au puce de leurs concurrent.
            </P>
          </Section>
        </SimpleGrid>

        <Heading as="h3" fontSize={20} mb={8}>
          Apple lance la puce révolutionnaire M1 
          <br />
          <Badge>10 Novembre 2020</Badge>
        </Heading>
        <Section>
          <SimpleGrid column={[1, 1, 2]} gap={6}>
            <P>
              Produit de la maison de la pomme, La puce M1 épouse parfaitement le software macOS.
              La puce M1 est un système sur puce ou un System on a Chip (SoC). Cela signifie qu'une seul puce 
              effectue tous les calculs, elle est aussi la première puce à être gravé à 5nm. Etant donné que 
              tout est sur une puce, plus besoin d'envoyer les données, elles sont immédiatement disponible
              pour tout les différents processus à effectuer. Cette colaboration améliore à son tour la vitesse 
              de l'ensemble.
              <WorkImage src="/images/Apple_chip.jpg" />
              <Popover>
                <PopoverTrigger>
                  <Button colorScheme='teal' variant='link'> Le CPU </Button>
                </PopoverTrigger>
                <PopoverContent>
                  <PopoverArrow />
                  <PopoverCloseButton />
                  <PopoverHeader>
                    <br /> 
                    <ListItem>CPU : 8 cœurs, fréquence maximale à 3,20 GHz</ListItem>
                  </PopoverHeader>
                  <PopoverBody>
                    <ListItem>
                    4 cœurs haute performance (3,20 GHz, 192 Ko cache d'instructions, 128 Ko cache de données, 12 Mo mémoire niveau 2 partagée)
                    </ListItem>
                    <ListItem>
                    4 cœurs haute efficacité (2,10 GHz, 128 Ko cache d'instructions, 64 Ko cache de données, 4 Mo mémoire niveau 2 partagée)
                    </ListItem>
                  </PopoverBody>
                </PopoverContent>
              </Popover> embarqués avec 8 cœurs, fréquence maximale à 3,20 GHz.
              Quant au <Popover>
                <PopoverTrigger>
                  <Button colorScheme='teal' variant='link'>GPU intégré </Button>
                </PopoverTrigger>
                <PopoverContent>
                  <PopoverArrow />
                  <PopoverCloseButton />
                  <PopoverHeader>
                    <br />
                    <ListItem>GPU : 7 ou 8 cœurs</ListItem>
                  </PopoverHeader>
                  <PopoverBody>
                    <ListItem>128 unités d'exécutions</ListItem>
                    <ListItem>Jusqu'à 8 threads</ListItem>
                    <ListItem>2,6 téraflops (FP32)</ListItem>
                    <ListItem>82 gigatexels par seconde</ListItem>
                    <ListItem>41 gigapixels par seconde</ListItem>
                  </PopoverBody>
                </PopoverContent>
              </Popover> à la puce qui embarque 7 cœurs extensible à 8 cœurs. <br />
              Possedant le Neural Engine, le Mac accélère considérablement les tâches d'apprentissage automatiquement.
              Reposant sur l'architecture 16 cœurs la plus avancée d'Apple et est capable d'exécuter 11 000 milliards
              d'opération à la fois (comparaison à AMD ou Intel). Cette puce possède aussi les dernières technologies
              les plus performantes conçues sur mesure tel que le tout dernier processeur de signal d'image qui assure
              une qualité d'image et de son de la plus haute qualité, la toute dernière Secure Enclave, qui garantit une sécurité
              hors pair ou encore des moteurs d'encodage et de décodage multimédia efficaces et économes. <br />
              La puce assure être la meilleur dans les performances par watt au monde, ces cœurs sont les cœurs 
              de CPU les plus rapides au monde pour une puce à faible consommation d'énergie.
            </P>
          </SimpleGrid>
        </Section>

        <Heading as="h3" fontSize={20} mb={8}>
          
        </Heading> 
      </Container>
    </Layout>
  )
}

export default Veilletechnologique
export { getServerSideProps } from '../components/chakra'