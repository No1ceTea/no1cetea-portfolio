import { Container, Heading, SimpleGrid, Box, useColorModeValue, Link, Badge, Button, ListItem } from '@chakra-ui/react'
import Section from '../components/section'
import Layout from '../components/layouts/article'
import P from '../components/paragraph'
import { WorkImage } from '../components/work'
import { GridItem } from '../components/grid-item'

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
            Bot et Script sneakers
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
              concept, etc...
              <P>
              Cela a pour but de d'évaluer l'impact sur l'environnement et l'organisation.
              </P> 
            </P>
          </Section>
        </SimpleGrid>

        <Heading as="h3" fontSize={20} mb={8}>
          Outils de ma veille technologique
        </Heading>
        <SimpleGrid column={[1, 1, 2]} gap={6}>
          <Section>
            <P>
              J'ai effectuer ma veille grâce à un agrégateur de flux RSS nommé feedlyn. En plus des informations fournis
              tout les mois grâce au mot clé que j'ai renseigner, j'ai utilisé en plus de cet agrégateur mes connaissances
              en matière de bot et les logiciels que j'utilise au quotidien.
              <P>
                Feedlyn est très facile à mettre en place, en créant un repertoire où je vais collecter mes données et mes 
                informations, je renseigne des mots clés et Feedlyn collectera et les stockera dans le repertoire en question.
                Je peux aussi suivre grâce à Feedlyn des fils Twitter et des Newsletters.
              </P>
              <P>
                Pour mes connaissances, je vais vous présenter au préalable les outils que j'utilise au quotidien,
                et interviewver un développeur qui met en place ses outils.
              </P>
             </P>
          </Section>
        </SimpleGrid>
        
        <Heading as="h3" fontSize={20} mb={8}>
          Sujet de ma veille technologique
        </Heading>
        <SimpleGrid column={[1, 1, 2]} gap={6}>
          <Section>
            <P>
              Pour ma veille technologique, j'ai choisi de vous présenter les bots sneakers. Ces outils permette d'automatiser 
              et d'agrandir ces chances d'avoir des paires qui sont recherchés et/ou en quantité limité.
              Ce marché s'agrandit de plus en plus et les anti-bot se developpe de plus pour contrer ses outils.
              Nous allons voir comment et avec quoi ils sont développer.
            </P>
          </Section>
        </SimpleGrid>

        <Heading as="h3" fontSize={20} mb={8}>
          Qu'est ce qu'un bot ?
        </Heading>
        <SimpleGrid column={[1, 1, 2]} gap={6}>
          <Section>
            <P>
            « Bot » est le mot anglais de « robot ». D'une manière générale, un robot est une machine conçue par les professionnels pour effectuer une tâche bien précise afin de faciliter la vie de l'humain.
            Dans le cas du bot sneakers, le robot a été conçu pour cop les sneakers limités. En d'autres termes, il s'agit d'un moyen de monitoring qui permet à une personne de mettre la main sur une paire 
            de sneakers édition limitée, issues de plus grandes marques. Ainsi, pour pouvoir obtenir les dernières exclusivités de sneakers, un bot est très vite devenu une nécessité.
            <P>
            Le fonctionnement d'un bot sneaker est assez simple et très innovant. Auparavant, quand les nouvelles exclusivités de chaussures étaient directement lancées en boutique,
            il suffisait d'arriver très tôt le matin (ou tard la veille) pour en avoir une. Aujourd'hui, le concept n'est plus le même.
            Pour éviter les longues attentes devant les boutiques (qui finissent généralement par des bagarres), 
            la plupart des grandes marques de chaussures ont décidé de mettre en vente leurs nouveaux sneakers en 
            ligne. De plus, il n'est plus question de « qui est arrivé en premier ? », mais d'un système de raffle tout à fait différent : le tirage au sort.
            <P>
            C'est là qu'interviennent les bots. C'est le meilleur moyen de mettre les chances de son côté et d'être choisi 
            dans le tirage au sort pour obtenir les dernières sorties de sneakers limités pour ensuite les ajouter à sa 
            collection de chaussures ou simplement pour les revendre à un prix plus élevé pour se faire des bénéfices.
            </P>
            </P>
            </P>
          </Section>
        </SimpleGrid>

        <Heading as="h3" fontSize={20} mb={8}>
          <Link href="https://www.apple.com/fr/newsroom/2020/11/apple-unleashes-m1/" target="_blank">
          Apple lance la puce révolutionnaire M1 
          </Link>
          <br />
          <Badge>10 Novembre 2020</Badge>
          <Badge ml={60}>Apple.com</Badge>
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
              <P>
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
              </Popover> à la puce qui embarque 7 cœurs extensible à 8 cœurs.
              </P>
              <P>
              Possedant le Neural Engine, le Mac accélère considérablement les tâches d'apprentissage automatiquement.
              reposant sur l'architecture 16 cœurs la plus avancée d'Apple et est capable d'exécuter 11 000 milliards
              d'opération à la fois (comparaison à AMD ou Intel). Cette puce possède aussi les dernières technologies
              les plus performantes conçues sur mesure tel que le tout dernier processeur de signal d'image qui assure
              une qualité d'image et de son de la plus haute qualité, la toute dernière Secure Enclave, qui garantit une sécurité
              hors pair ou encore des moteurs d'encodage et de décodage multimédia efficaces et économes.
              </P>
              <P>
              La puce assure être la meilleur dans les performances par watt au monde, ces cœurs sont les cœurs 
              de CPU les plus rapides au monde pour une puce à faible consommation d'énergie.
              </P>
            </P>
          </SimpleGrid>
        </Section>

        
      </Container>
    </Layout>
  )
}

export default Veilletechnologique
export { getServerSideProps } from '../components/chakra' 