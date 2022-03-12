import { useQuery } from "@apollo/client";
import { flatMapData } from "helpers";
import { ModListResponse } from "../interfaces";
import { MOD_LIST } from "queries/github";
import { ModListWrap, ModUnorderedList } from "./mod-list.styles";
import { ModCard } from "./mod-card/mod-card";
import { useEffect, useMemo, useState } from "react";
import Search from "./search";

export const ModList = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const { data, error, loading } = useQuery<ModListResponse>(MOD_LIST);

  const searchResults = useMemo(() => {
    if (!data) return [];

    const _data = flatMapData(data);

    if (!searchTerm.length) return _data.mods;

    return _data.mods.filter((mod) => {
      if (!searchTerm.length) return true;

      const jsonString = JSON.stringify(mod);
      return jsonString.toLowerCase().includes(searchTerm.toLowerCase());
    });
  }, [data, searchTerm]);

  if (error) {
    console.error(error);
    return <p>There was an error: {error.message}</p>;
  }

  useEffect(() => {
    console.log({ data });
  }, [data?.repository]);

  const onSearch = (term: string) => {
    setSearchTerm(term);
    console.log({ term });
  };

  return (
    <ModListWrap>
      {loading && <p>Loading...</p>}
      {!loading && (
        <>
          <Search onSearch={onSearch} />
          <ModUnorderedList>
            {searchResults.map((mod, index: number) => (
              <ModCard key={index} mod={mod} />
            ))}
          </ModUnorderedList>
        </>
      )}
    </ModListWrap>
  );
};
