import { Head, Html, Main, NextScript } from 'next/document';

export default function Document() {
	return (
		<Html lang="en">
			<Head />
			<body className="antialiased bg-zinc-950 text-zinc-50">
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}
