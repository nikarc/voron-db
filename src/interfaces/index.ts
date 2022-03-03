export interface ModNode {
  path: string;
  name: string;
}

export interface IModList {
  repository: {
    object: {
      entries: Array<ModNode>;
    };
  };
}
