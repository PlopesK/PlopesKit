-- CreateTable
CREATE TABLE "projetos" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "descricao" TEXT NOT NULL,
    "tipo" TEXT NOT NULL,
    "imagens" TEXT[],
    "nivel" INTEGER NOT NULL,
    "repositorio" TEXT NOT NULL,
    "destaque" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "projetos_pkey" PRIMARY KEY ("id")
);
