import { ChakraProvider } from '@chakra-ui/react';
import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import { AppTemplate } from '~/components';
import theme from '~/styles';
import { AuthProvider, ToastProvider } from '~/hooks';

function MyApp({ Component, pageProps }: AppProps) {
  const { asPath } = useRouter();
  const isIndexPage = asPath === '/';

  return (
    <ToastProvider>
      <AuthProvider>
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
      </AuthProvider>
    </ToastProvider>
  );
}

export default MyApp;
