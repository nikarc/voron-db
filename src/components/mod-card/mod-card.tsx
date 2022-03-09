import { deslugify } from "helpers";
import { stripHTML } from "helpers/strip-html";
import { ModFlatMapNode } from "interfaces";
import { useEffect, useState } from "react";
import { ModDesc, ModTitle, Wrap } from "./mod-card.styles";

interface Props {
  mod: ModFlatMapNode;
}

export const ModCard: React.FC<Props> = ({ mod }) => {
  const [description, setDescription] = useState<string | null>(null);

  useEffect(() => {
    if (mod.description) {
      const getStripHtml = async () => {
        const _description = await stripHTML(mod.description!);
        setDescription(_description);
      };

      getStripHtml();
    }
  }, []);

  return (
    <Wrap>
      <ModTitle>{deslugify(mod.name)}</ModTitle>
      {description && <ModDesc>{description}</ModDesc>}
    </Wrap>
  );
};
