import { MigrationInterface, QueryRunner } from "typeorm";

export class createUser1665653496826 implements MigrationInterface {
    name = 'createUser1665653496826'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`users\` (\`id\` varchar(36) NOT NULL, \`email\` varchar(255) NOT NULL, \`displayName\` varchar(255) NOT NULL, \`lastname\` varchar(255) NULL, \`firstname\` varchar(255) NULL, \`motivation\` varchar(255) NULL, \`isValidated\` tinyint NOT NULL DEFAULT 0, \`createdAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updatedAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`deletedAt\` datetime(6) NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE \`users\``);
    }

}
