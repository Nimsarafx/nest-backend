import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  async findOne(name: string): Promise<User | undefined> {
    const user = await this.usersRepository.findOne({ where: { name } });
    return user ?? undefined;
  }

  async create(name: string, password: string): Promise<User> {
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = this.usersRepository.create({
      name,
      password: hashedPassword,
    });
    return this.usersRepository.save(user);
  }
}