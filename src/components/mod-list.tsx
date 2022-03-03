import { useQuery } from "@apollo/client";
import { IModList } from "../interfaces";
import { MOD_LIST } from "../queries/github";
import { ModListWrap } from "./mod-list.styles";

export const ModList = () => {
  const { data, error, loading } = useQuery<IModList>(MOD_LIST);

  if (error) console.error(error);

  return (
    <ModListWrap>
      {loading && <p>Loading...</p>}
      {!loading && (
        <ul>
          {data?.repository.object.entries.map((folder) => (
            <p>{folder.name}</p>
          ))}
        </ul>
      )}
    </ModListWrap>
  );
};
