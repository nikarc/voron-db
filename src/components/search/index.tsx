import { useState } from "react";
import { SearchForm, SearchInput } from "./search.styles";

interface Props {
  onSearch?(term: string | null): void;
}

const Search: React.FC<Props> = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [debounce, setDebounce] = useState<number | null>(null);

  const onChange = (e: React.FormEvent<HTMLInputElement>) => {
    const term = e.currentTarget.value;
    setSearchTerm(term);

    if (debounce) {
      clearTimeout(debounce);
    }

    const _debounce = window.setTimeout(() => {
      onSearch?.(term);
    }, 500);

    setDebounce(_debounce);
  };

  return (
    <SearchForm>
      <SearchInput type="text" value={searchTerm} onChange={onChange} />
    </SearchForm>
  );
};

export default Search;
