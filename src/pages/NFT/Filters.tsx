import React, { useState } from 'react'
import ButtonGroup from '@mui/material/ButtonGroup';
import Stack from '@mui/material/Stack';
import { styled } from "@mui/material/styles";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import ArrowUp from '../../assets/NFT-UpArrow.svg';
import ArrowDown from '../../assets/NFT-DownArrow.svg';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import { useAppSelector, useAppDispatch } from '../../context/hooks'
import { updateFilters, updateSort } from '../../context/nftSlice';

const Filters = () => {

  const [sort, setSort] = useState<string>(useAppSelector(state => state.nft.sort))
  const [status, setStatus] = useState<string>(useAppSelector(state => state.nft.filters.status))
  const [sortDropdown, setSortDropdown] = useState<boolean>(true)
  const [statusDropdown, setStatusDropdown] = useState<boolean>(false)

  const dispatch = useAppDispatch()

  const handleChange = (e: SelectChangeEvent) => {


    if (e.target.name === 'sort') {
      dispatch(updateSort(e.target.value))
      setSort(e.target.value)
    }

    if (e.target.name === 'filters') {
      dispatch(updateFilters({ name: 'status', value: e.target.value }))
      setStatus(e.target.value)
    }
  }



  return (
    <>
      <Stack direction={{ md: 'row', sm: 'column' }} justifyContent='space-between' gap={3}>
        <StyledButtonGroup>
          <StyledButton>Subscribe to Prime</StyledButton>
          <StyledButton style={{ background: '#FFF' }}>Buy FarmCow NFT</StyledButton>
        </StyledButtonGroup>
        <FormControl style={{ width: 200, border: 'none' }} >
          <StyledSelect
            displayEmpty
            renderValue={(selected: any) => {

              return <span className='bold'>Filter</span>;

            }}
            size="small"
          >
            <StyledMenuItem disableRipple>
              <Stack direction='row' justifyContent='space-between' sx={{ width: '100%' }}>
                <span className='bold'>Sort by</span>
                <span onClick={() => setSortDropdown(!sortDropdown)}>{sortDropdown ? <img src={ArrowUp} alt="arrow up" /> : <img src={ArrowDown} alt="arrow down" />}</span>
              </Stack>
              <Stack direction='row' justifyContent='space-between' sx={{ width: '100%' }}>
                {sortDropdown &&
                  <RadioGroup
                    aria-labelledby="demo-radio-buttons-group-label"
                    value={sort}
                    name="sort"
                    onChange={(e) => handleChange(e)}
                  >
                    <FormControlLabel value="highest_price" control={<Radio />} label="Price: High to low" />
                    <FormControlLabel value="lowest_price" control={<Radio />} label="Price: Low to high" />
                  </RadioGroup>
                }
              </Stack>
            </StyledMenuItem>
            <hr style={{ width: '90%', margin: '0 auto' }} />
            <StyledMenuItem disableRipple>
              <Stack direction='row' justifyContent='space-between' sx={{ width: '100%' }}>
                <span className='bold'>NFT Status</span>
                <span onClick={() => setStatusDropdown(!statusDropdown)}>{statusDropdown ? <img src={ArrowUp} alt="arrow up" /> : <img src={ArrowDown} alt="arrow down" />}</span>
              </Stack>
              <Stack direction='row' justifyContent='space-between' sx={{ width: '100%' }}>
                {
                  statusDropdown &&
                  <RadioGroup
                    aria-labelledby="demo-radio-buttons-group"
                    name="filters"
                    onChange={(e) => handleChange(e)}
                    value={status}
                  >
                    <FormControlLabel value="all" control={<Radio />} label="All" />
                    <FormControlLabel value="available" control={<Radio />} label="Available" />
                    <FormControlLabel value="soldOut" control={<Radio />} label="Sold out" />
                  </RadioGroup>
                }
              </Stack>
            </StyledMenuItem>
          </StyledSelect>
        </FormControl>
      </Stack>
      <Stack direction='row' gap={1} sx={{ margin: '20px 0 5px 0' }}>
        <PrimeSub>500 available prime subscription, updated 7 Secs ago</PrimeSub>
      </Stack>
    </>
  )
}
const StyledButtonGroup = styled(ButtonGroup)`

  background-color: #FFF;
  padding:5px;
  width: fit-content;

`
const StyledButton = styled('button')`
  
  border: none;
  padding: 7px 15px;
  background: var(--primary-color);  
  color: #000000;
  font-weight: 700;
  font-size: 1rem;
  cursor: pointer;
  display: inline-block;
  text-decoration: none;
  border-radius: 5px;
`

const StyledSelect = styled(Select)`
background-color: #FFF;
outline: none;
border-color: #FFF;

.bold {
  font-weight: 700;
}
fieldset{
    border: 1px solid #FFF;
    border-radius: 5px;
  }
  && {
    &:hover  {

      fieldset {
        border-color: white;
      }
    }

  }
  
`

const StyledMenuItem = styled(MenuItem)`
display: flex;
flex-direction: column;

.bold {
  font-weight: 700;
}
`

const PrimeSub = styled('span')`
  color: #3D3D3D;
  font-size: 0.875rem;
`
export default Filters