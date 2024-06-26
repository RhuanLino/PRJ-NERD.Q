-- CreateTable
CREATE TABLE `tb_cadastro` (
    `id_conta` INTEGER NOT NULL,
    `email` VARCHAR(255) NULL,
    `nome` VARCHAR(20) NULL,
    `sobrenome` VARCHAR(50) NULL,
    `dt_nascimento` DATE NULL,
    `senha` VARCHAR(25) NULL,
    `id_cargo_fk` INTEGER NULL,

    UNIQUE INDEX `email`(`email`),
    INDEX `id_cargo_fk`(`id_cargo_fk`),
    PRIMARY KEY (`id_conta`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `tb_cargo` (
    `id_cargo` INTEGER NOT NULL,
    `professor` INTEGER NULL,
    `aluno` INTEGER NULL,

    PRIMARY KEY (`id_cargo`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `tb_cadastro` ADD CONSTRAINT `tb_cadastro_ibfk_1` FOREIGN KEY (`id_cargo_fk`) REFERENCES `tb_cargo`(`id_cargo`) ON DELETE NO ACTION ON UPDATE NO ACTION;

