import { Container, Heading, SimpleGrid, Box, useColorModeValue, Button, Popover, PopoverContent, PopoverTrigger, PopoverArrow, PopoverCloseButton, PopoverBody } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { GridItem } from '../components/grid-item'
import P from '../components/paragraph'
import { WorkImage } from '../components/work'

import thumbClubic from '../public/images/clubic.png'
import thumbBottravis from '../public/images/BotsTravis.jpg'
import thumbPS5 from '../public/images/PS5.png'
import thumbRTX3080 from '../public/images/RTX3080.png'
import thumbWrathAIO from '../public/images/wrathAIO.png'
import thumbPanAIO from '../public/images/panAIO.png'
import thumbCybersole from '../public/images/cybersole.png'
import thumbKodai from '../public/images/kodai.png'

const veilleinformationnelle = () => (
  <Layout title="Veille informationnelle">
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
      Pour commencer, qu'est ce qu'une veille informationnelle ?
    </Heading>
    <Section delay={0.3}>     
      <P>
        La veille informationnelle, élément de la veille stratégique, consiste  à surveiller les évolutions techniques,
        les innovations dans un secteur d'activité donnée. Elle comprend aussi la surveillance, la collecte,
        le partage et la diffusion d'information permettant d'anticiper ou de s'informer sur des changements en
        matière de recherche et de développement, tout en passant par les brevets, matériaux utilisés, processus,
        concept, etc...
        <P>
        Cela a pour but de d'évaluer l'impact sur l'environnement et l'organisation.
        </P> 
      </P>
    </Section>

    <Heading as="h3" fontSize={20} mb={8}>
      Outils de ma veille informationnelle
    </Heading>
    <Section delay={0.6}>
      <P>
        J'ai effectué ma veille grâce à un agrégateur de flux RSS nommé feedlyn. En plus des informations fournis
        tous les mois grâce au mot clé que j'ai renseignée, j'ai utilisé en plus de cet agrégateur mes connaissances
        en matière de bot et les logiciels que j'utilise au quotidien.
        <P>
        Feedlyn est très facile à mettre en place, en créant un répertoire où je vais collecter mes données et mes 
        informations, je renseigne des mots clés et Feedlyn collectera et les stockera dans le repertoire en question.                  Je peux aussi suivre grâce à Feedlyn des fils Twitter et des Newsletters.
        </P>
        <P>
          Pour mes connaissances, je vais vous présenter au préalable les outils que j'utilise au quotidien,
          et interviewer un développeur qui met en place ses outils.
        </P>
      </P>            
    </Section>

    <Heading as="h3" fontSize={20} mb={8}>
      Sujet de ma veille informationnelle
    </Heading>
    <Section delay={0.9}>
      <P>
        Pour ma veille informationnelle, j'ai choisi de vous présenter les bots sneakers. Ces outils permettent d'automatiser 
        et d'agrandir ces chances d'avoir des paires qui sont recherchés et/ou en quantité limité.
        Ce marché s'agrandit de plus en plus et les anti-bot se développe de plus pour contrer ses outils.
        Nous allons voir comment et avec quoi ils sont développés.
      </P>
    </Section>

    <Heading as="h3" fontSize={20} mb={8}>
      Qu'est ce qu'un bot ?
    </Heading>
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
      </P>
      <P>
      C'est là qu'interviennent les bots. C'est le meilleur moyen de mettre les chances de son côté et d'être choisi 
      dans le tirage au sort pour obtenir les dernières sorties de sneakers limités pour ensuite les ajouter à sa 
      collection de chaussures ou simplement pour les revendre à un prix plus élevé pour se faire des bénéfices.
      </P>
      <WorkImage src="images/FlareAIO.png" />
      <P>
      Les langages les plus utilisés pour créer ces bots ou script sont le Python, C++, C# ou encore Ruby et Java/Javascript.
      Le bot est programé de façon à automatisé et à être le plus rapide pour acheter la paire.
      il va donc automatisé votre requête qui se modifie selon le produit que vous chercher, passera sous proxy, remplira les formulaires
      de paiement automatiquement et finalisera votre achat en seulement quelques secondes.
      <WorkImage src="images/LinearAIO.jpg" />
      </P>
      <P>
        Les bots sont souvent équipés des dernières technologies pour devancer ces concurrents,
        tel que des bypass de queue, d'un Captcha Harverster qui permet de réaliser les captchas en quelques secondes,
        et d'un support multi-taches.
      </P>
      </P>
    </Section>

    <Heading as="h3" fontSize={20} mb={8}>
      Les anti-bots et proxy
    </Heading>
    <Section>
      <P>
        Comme cette pratique est assez controverser, il est nécessaire pour les vendeurs de sécuriser leurs sites
        pour que les clients ont la même chance d'avoir leurs chaussures. Alors les anti-bots et système de ban-ip
        sont mise en place pour contrer les scripts et les bots.
      <P>
        Seulement, les développeurs ont toujours plus d'un tour dans leur sac et on réussit à backdoor les anti-bot.
        Pour comprendre comment cela fonctionne, nous allons voir comment fonctionne un anti-bot et comment le contourné.
      </P>
      <P>
        Les anti-bots utilise jQuery avec une correspondance de modèle tel que <Popover>
          <PopoverTrigger>
            <Button colorScheme='teal' variant='link'> XPath </Button>
          </PopoverTrigger>
          <PopoverContent>
            <PopoverArrow />
            <PopoverCloseButton />
            <PopoverBody>
              <br />
              XPath est un langage de requête pour localiser une portion d'un document XML. 
              Initialement créé pour fournir une syntaxe et une sémantique aux fonctions communes à XPointer et XSL, 
              XPath a rapidement été adopté par les développeurs comme langage d'interrogation simple d'emploi
            </PopoverBody>
          </PopoverContent>
        </Popover> ou <Popover>
          <PopoverTrigger>
            <Button colorScheme='teal' variant='link'> Regex </Button>
          </PopoverTrigger>
          <PopoverContent>
            <PopoverArrow />
            <PopoverCloseButton />
            <PopoverBody>
            <br />
            En informatique, une expression régulière ou expression rationnelle ou expression normale ou
            motif est une chaîne de caractères qui décrit, selon une syntaxe précise, 
            un ensemble de chaînes de caractères possibles. Les expressions régulières sont également appelées regex.
            </PopoverBody>
          </PopoverContent>
        </Popover> pour détecter et manipuler les champs de formulaire, ce qui rend donc impossible pour un bot de remplir 
        les formulaires comme convenue.
        <P>
          C'est alors que rentre en jeux le reverse enginner ou rétro-ingénieurie. Les développeurs vont étudier l'objet 
          pour en comprendre le fonctionnement interne et donc ça méthode de fabrication. En faisant ça , vous pouvez 
          comprendre l'anti-bot et ainsi développer les nouvelles requêtes en fonction de l'anti-bot.
        </P>
      <P>
        Les proxys sont quand eux aussi essentiels. Il permet au bot d'avoir une "passerelle" par laquelle votre
        ordinateur peut accéder et effectuer des recherches sur Internet de manière anonyme. D'une autre manière,
        votre adresse ip est masqué et permet de ne pas se faire ban des sites en question tel que Nike ou Adidas.
      </P>
      </P>
      </P>
    </Section>

    <Heading as="h3" fontSize={20} mb={8}>
      Article
    </Heading>
      <Section delay={2.1}>
        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <GridItem
            title="Les ingénieurs de Shopify partent en guerre contre... les robots acheteurs de baskets"
            thumbnail={thumbClubic}
            href="https://www.clubic.com/pro/e-commerce/actualite-388857-les-ingenieurs-de-shopify-partent-en-guerre-contre-les-robots-acheteurs-de-baskets.html"
          />
          <GridItem
            title="Plus de 200 paires de Travis Scott x fragment x Air Jordan 1 High achetées par deux bots"
            thumbnail={thumbBottravis}
            href="https://www.lesitedelasneaker.com/2021/07/200-paires-travis-scott-fragment-x-air-jordan-1-high-achetees-bots/"
          />
        </SimpleGrid>
      </Section>

      <Section delay={2.3}>
        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <GridItem
            title="PlayStation 5: de grosses ventes, mais des «scalpers» très organisés"
            thumbnail={thumbPS5}
            href="https://korii.slate.fr/biz/playstation-5-chiffres-ventes-approvisionnement-stocks-scalpers-organises-bots"
          />
          <GridItem
            title="GeForce RTX 3080 : des revendeurs ont utilisé des bots pour les acheter avant tout le monde"
            thumbnail={thumbRTX3080}
            href="https://www.lesnumeriques.com/carte-graphique/geforce-rtx-3080-des-revendeurs-ont-utilise-des-bots-pour-les-acheter-avant-tout-le-monde-n154619.html"
          />
        </SimpleGrid>
      </Section>

      <Heading as="h3" fontSize={20} mb={8}> 
        Bot et Script
      </Heading>
      <Section delay={2.5}>
        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <GridItem
            title="Wrath AIO"
            thumbnail={thumbWrathAIO}
            href="https://wrathbots.co/"
          />
          <GridItem
            title="Pan AIO"
            thumbnail={thumbPanAIO}
            href="https://www.panaio.com/"
          />
        </SimpleGrid>
      </Section>

      <Section delay={2.8}>
        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <GridItem
            title="Cybersole"
            thumbnail={thumbCybersole}
            href="https://cybersole.io/"
          />
          <GridItem
            title="Kodai AIO"
            thumbnail={thumbKodai}
            href="https://kodai.io/"
          />
        </SimpleGrid>
      </Section>

    </Container>
  </Layout>
)

export default veilleinformationnelle
export { getServerSideProps } from '../components/chakra'