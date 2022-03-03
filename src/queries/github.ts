import { gql } from "@apollo/client";

export const MOD_LIST = gql`
  query modList {
    repository(followRenames: true, name: "VoronUsers", owner: "VoronDesign") {
      object(expression: "master:printer_mods") {
        ... on Tree {
          entries {
            extension
            path
            name
          }
        }
      }
    }
  }
`;
