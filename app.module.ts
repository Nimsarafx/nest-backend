import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { User } from './users/user.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres', // Update with your PostgreSQL username
      password: 'password', // Update with your PostgreSQL password
      database: 'nest-back',
      entities: [User],
      synchronize: true, // Set to false in production
    }),
    AuthModule,
    UsersModule,
  ],
})
export class AppModule {}