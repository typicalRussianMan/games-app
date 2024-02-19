import { Axios, isAxiosError } from 'axios';

import { Login } from '../models/login';
import { Token } from '../models/token';
import { TokenDto } from '../models/dtos/token.dto';
import { loginMapper } from '../models/mappers/login.mapper';
import { tokenMapper } from '../models/mappers/token.mapper';
import { isValidationErrorDto } from '../models/dtos/validation-error.dto';
import { validationErrorMapper } from '../models/mappers/validation-error.mapper';
import { appErrorMapper } from '../models/mappers/app-error.mapper';
import { Registration } from '../models/registration';
import { registrationMapper } from '../models/mappers/registration.mapper';
import { User } from '../models/user';
import { UserDto } from '../models/dtos/user.dto';
import { userMapper } from '../models/mappers/user.mapper';

/** Auth API. */
export class AuthApi {

  public constructor(
    private readonly http: Axios,
  ) {}

  /**
   * Login user.
   * @param data Login data.
   */
  public async login(data: Login): Promise<Token> {
    try {
      const token = await this.http.post<TokenDto>('/auth/login', loginMapper.toDto(data));
      return tokenMapper.fromDto(token.data);
    } catch (err: unknown) {
      if (isAxiosError(err)) {
        throw appErrorMapper.fromDto(err.response?.data);
      }
      throw err;
    }
  }

  /**
   * Registers a new user.
   * @param data Registration data.
   */
  public async register(data: Registration): Promise<Token> {
    try {
      const token = await this.http.post<TokenDto>('/auth/register', registrationMapper.toDto(data));
      return tokenMapper.fromDto(token.data);
    } catch (err: unknown) {
      if (isAxiosError(err)) {
        if (isValidationErrorDto(err.response?.data)) {
          throw validationErrorMapper.fromDto(err.response.data, registrationMapper);
        }

        throw appErrorMapper.fromDto(err.response?.data);
      }
      throw err;
    }
  }

  /** Gets current user. */
  public async getCurrentUser(): Promise<User> {
    try {
      const user = await this.http.get<UserDto>('/user');
      return userMapper.fromDto(user.data);
    } catch (err) {
      if (isAxiosError(err)) {
        throw appErrorMapper.fromDto(err.response?.data);
      }
      throw err;
    }
  }
}
