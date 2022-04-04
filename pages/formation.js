import { Container, Heading } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section' 
import P from '../components/paragraph'

const Formation = () => {
  return(
    <Layout>
      <Container>
        <Heading as="h3" fontSize={20} mn={4}>
          Qu'est ce que le BTS SIO ? 
        </Heading>
        <Section>
          <P>
            Le bts services informatiques aux organisations 
          </P>
        </Section>
      </Container>
    </Layout>
  )     
  
}



export default Formation
export { getServerSideProps } from '../components/chakra'