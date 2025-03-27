import { Projeto, Tipo } from "@core"
import { httpGet } from "./api"

const projetoFilters = {
  mobile: (projeto: Projeto) => projeto.tipo === Tipo.MOBILE,
  web: (projeto: Projeto) => projeto.tipo === Tipo.WEB,
  jogos: (projeto: Projeto) => projeto.tipo === Tipo.JOGO,
  destaques: (projeto: Projeto) => projeto.destaque,
}

export async function obterProjetos() {
  const projetos: Projeto[] = await httpGet("projetos")

  return {
    todos: projetos,
    ...Object.fromEntries(
      Object.entries(projetoFilters).map(([key, filter]) => [
        key,
        projetos.filter(filter),
      ])
    ),
  }
}

export async function obterProjeto(id: string): Promise<Projeto | null> {
  return await httpGet(`projetos/${id}`)
}
