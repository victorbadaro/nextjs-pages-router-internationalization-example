import type { AppProps } from 'next/app';
import Head from 'next/head';

import '@/styles/globals.css';

export default function App({ Component, pageProps }: AppProps) {
	return (
		<>
			<Head>
				<title>Next.js Pages Router Internationalization Example</title>
			</Head>

			<Component {...pageProps} />
		</>
	);
}
