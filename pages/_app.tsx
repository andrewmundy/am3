import type { AppProps } from 'next/app';
import '../public/variables.scss';

export default function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
