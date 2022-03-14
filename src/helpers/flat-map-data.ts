import { ModsFlatMap, ModListResponse, ModFlatMapNode } from "interfaces";

export const flatMapData = (data: ModListResponse): ModsFlatMap => {
  const mods: ModFlatMapNode[] = data.repository.object.entries
    .filter((repoEntry) => Boolean(repoEntry.object?.entries))
    .flatMap((repoEntry) => {
      return repoEntry
        .object!.entries!.filter((e) => !e.extension.length)
        .map((mod) => ({
          name: mod.name,
          createdBy: repoEntry.name,
          externalUri: `https://github.com${data.repository.resourcePath}/tree/master/${mod.path}`,
          path: mod.path,
          description: mod.object?.entries?.find((e) => e.name === "README.md")
            ?.object?.text,
          downloadLink: `https://raw.githubusercontent.com/${data.repository.name}/${data.repository.resourcePath}`,
          images:
            mod.object?.entries
              ?.find((e) => e.name === "images")
              ?.object?.entries?.map((img) => ({ ...img })) ?? [],
        }));
    });

  return {
    mods,
  };
};
