import Image from "next/image"

export default function MiniCV() {
	return (
		<div className="flex-1 flex flex-col-reverse gap-6 md:flex-row lg:flex-col-reverse xl:flex-row items-center md:items-start lg:items-center xl:items-start bg-black border border-zinc-800 rounded-2xl px-6 pt-6 pb-6">
			<div className="relative min-w-72 h-64 xl:self-end">
				<Image
					className="rounded-4xl"
					src="https://avatars.githubusercontent.com/u/101651798?v=4"
					alt="Foto de perfil"
					fill
				/>
			</div>
			<div className="flex flex-col gap-5 self-center py-6 items-center  md:items-start lg:items-center xl:items-start">
				<div className="flex flex-col items-center md:items-start lg:items-center xl:items-start">
					<span
						className="
                            bg-gradient-to-r from-blue-500 via-blue-300 to-white
                            text-transparent bg-clip-text text-2xl font-bold
                        "
					>
						Gabriel Primo
					</span>
					<span></span>
				</div>
				<p className="text-sm text-center md:text-left lg:text-center xl:text-left">
					Mestre em Informática Aplicada
				</p>
			</div>
		</div>
	)
}
