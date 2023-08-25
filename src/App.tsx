import { Grid, ChakraProvider, GridItem, Show } from "@chakra-ui/react";
import Navbar from "./components/Navbar";

function App() {
  return (
    <ChakraProvider>
      <Grid
        templateAreas={{
          base: ` "nav" "main" `,
          lg: ` "nav nav" "aside main" `,
        }}
      >
        <GridItem area="nav">
          <Navbar />
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
