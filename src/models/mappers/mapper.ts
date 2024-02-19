/** Mapper from DTO. */
export type IMapperFromDto<TDto, TModel, TName extends string = 'dto'> = {

  /** Maps data from dto to model. */
  [K in `from${Capitalize<TName>}`]: (data: TDto) => TModel;
};

/** Mapper to DTO. */
export type IMapperToDto<TDto, TModel, TName extends string = 'dto'> = {

  /** Maps data from dto to model. */
  [K in `to${Capitalize<TName>}`]: (data: TModel) => TDto;
};

/** Mapper. */
export type IMapper<TDto, TModel, TName extends string = 'dto'> =
  IMapperFromDto<TDto, TModel, TName> &
  IMapperToDto<TDto, TModel, TName>;
