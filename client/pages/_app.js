import "../styles/globals.css";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Layout from "../templates/Layout";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";

const queryClient = new QueryClient();

const theme = createTheme({
  palette: {
    primary: {
      main: "#DE89A1",
    },
    secondary: {
      main: "#3b82f6",
    },
  },
});

export default function App({ Component, pageProps }) {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </QueryClientProvider>
  );
}
