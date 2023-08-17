import {
  ChakraProvider,
  Button,
  CircularProgress,
  CircularProgressLabel,
} from "@chakra-ui/react";
import { useState } from "react";

function App() {
  const [isLoading, setLoading] = useState(false);

  return (
    <ChakraProvider>
      <Button onClick={() => setLoading(!isLoading)}>Click for Loader</Button>
      <CircularProgress
        isIndeterminate
        color="green.300"
        value={80}
        size="60"
        thickness="8px"
      >
        <CircularProgressLabel fontSize="30px" color="orange.600">
          Loading...
        </CircularProgressLabel>
      </CircularProgress>
    </ChakraProvider>
  );
}

export default App;
