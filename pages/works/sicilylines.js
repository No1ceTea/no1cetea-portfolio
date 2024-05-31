import { Container, Badge, List, Link, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, Meta, WorkImage } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="SicilyLines">
    <Container>
      <Title>
        SicilyLines <Badge>2022</Badge>
      </Title>
      <P>
        Projet divisé en 3 missions, les missions SicilyLines mettent en avant
        nos compétences en Symfony et C#.
        <P>
          SicilyLines est une plateforme de réservation de bateaux qui permet au
          client de réserver leur bateau en ligne et à l&apos;avance en fonction
          des disponibilités enregistrées sur la base de données.
        </P>
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Mission 1</Meta>
        </ListItem>
        <ListItem>
          <Meta>Objectif</Meta>
          <P>
            La première mission consiste à analyser le besoin, élaborer les
            différents schémas et enfin, développer une interface graphique en
            C# qui permettra à l&apos;administrateur de pouvoir apporter des
            modifications à l&apos;ensemble du fichier, supprimer des liens,
            insérer de nouveaux liens et modifier la durée du lien.
          </P>
        </ListItem>
        <ListItem>
          <Meta>Source</Meta>
          <Link href="https://github.com/No1ceTea/SicilyLines-Mission1">
            SicilyLines-Mission1
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Excalidraw, Windesign, C#</span>
        </ListItem>
      </List>

      <WorkImage src="/images/Diagramme_de_navigation.png" />

      <List ml={4} my={4}>
        <ListItem>
          <Meta>Mission 2</Meta>
        </ListItem>
        <ListItem>
          <Meta>Objectif</Meta>
          <P>
            La seconde mission consiste à développer un nouveau site web
            dynamique et comprend les fonctionnalités suivantes : La recherche
            de traversées, la création d&apos;un compte client, les réservations
            en ligne et le service contact.
          </P>
        </ListItem>
        <ListItem>
          <Meta>Source</Meta>
          <Link href="https://github.com/No1ceTea/SicilyLines-Mission2">
            SicilyLines-Mission2 <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Symfony4, MySQL</span>
        </ListItem>
      </List>

      <WorkImage src="/images/works/SicilyLinesWeb1.png" />
      <WorkImage src="/images/works/SicilyLinesWeb2.png" />
      <WorkImage src="/images/works/SicilyLinesWeb3.png" />
      <WorkImage src="/images/works/SicilyLinesWeb4.png" />

      <List>
        <ListItem>
          <Meta>Mission 3</Meta>
        </ListItem>
        <ListItem>
          <Meta>Objective</Meta>
          <P>
            La troisième mission consiste à développer une interface graphique
            en C# afin que l&apos;administrateur de SicilyLines puisse gérer
            facilement les données utilisées. L&apos;administrateur peut
            afficher les liens des tables en entier, peut supprimer, insérer et
            modifier les liens. L&apos;administrateur peut également afficher
            les tarifs et modifier un tarif pour une liaison.
          </P>
        </ListItem>
        <ListItem>
          <Meta>Source</Meta>
          <Link href="https://github.com/No1ceTea/SicilyLines-Mission3">
            SicilyLines-Mission3 <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>C#</span>
        </ListItem>
      </List>
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
