export default function Experiencia() {
	return (
		<div className="flex flex-row sm:flex-row lg:flex-row items-center justify-around gap-6 p-6 bg-black border border-zinc-800 rounded-2xl">
			<Item principal="+5" label="Anos de experiência" />
			<Item principal="+100" label="Projetos feitos" />
		</div>
	)
}

function Item(props: { principal: string; label: string }) {
	return (
		<div className="flex flex-col items-center width">
			<span className="text-red-500 text-3xl font-bold leading-6">{props.principal}</span>
			<span className="text-zinc-400 text-sm text-center">{props.label}</span>
		</div>
	)
}
