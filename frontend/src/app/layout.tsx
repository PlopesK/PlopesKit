import type { Metadata } from "next";
import { Montserrat } from "next/font/google"
import "./globals.css";

export const metadata: Metadata = {
  title: "PlopesKit",
  description: "Portfólio de projetos de desenvolvemento do Gabriel Primo (PlopesK)",
};

const fonte = Montserrat({
	subsets: ["latin"],
})

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="pt-BR">
			<body className={`${fonte.className} antialiased`}>{children}</body>
		</html>
	)
}