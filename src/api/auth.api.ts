import { Axios, isAxiosError } from "axios";
import { TokenDto } from "../models/dtos/token.dto";
import { Login } from "../models/login";
import { loginMapper } from "../models/mappers/login.mapper";
import { Token } from "../models/token";
import { isValidationErrorDto } from "../models/dtos/validation-error.dto";
import { appErrorMapper } from "../models/mappers/app-error.mapper";
import { tokenMapper } from "../models/mappers/token.mapper";
import { validationErrorMapper } from "../models/mappers/validation-error.mapper";

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
        if (isValidationErrorDto(err.response?.data)) {
          throw validationErrorMapper.fromDto(err.response.data);
        }

        throw appErrorMapper.fromDto(err.response?.data);
      }
      throw err
    }
  }
}
