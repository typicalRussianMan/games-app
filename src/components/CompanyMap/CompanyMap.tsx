import { FC, memo } from 'react';

import { CompanyLite } from '../../models/company-lite';

import './style.css';

type Props = {

  /** Company. */
  company: CompanyLite;
};

const origin = 'https://yandex.ru/map-widget/v1/?';

const buildMapLink = ({ address: { lat, lng } }: CompanyLite): string =>
  // eslint-disable-next-line prefer-template
  origin +
  'll=' + lng.toString() + '%2C' + lat.toString() +
  '&mode=poi' +
  '&poi%5Bpoint%5D=' + lng.toString() + '2%C' + lat.toString() +
  '&z=16';

const CompanyMapComponent: FC<Props> = ({ company }) => (
  <div className='container'>
    <iframe
      src={buildMapLink(company)}
      height="500"
      className='map'
    ></iframe>
    <div className="marker"></div>
    <div className="overall-plane"></div>
  </div>
);

/** Company map. */
export const CompanyMap = memo(CompanyMapComponent);
