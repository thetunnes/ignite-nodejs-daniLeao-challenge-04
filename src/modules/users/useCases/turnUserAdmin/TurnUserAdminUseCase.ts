import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class TurnUserAdminUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User {
    // Complete aqui
    const findUser = this.usersRepository.findById(user_id);

    if (!findUser) {
      throw new Error("User not found");
    }

    findUser.admin = !findUser.admin;

    return findUser;
  }
}

export { TurnUserAdminUseCase };
