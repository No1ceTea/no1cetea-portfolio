import Head from 'next/head'
import dynamic from 'next/dynamic'
import Navbar from '../navbar'
import { Box, Container } from '@chakra-ui/react'
import Footer from '../footer'
import MydeskLoader from '../voxel-mydesk-loader'

const LazyMydesk = dynamic(() => import('../voxel-mydesk'), {
  ssr: true,
  loading: () => <MydeskLoader />
})

const Main = ({ children, router }) => {
  return (
    <Box as="main" pb={8}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Thai Portfolio" />
        <meta name="author" content="Jacquot Thai" />
        <meta name="author" content="No1cetea" />
        <meta property="og:site_name" content="Jacquot Thai Portfolio" />
        <meta property="og:type" content="website" />
        <link rel="icon" type="image/png" href="/images/Hamsterthai.jpg" />
        <title>Home - Jacquot Thai</title>

      </Head>

      <Navbar path={router.asPath} />

      <Container maxW="container.md" pt={14}>
        <LazyMydesk />
        {children}
        <Footer />
      </Container>
    </Box>
  )
}

export default Main 
