import "../styles/globals.css";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { SessionProvider } from "next-auth/react";

import Layout from "../templates/Layout";

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

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  console.log(session);
  return (
    <SessionProvider session={session}>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={theme}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ThemeProvider>
      </QueryClientProvider>
    </SessionProvider>
  );
}
