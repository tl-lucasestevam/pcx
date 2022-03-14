import { ChakraProvider } from "@chakra-ui/react";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import { AppTemplate } from "../components";
import theme from "../styles";

function MyApp({ Component, pageProps }: AppProps) {
  const { asPath } = useRouter();
  const isIndexPage = asPath === "/";

  return (
    <ChakraProvider theme={theme}>
      {isIndexPage ? (
        <>
          <Component {...pageProps} />
        </>
      ) : (
        <AppTemplate>
          <Component {...pageProps} />
        </AppTemplate>
      )}
    </ChakraProvider>
  );
}

export default MyApp;
