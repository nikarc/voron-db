export interface SimpleModNode {
  path: string;
  name: string;
}

export interface ModNode extends SimpleModNode {
  extension: string;
  object?: {
    entries: ModNode[];
  };
}

export interface ModListResponse {
  repository: {
    name: string;
    resourcePath: string;
    object: {
      entries: ModNode[];
    };
  };
}

export interface ModFlatMapNode {
  name: string;
  createdBy: string;
  downloadLink: string;
  images?: Array<{
    path?: string;
    name?: string;
  }>;
}

export interface ModsFlatMap {
  mods: ModFlatMapNode[];
}
