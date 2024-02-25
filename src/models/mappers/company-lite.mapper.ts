import { CompanyLite } from '../company-lite';
import { CompanyLiteDto } from '../dtos/company-lite.dto';

import { addressMapper } from './address.mapper';
import { IMapperFromDto } from './mapper';

/** Company lite mapper. */
class CompanyLiteMapper implements IMapperFromDto<CompanyLiteDto, CompanyLite> {

  /** @inheritdoc */
  public fromDto(data: CompanyLiteDto): CompanyLite {
    return new CompanyLite({
      address: addressMapper.fromDto(data.address),
      id: data.id,
      name: data.name,
    });
  }
}

/** Company lite mapper instance. */
export const companyLiteMapper = new CompanyLiteMapper();
