import { Address } from '../address';
import { AddressDto } from '../dtos/address.dto';

import { IMapperFromDto } from './mapper';

/** Address mapper. */
class AddressMapper implements IMapperFromDto<AddressDto, Address> {

  /** @inheritdoc */
  public fromDto(data: AddressDto): Address {
    return new Address({
      lat: data.lat,
      lng: data.lng,
      title: data.title,
    });
  }
}

/** Address mapper instance. */
export const addressMapper = new AddressMapper();
