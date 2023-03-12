import { SearchInput } from '../../../../components/form/SearchInput/SearchInput';
import { useSearchString } from '../../hooks/useSearchString';

export const SearchInputWrapper = () => {
  const { search, handleSearchChange } = useSearchString();
 
  return <SearchInput handleSearchChange={handleSearchChange} value={search ? search : ''} />;
}
