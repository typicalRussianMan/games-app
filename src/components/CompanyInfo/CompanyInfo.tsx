import { FC, memo } from 'react';
import { Typography } from '@mui/material';

import { CompanyLite } from '../../models/company-lite';

import './style.css';

type Props = {

  /** Company. */
  readonly company: CompanyLite;
};

const CompanyInfoComponent: FC<Props> = ({ company }) => (
  <div className="company-info">
    <img className='company-logo' src={company.logoUrl} width={24} height={24} />
    <Typography
      className='company-name'
      variant='body1'
      component='span'
    >
      { company.name }
    </Typography>
  </div>
);

/** Company info. */
export const CompanyInfo = memo(CompanyInfoComponent);
