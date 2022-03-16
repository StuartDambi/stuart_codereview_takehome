import { extendTheme, ChakraProvider } from '@chakra-ui/react'

import NumberForm from './components/NumberForm';

const colors = {
  brand: {
    900: '#1a365d',
    800: '#153e75',
    700: '#2a69ac',
  },
}
const theme = extendTheme({ colors })


const App = () => {
  return (
    <ChakraProvider theme={theme}>
      <NumberForm />  
    </ChakraProvider>
  )
};

export default App;
