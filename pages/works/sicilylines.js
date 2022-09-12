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
        Project divided into 3 missions, SicilyLines missions highlight our skills in Symfony and C#.
        <P>
          SicilyLines is a boat booking platform that allows the customer 
          to book their boat online and in advance according to the availability recorded on the database.
        </P>
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Mission 1</Meta>
        </ListItem>
        <ListItem>
          <Meta>Objective</Meta>
          <P>
            The first mission consists in analyzing the need, developing the various diagrams and finally, 
            developing a graphical interface in C# which will allow the administrator to be able to make modifications to the entire file, 
            delete links, insert new links and modify the bond duration.
          </P>
        </ListItem>
        <ListItem>
          <Meta>Source</Meta>
          <Link href="https://github.com/No1ceTea/SicilyLines-Mission1">
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
          <Meta>Objective</Meta>
          <P>
            The second mission consists in developing a new dynamic website and includes the following functionalities: 
            The search for crossings, the creation of a customer account, online reservations and the contact service.
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

      <WorkImage src="/images/SicilyLinesWeb1.png" />
      <WorkImage src="/images/SicilyLinesWeb2.png" />
      <WorkImage src="/images/SicilyLinesWeb3.png" />
      <WorkImage src="/images/SicilyLinesWeb4.png" />

      <List>
        <ListItem>
          <Meta>Mission 3</Meta>
        </ListItem>
        <ListItem>
          <Meta>Objective</Meta>
          <P>      
            The third mision consists of developing a graphical interface in C# so that the administrator of SicilyLines can easily manage the data used. 
            The administrator can display the tables links in full, can delete, insert and modify the links.
            The administrator can also display the tariffs and modify a tariff for a link.
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
