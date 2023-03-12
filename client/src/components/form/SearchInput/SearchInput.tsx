import SearchIcon from '@mui/icons-material/Search';
import { ChangeEvent } from 'react';
import { Styled } from './styled';

interface IProps {
  handleSearchChange: (val: string) => void;
  value?: string;
}

export const SearchInput = ({ handleSearchChange, value }: IProps) => {
  const handleChange = ({ target: { value } }: ChangeEvent<HTMLInputElement>) => {
    handleSearchChange(value);
  };

  return (
    <Styled.Search>
      <Styled.SearchIconWrapper>
        <SearchIcon />
      </Styled.SearchIconWrapper>
      <Styled.StyledInputBase
        placeholder="Search…"
        inputProps={{ 'aria-label': 'search' }}
        onChange={handleChange}
        value={value}
        data-testid={'search-input'}
      />
    </Styled.Search>
  );
};
