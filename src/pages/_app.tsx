import { ChakraProvider } from "@chakra-ui/react";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import { ToastContainer } from "react-toastify";
import { AppTemplate } from "../components";
import { AuthProvider } from "../contexts";
import theme from "../styles";
import "react-toastify/dist/ReactToastify.css";

function MyApp({ Component, pageProps }: AppProps) {
  const { asPath } = useRouter();
  const isIndexPage = asPath === "/";

  return (
    <AuthProvider>
      <ChakraProvider theme={theme}>
        <ToastContainer position="bottom-left" closeOnClick={false} />
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
    </AuthProvider>
  );
}

export default MyApp;
