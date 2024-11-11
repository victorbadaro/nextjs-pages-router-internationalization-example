export default function Home() {
	return (
		<div className="flex items-center justify-center min-h-screen">
			<div className="flex flex-col items-center gap-y-2">
				<h1>Hello, World!</h1>
				<button type="button" className="px-8 py-2 rounded-lg text-sm font-semibold bg-lime-400 text-lime-950 hover:bg-lime-500 transition-colors">
					Switch between EN/PT-BR
				</button>
			</div>
		</div>
	);
}
