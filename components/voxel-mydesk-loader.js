import { forwardRef  } from 'react'
import { Box, Spinner } from '@chakra-ui/react'

export const MydeskSpinner = () => (
    <Spinner 
        size="x1"
        position="absolute"
        left="50%"
        top="50%"
        m1="calc(0px - var(--spinner-size) / 2"
        mt="calc(0px - var(--spinner-size))"
        />
    )

    export const MydeskContainer = forwardRef(({ children }, ref) => (
        <Box
            ref={ref}
            className="mydesk"
            m="auto"
            mt={['-20px', '-60px', '-120px']}
            mb={['-40px', '-140px', '-200px']}
            w={[280, 480, 640]}
            h={[280, 480, 640]}
            position="relative"
        >
            { children }
        </Box>
    )) 

    const Loader = () => {
        return (
            <MydeskContainer>
                <MydeskSpinner />
            </MydeskContainer>
        )
    }

export default Loader