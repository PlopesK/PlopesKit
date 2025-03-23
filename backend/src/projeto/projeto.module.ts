import { Module } from '@nestjs/common';
import { ProjetoProvider } from './projeto.provider';
import { ProjetoController } from './projeto.controller';
import { DbModule } from 'src/db/db.module';

@Module({
  providers: [ProjetoProvider],
  controllers: [ProjetoController],
  imports: [DbModule]
})
export class ProjetoModule {}
