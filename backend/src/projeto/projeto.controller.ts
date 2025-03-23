import { Controller, Get, Param } from '@nestjs/common';
import { Projeto } from '@core';
import { ProjetoProvider } from './projeto.provider';

@Controller('projetos')
export class ProjetoController {
    constructor(private readonly repo: ProjetoProvider) {}
    
    @Get()
	async obterTodos(): Promise<Projeto[]> {
		return this.repo.obterTodos()
	}

    @Get('destaques')
    async obterDestaques(): Promise<Projeto[]> {
        return this.repo.obterDestaques();
    }

	@Get(":id")
	async obterPorId(@Param("id") id: string): Promise<Projeto | null> {
		return this.repo.obterPorId(Number(id))
	}
}
