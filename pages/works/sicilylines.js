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
        Projet divisé en 3 missions, Les missions SicilyLines mettent en avant nos compétences en Symfony et C#.
        <P>
          SicilyLines est une plateforme de réservation de bateau qui permet au client de réverver en ligne et en avance
          leur beteau selon les disponibilités enregistrés sur la base de données.
        </P>
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Mission 1</Meta>
        </ListItem>
        <ListItem>
          <Meta>Objectif</Meta>
          <P>
          La première mission consiste à analyser le besoin, élaborer les différents diagrammes et enfin,
          développer une interface graphique en C# qui permettra à l'administrateur de pouvoir faire des modifications
          sur le fichier en entier, supprimer des liaisons, insérer des nouvelles liaisons et modifier la durée des liaisons. 
          </P>
        </ListItem>
        <ListItem>
          <Meta>Application</Meta>
          <Link href="#">
            SicilyLines-Mission1<ExternalLinkIcon mx="2px" />
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
            La seconde mission consite à développer un nouveau site web dynamique et comporte les fonctionnalités suivantes :
            La recherche de traversées, la création d'un compte client, les réservations en ligne et le service de 
            contact.
          </P>
        </ListItem>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="#">
            SicilyLines-Mission2 <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Symfony4, MySQL</span>
        </ListItem>
      </List>

      <WorkImage src="/images/Accueil_Réservation.png" />

      <List>
        <ListItem>
          <Meta>Mission 3</Meta>
        </ListItem>
        <ListItem>
          <Meta>Objectif</Meta>
          <P>
            La mission 3 consiste à développer une interface graphique en C# pour que l'administrateur
            de SicilyLines puissent gérer facilement les données utilisées. L'administrateur peut afficher 
            les tables liaisons en entier, peut supprimer, insérer et modifier les liaisons; l'administrateur
            peut aussi afficher les tarifs et modifier un tarif d'une liaison.
          </P>
        </ListItem>
        <ListItem>
          <Meta>Application</Meta>
          <Link href="#">
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