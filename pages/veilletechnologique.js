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

import thumbCPUperf1 from '../public/images/CPUperfvspower1.png'
import thumbCPUperf2 from '../public/images/CPUperfvspower2.png'
import thumbCPUperf3 from '../public/images/CPUperfvspower3.png'
import thumbGPUperf1 from '../public/images/GPUperfvspower1.png'
import thumbGPUperf2 from '../public/images/GPUperfvspower2.png'

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
              <WorkImage src="/images/Apple_chip.jpg"/>
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
              <WorkImage src="images/Newpucem1.jpg" />
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

        <Heading as="h3" fontSize={20} mb={8}>
          <Link href="https://www.frandroid.com/marques/apple/887199_surpuissante-lapple-m1-devance-le-dernier-core-i7-de-bureau-en-single-core" target="_blank">
          Surpuissante, l'Apple M1 devance le dernier Core i7 de bureau en single-core
          </Link>
          <br />
          <Badge>26 mars 2021</Badge>
          <Badge ml={60}>frandroid.com</Badge>
        </Heading>
        <Section>
          <SimpleGrid column={[1, 1, 2]} gap={6}>
            <P>
              Plusieurs mois après son introduction sur les MacBook Air, MacBook Pro 13 et sur le Mac mini,
              la puce Apple M1 continue d'impressionner et de faire tourner la concurrence en bourrique. 
              On apprend aujourd'hui qu'elle est capable de surclasser d'une courte avance le très récent 
              Intel Core i7-11700K d'Intel en calcul single-core. 
              Une fois de plus le SoC Apple M1 fait forte impression face à la concurrence x86 d'Intel et AMD
              <WorkImage src="images/benchi7vsM1.jpg" />
            </P>
          </SimpleGrid>    
        </Section>

        <Heading as="h3" fontSize={20} mb={8}>
          <Link href="" target="_blank">
          Apple dévoile les M1 Pro et M1 Max pour MacBook Pro aux performances gargantuesques
          <Badge>18 octobre 2021</Badge>
          </Link>
        </Heading>
        <Section>
          <SimpleGrid column={[1, 1, 2]} gap={6}>
            <P>
            Lors de son Special Event, Apple a présenté les M1 Pro et M1 Max, deux puces qui repoussent encore plus loin les performances du M1.
            <br />
            <P>
            Les M1 Pro et M1 Max introduisent pour la première fois une architecture SoC dans sa gamme Pro
            (puisqu'ils sont destinés à équiper les nouveaux MacBook Pro en format 14 pouces et 16 pouces, 
            disponibles dès la semaine prochaine. Apple a présenté cette première puce comme une volonté de
            « mettre à l'échelle l'architecture M1 » en doublant au passage l'interface mémoire. Il s'agit donc toujours d'une architecture en 5nm.
            La bande passante de la puce devrait pouvoir monter jusqu'à 200 GB/s, tirant parti de ses 32 Go de mémoire unifiée.
            La puce propose 10 cœurs dédiés au CPU, dont deux qui s'occupent de l'efficacité énergétique et 16 cœurs GPU, 
            soit 8 de plus que le M1. La puce possède en tout 33,7 milliards de transistors.
            <WorkImage src="images/Apple_chipM1ProMax.jpg" />
            Selon Apple, cette puce devrait afficher des performances 70 % plus rapides que la M1 classique. Ses performances graphiques devraient être multipliées par deux.
            </P>
            <WorkImage src="images/M1_MAX.png" />
            <P>
            La M1 Max a l'air d'être en somme une M1 Pro multipliée par deux, en particulier pour la partie graphique. 
            Elle propose 400 GB/s de bande passante, 10 cœurs CPU et 32 cœurs graphiques ! Le tout est appuyé par 64 Go de mémoire.
            Pour preuve le M1 Max est 35% plus rapide que le M1 Pro 70 % comparé au M1 Pro. En tout, 
            elle embarque 57 milliards de transistors. Il s'agit de « la plus grosse puce » jamais fabriquée par Apple.
            La firme promet des performances graphiques hors du commun, 
            multipliée par quatre par rapport à la M1. Voici un graphique qui compare les performances des M1 Pro et M1 Max avec la M1 et avec une puce quatre cœurs classiques.
            </P>
            <WorkImage src="images/CPUperf.png" />
            <WorkImage src="images/GPUpower.png" />
            <P>
            S'il faudra analyser tout cela la tête froide, notons qu'Apple compte bien tirer parti de 
            l'architecture ARM en proposant des puces très peu énergivores, et donc qui chauffent peu.
            Selon Apple, la M1 Max proposera les mêmes performances branchée ou sur batterie. 
            La firme de Cupertino déclare même que sa puce pourrait jouer à jeu égal avec une carte graphique de PC portable.
            Notons aussi la présence d'unités spécialisées comme un nouveau « Display Engine » qui peut gérer plusieurs écrans externes. 
            En outre, 16 cœurs Neural Engine se consacrent au
            <Popover >
              <PopoverTrigger>
                <Button colorScheme='teal' variant='link' ml={1}> Machine Learning </Button>
              </PopoverTrigger>
              <PopoverContent>
                <PopoverArrow />
                <PopoverCloseButton />
                <PopoverBody>
                <br />
                Le Machine Learning ou apprentissage automatique est un domaine scientifique, 
                et plus particulièrement une sous-catégorie de l'intelligence artificielle. 
                Elle consiste à laisser des algorithmes découvrir des ” patterns “, 
                à savoir des motifs récurrents, dans les ensembles de données.
                </PopoverBody>
              </PopoverContent>
            </Popover>
            .
            </P>
            </P>
          </SimpleGrid>
        </Section>

        <Heading as="h3" fontSize={20} mb={8}>
          <Link href="https://www.frandroid.com/marques/apple/1184463_apple-perd-lun-des-grands-artisans-des-puces-m1-au-profit-dintel" target="_blank">
            Apple perd l'un des grands artisans des puces M1 au profit d'Intel
          </Link>
          <br />
          <Badge>07 janvier 2022</Badge>
          <Badge ml={60}>frandroid.com</Badge>
        </Heading>
        <Section>
          <SimpleGrid column={[1, 1, 2]} gap={6}>
            <P>
            Jeff Wilcox, ingénieur et directeur de l'architecture système des Mac à Cupertino,
            quitte la société Apple après huit ans de bons et loyaux services.
            Il retourne chez Intel, chez qui il était précédemment employé.
            <P>
            Habitué des grandes sociétés, Jeff Wilcox travaillait depuis huit ans chez Apple.
            Et ce n'était pas n'importe qui, puisque c'est lui qui a supervisé la transition vers Apple Silicon,
            la marque à la pomme ne souhaitant plus utiliser de processeurs Intel dans ses Mac.
            Il a donc œuvré pour la mise en place des puces M1, M1 Pro et M1 Max dans les ordinateurs Apple.
            Il avait également développé le coprocesseur T2.
            </P>
            <P>
            L'ingénieur a donc annoncé son départ de chez Apple sur sa page LinkedIn.
            Il a parallèlement dévoilé qu'il avait accepté un poste de directeur technique
            de l'ingénierie et du design pour l'architecture SoC chez Intel.
            Wilcox est un habitué des bureaux Intel puisqu'il a déjà officié pour la société entre 2010 et 2013, mais aussi entre 1997 et 2007. 
            </P>
            </P>
          </SimpleGrid>
        </Section>

        <Heading as="h3" fontSize={20} mb={8}>
          <Link href="https://www.frandroid.com/marques/apple/1255483_apple-m1-ultra-annoncee-tous-les-chiffres-de-la-nouvelle-puce-surpuissante" target="_blank">
          Apple M1 Ultra annoncée : tous les chiffres de la nouvelle puce « surpuissante » qui combine deux Apple M1 Max
          </Link>
          <br />
          <Badge>08 mars 2022</Badge>
          <Badge ml={60}>frandroid.com</Badge>
        </Heading>        
        <Section>
          <SimpleGrid column={[1, 1, 2]} gap={6}>
            <P>
            Les puces qui équipent le nouveau MacBook Pro sont dotées d'un CPU 10 cœurs, un GPU 32 cœurs, 64 Go de mémoire unifiée,
            une carte accélératrice ProRes et la meilleure efficacité énergétique du marché.
            </P>
            <WorkImage src="images/Allpuce.png" />
            <WorkImage src="images/M1_ULTRA.png" />
            On voit les deux puces Apple M1 Max avec un interposeur, ainsi que la mémoire unifiée tout autour
            <P>
            Comme pour les M1 Pro et M1 Max, Apple nous a noyés sous les chiffres : 
            le M1 Max utilise une interconnexion multipuce Die2Die à 2,5 To/s, 
            avec 128 Go de mémoire unifiée, 114 milliards de transistors… On retrouve jusqu'à 20 cœurs CPU, 
            64 cœurs GPU et un moteur neuronal de 32 cœurs.
            <P>
            Pour construire la puce M1 Ultra, les puces de deux M1 Max ont été connectées à l'aide d'UltraFusion, 
            l'architecture de conditionnement personnalisée d'Apple. Apple n'a pas connecté les deux puces via la carte mère, 
            mais ils ont utilisé un interposeur en silicium qui relie les puces par plus de 10 000 signaux, 
            offrant ainsi une bande passante interprocesseurs massive de 2,5 To/s à faible latence, 
            soit plus de quatre fois la bande passante de la principale technologie d'interconnexion multipuces.
            </P>
            <P>
            Cela permet à la M1 Ultra de se comporter et d'être reconnue par les logiciels comme une seule puce, 
            de sorte que les développeurs n'ont pas besoin de réécrire le code pour tirer parti de ses performances.
            </P>
            La marque américaine évoque une puissance 8 fois plus importante que le M1 ! Cette puce conçue pour les machines de bureau possède même un double moteur de décodage vidéo.
            </P>  
          </SimpleGrid>
        </Section>

        <Section delay={0.3}>
          <SimpleGrid columns={[1, 2, 2]} gap={6}>
            <GridItem thumbnail={thumbCPUperf1} />
            <GridItem thumbnail={thumbCPUperf2} />
            <GridItem thumbnail={thumbCPUperf3} />
            <GridItem thumbnail={thumbGPUperf1} />
          </SimpleGrid>
          <WorkImage src="images/GPUperfvspower2.png" />
        </Section>


      </Container>
    </Layout>
  )
}

export default Veilletechnologique
export { getServerSideProps } from '../components/chakra' 