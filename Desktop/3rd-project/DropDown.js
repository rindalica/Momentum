import React from 'react';
import { useRecoilState } from 'recoil';
import styled from 'styled-components';
import { selectedCampaignState } from '../../../selectedCampaignState';
import { Select, MenuItem } from '@mui/material';

function DropDown({ value, renderValue, onChange, key, dropDownList }) {
  return (
    <DropDownBox
      sx={{ borderRadius: '12px' }}
      value={value}
      renderValue={renderValue}
      onChange={onChange}
      key={key}
      // value={state}
      // renderValue={state => <span>{state}</span>}
      // onChange={handleChange}
    >
      {dropDownList?.map(campaign => {
        return (
          <MenuItem key={campaign.id} value={campaign.name}>
            {campaign.name}
          </MenuItem>
        );
      })}
    </DropDownBox>
  );
}

const DropDownBox = styled(Select)`
  width: 100%;
  height: 40px;
  /* border-radius: 12px; */
  //border-radius: ${({ theme }) => theme.btnRadius.borderRadius4};
  /* border: 1px solid #e1e1ef; */
  text-align: center;
`;

export default DropDown;
