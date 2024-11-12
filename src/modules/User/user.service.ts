import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import { CreateUserDto } from './user.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>
  ) {}

  findAll(): Promise<User[]> {
    return this.usersRepository.find();
  }

  createUser(data: CreateUserDto): Promise<User> {
    const newUser = this.usersRepository.create(data);
    return this.usersRepository.save(newUser);
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
