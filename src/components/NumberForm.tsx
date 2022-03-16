import { useState } from "react";
import { Grid, GridItem, Container, Input, Button, Text, useToast, Stack, Spinner } from "@chakra-ui/react";

const NumberForm = () => {
  const toast = useToast();
  const [state, setState] = useState({
    numberToConvert: "",
  });
  const [load, setLoad] = useState(false);
  const [word, setWord] = useState<string | null>(null);

  const handleSubmit = async () => {
    setLoad(true);
    try {
      const response = await fetch('https://hyperiondev-stuart.herokuapp.com/api/v1/numberinwords', {
        method: 'POST',
        headers: {
          'Content-Type': 'Application/json'
        },
        body: JSON.stringify({ number: state.numberToConvert })
      });
      const data = await response.json();
      if (data) {
        setWord(data.result);
      }

    } catch (error) {
      toast({
        title: 'Something went wrong, try again later',
        description: 'An error with the api',
        status: 'error',
        duration: 9000,
        isClosable: true
      });
    }
    setLoad(false);
  };
  return (
    <Container>
      <Text fontSize="5xl" color='tomato'>Number to Word Converter</Text>
      <Grid gap={2} display="flex" flexDirection="row" mt={300}>
        <GridItem w={500} h="300" display="flex" justifyContent="center" alignItems="center">
          <Input name="numberToConvert" value={state.numberToConvert} type="number" onChange={(e) => {
            e.preventDefault();
            setState((prevState) => ({ ...prevState, [e.target.name]: e.target.value}))
          }} placeholder="Enter the Number to Convert" width={300} />
          <Button ml={2} onClick={handleSubmit} colorScheme='blue'>
            {
              load ? (
                <Spinner />
              ): "Submit"
            }  
          </Button>
        </GridItem>
        <GridItem w={800} h="300" display="flex" justifyContent="center" ml={3} alignItems="center">
          <Stack w={300}>
            {
              word && (
                <Text fontSize="3xl" color="green.400">{word}</Text> 
              )
            }
          </Stack>
        </GridItem>
      </Grid>
    </Container>
  );
};

export default NumberForm;
