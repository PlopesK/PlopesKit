import Image from "next/image"
import Container from "./Container"
import Link from "next/link"
import Menu from "./Menu"

export default function Cabecalho() {
	return (
		<header className="w-full flex items-center h-16 bg-black/50">
			<Container className="flex-1 flex justify-center sm:justify-between items-center">
				<div className="flex items-center gap-10">
					<Link href="/" className="hidden sm:block">
						<Image 
							className="rounded-4xl"
							src="https://avatars.githubusercontent.com/u/101651798?v=4" 
							alt="Logo" 
							sizes="(max-width: 768px) 50vw, 20vw" 
						 />
					</Link>
					<Menu />
				</div>
				<div className="hidden sm:flex items-center">
					<Link
						href="https://github.com/PlopesK"
						target="_blank"
						className="bg-red-500 rounded-full px-7 py-1 text-sm font-bold 
						hover:cursor-pointer hover:bg-red-800"
					>
						Perfil
					</Link>
				</div>
			</Container>
		</header>
	)
}
