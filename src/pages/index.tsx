import en from '@/locales/en';
import ptBR from '@/locales/pt-BR';
import { useRouter } from 'next/router';

export default function Home() {
	const router = useRouter();
	const t = router.locale === 'en' ? en : ptBR;

	function handleChangeLanguage() {
		const locale = router.locale === 'en' ? 'pt-BR' : 'en';

		router.push('/', '/', { locale });
	}

	return (
		<div className="flex items-center justify-center min-h-screen">
			<div className="flex flex-col items-center gap-y-2">
				<h1>{t.text}</h1>
				<button
					type="button"
					onClick={handleChangeLanguage}
					className="px-8 py-2 rounded-lg text-sm font-semibold bg-lime-400 text-lime-950 hover:bg-lime-500 transition-colors"
				>
					{t.buttonText}
				</button>
			</div>
		</div>
	);
}
