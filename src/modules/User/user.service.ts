import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import * as bcrypt from 'bcryptjs';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>
  ) {}

  async findByEmail(email: string): Promise<User | null> {
    return this.usersRepository.findOne({ where: { email } });
  }

  async createUser(email: string, password: string): Promise<User> {
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = this.usersRepository.create({ email, password: hashedPassword });
    return this.usersRepository.save(user);
  }

  async updateRefreshToken(userId: string, refreshToken: string) {
    await this.usersRepository.update(userId, { refreshToken });
  }

  findAll(): Promise<User[]> {
    return this.usersRepository.find();
  }

  async deleteUser(id: string): Promise<User> {
    const userToDelete = await this.usersRepository.findOne({ where: { id } });

    if (!userToDelete) {
      throw new Error(`User with id ${id} not found`);
    }

    await this.usersRepository.delete(id);

    return userToDelete;
  }
}
