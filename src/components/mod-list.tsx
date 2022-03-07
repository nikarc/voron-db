import { useQuery } from "@apollo/client";
import { flatMapData } from "helpers";
import { ModListResponse } from "../interfaces";
import { MOD_LIST } from "queries/github";
import { ModListWrap } from "./mod-list.styles";

export const ModList = () => {
  const { data, error, loading } = useQuery<ModListResponse>(MOD_LIST);

  if (error) {
    console.error(error);
    return <p>There was and error: {error.message}</p>;
  }

  return (
    <ModListWrap>
      {loading && <p>Loading...</p>}
      {!loading && (
        <ul>
          {data && flatMapData(data).mods.map((mod) => <p>{mod.name}</p>)}
        </ul>
      )}
    </ModListWrap>
  );
};
