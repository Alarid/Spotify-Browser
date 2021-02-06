import React from 'react'
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'
import { Search } from 'react-feather'
import useDebounce from '@rooks/use-debounce'
import styled from 'styled-components/macro'
import { transparentize } from 'polished'

type Props = {
  onSearch: (query: string) => void
}

const StyledInputGroup = styled(InputGroup)`
  border-radius: 10px;
  box-shadow: ${({ theme }) => `${theme.outerShadow}, ${theme.innerShadow}`};

  &:focus {
    border-color: ${({ theme }) => theme.primary.main};
  }
`

const StyledInput = styled(FormControl)`
  padding: 25px 20px !important;
  padding-left: 0 !important;
  background-color: ${({ theme }) => theme.black};
  border-color: transparent;
  color: ${({ theme }) => theme.faded};

  &:focus {
    background-color: ${({ theme }) => theme.black};
    border-color: transparent;
    border-bottom: 1px solid ${({ theme }) => transparentize(0.6, theme.primary.main)};
    color: ${({ theme }) => theme.faded};
    outline: none;
    box-shadow: none;
  }
`

const StyledInputIcon = styled(InputGroup.Text)`
  background-color: ${({ theme }) => theme.black};
  border-color: transparent;
`

const SearchBar: React.FC<Props> = ({ onSearch }) => {
  const debounceSearch = useDebounce((query: string) => {
    onSearch(query)
  }, 300)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    debounceSearch(e.target.value)
  }
  return (
    <StyledInputGroup>
      <InputGroup.Prepend>
        <StyledInputIcon>
          <Search />
        </StyledInputIcon>
      </InputGroup.Prepend>
      <StyledInput
        size="lg"
        type="text"
        placeholder="Search for an album"
        onChange={handleChange}
      />
    </StyledInputGroup>
  )
}

export default SearchBar
