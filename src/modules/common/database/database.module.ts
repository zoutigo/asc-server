import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { dataSourceOptions } from 'db/data-source';
import { User } from 'src/modules/user/entities/user.entity';

@Module({
  imports: [
    // TypeOrmModule.forRootAsync({
    //   useFactory: (configService: ConfigService) => ({
    //     type: 'mysql',
    //     url: configService.get<string>('MYSQL_URL'),
    //     // synchronize: true,
    //     entities: ['dist/**/*.entity.js'],
    //   }),
    //   inject: [ConfigService],
    // }),
    TypeOrmModule.forRoot(dataSourceOptions),
  ],
})
export class DatabaseModule {}
