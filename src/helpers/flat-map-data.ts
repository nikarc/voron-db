import { ModsFlatMap, ModListResponse, ModFlatMapNode } from "interfaces";

export const flatMapData = (data: ModListResponse): ModsFlatMap => {
  const mods: ModFlatMapNode[] = data.repository.object.entries
    .filter((repoEntry) => Boolean(repoEntry.object?.entries))
    .flatMap((repoEntry) => {
      return repoEntry.object!.entries.map((mod) => ({
        name: mod.name,
        createdBy: repoEntry.name,
        downloadLink: `https://raw.githubusercontent.com/${data.repository.name}/${data.repository.resourcePath}`,
        images: [],
      }));
    });

  return {
    mods,
  };
};
