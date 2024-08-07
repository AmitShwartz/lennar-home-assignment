import { ChakraProvider } from "@chakra-ui/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "./App.css";
import Main from "./layouts/Main";
import HomePage from "./pages/HomePage";

const queryClient = new QueryClient();

function App() {
  return (
    <ChakraProvider>
      <QueryClientProvider client={queryClient}>
        <Main>
          <HomePage />
        </Main>
      </QueryClientProvider>
    </ChakraProvider>
  );
}

export default App;
