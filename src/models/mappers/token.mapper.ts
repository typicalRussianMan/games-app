import { TokenDto } from "../dtos/token.dto";
import { Token } from "../token";
import { IMapperFromDto } from "./mapper";

class TokenMapper implements IMapperFromDto<TokenDto, Token> {

  /** @inheritdoc */
  public fromDto(data: TokenDto): Token {
    return new Token({
      token: data.token,
    })
  }
}

export const tokenMapper = new TokenMapper();
