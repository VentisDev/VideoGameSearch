import { Grid, ChakraProvider, GridItem, Show } from "@chakra-ui/react";

function App() {
  return (
    <ChakraProvider>
      <Grid
        templateAreas={{
          base: ` "nav" "main" `,
          lg: ` "nav nav" "aside main" `,
        }}
      >
        <GridItem area="nav" bg="coral">
          Nav
        </GridItem>
        <Show above="lg">
          {" "}
          <GridItem area="aside" bg="gray">
            Aside
          </GridItem>
        </Show>
        <GridItem area="main" bg="pink">
          Main
        </GridItem>
      </Grid>
    </ChakraProvider>
  );
}

export default App;
