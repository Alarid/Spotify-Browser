import React from 'react'
import { Search } from 'react-feather'
import useDebounce from '@rooks/use-debounce'
import { StyledInputGroup, StyledInputIcon, StyledInput } from './SearchBar.styles'

// Props
type Props = {
  onSearch: (query: string) => void
}

/**
 * Search bar component
 */
const SearchBar: React.FC<Props> = ({ onSearch }) => {
  // Debounce the search to avoid sending too much requests to the API
  const debounceSearch = useDebounce((query: string) => {
    onSearch(query)
  }, 300)

  // Change event on the search bar input
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    debounceSearch(e.target.value)
  }

  // Render
  return (
    <StyledInputGroup>
      <StyledInputGroup.Prepend>
        <StyledInputIcon>
          <Search />
        </StyledInputIcon>
      </StyledInputGroup.Prepend>
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
