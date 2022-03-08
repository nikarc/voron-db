import { deslugify } from "helpers";
import { stripHTML } from "helpers/strip-html";
import { ModFlatMapNode } from "interfaces";
import { ModDesc, ModTitle, Wrap } from "./mod-card.styles";

interface Props {
  mod: ModFlatMapNode;
}

export const ModCard: React.FC<Props> = ({ mod }) => {
  return (
    <Wrap>
      <ModTitle>{deslugify(mod.name)}</ModTitle>
      {mod.description && <ModDesc>{stripHTML(mod.description)}</ModDesc>}
    </Wrap>
  );
};
