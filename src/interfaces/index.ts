export interface SimpleModNode {
  path: string;
  name: string;
}

export interface ModNode extends SimpleModNode {
  extension: string;
  object?: {
    entries?: ModNode[];
    text?: string;
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
  externalUri: string;
  path: string;
  description?: string;
  images?: Array<{
    path: string;
    name: string;
  }>;
}

export interface ModsFlatMap {
  mods: ModFlatMapNode[];
}
