/** Mapper from DTO. */
export interface IMapperFromDto<TDto, TModel> {

  /** Maps data from dto to model. */
  fromDto(data: TDto): TModel;
}

/** Mapper to DTO. */
export interface IMapperToDto<TDto, TModel> {

  /** Maps data from dto to model. */
  toDto(data: TModel): TDto;
}

/** Mapper. */
export type IMapper<TDto, TModel> = IMapperFromDto<TDto, TModel> & IMapperToDto<TDto, TModel>;
