import { useQuery } from "@apollo/client";
import { flatMapData } from "helpers";
import { ModListResponse } from "../interfaces";
import { MOD_LIST } from "queries/github";
import { ModListWrap, ModUnorderedList } from "./mod-list.styles";
import { ModCard } from "./mod-card/mod-card";
import { useEffect } from "react";

export const ModList = () => {
  const { data, error, loading } = useQuery<ModListResponse>(MOD_LIST);

  if (error) {
    console.error(error);
    return <p>There was an error: {error.message}</p>;
  }

  useEffect(() => {
    console.log({ data });
  }, [data?.repository]);

  return (
    <ModListWrap>
      {loading && <p>Loading...</p>}
      {!loading && (
        <ModUnorderedList>
          {data &&
            flatMapData(data).mods.map((mod, index: number) => (
              <ModCard key={index} mod={mod} />
            ))}
        </ModUnorderedList>
      )}
    </ModListWrap>
  );
};
