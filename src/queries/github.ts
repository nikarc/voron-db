import { gql } from "@apollo/client";

const ENTRY_FIELDS = `
  path
  name
  extension
`;

export const MOD_LIST = gql`
  query modList {
    repository(followRenames: true, name: "VoronUsers", owner: "VoronDesign") {
      name
      resourcePath
      object(expression: "master:printer_mods") {
        ... on Tree {
          entries {
            ${ENTRY_FIELDS}
            object {
              ... on Tree {
                entries {
                  ${ENTRY_FIELDS}
                  object {
                    ... on Tree {
                      entries {
                        ${ENTRY_FIELDS}
                        object {
                          ... on Tree {
                            entries {
                              ${ENTRY_FIELDS}
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`;
