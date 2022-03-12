import Image from "components/image";
import { deslugify } from "helpers";
import { stripHTML } from "helpers/strip-html";
import { ModFlatMapNode } from "interfaces";
import { useEffect, useState } from "react";
import {
  ModByLine,
  ModDesc,
  ModImageWrap,
  ModTextContent,
  ModTitle,
  Wrap,
} from "./mod-card.styles";

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
      <a href={mod.path} target="_blank" rel="noopener noreferrer">
        <ModImageWrap>
          {mod.images?.[0] && (
            <Image src={mod.images[0].path} alt={mod.images[0].name} />
          )}
        </ModImageWrap>
        <ModTextContent>
          <ModTitle>{deslugify(mod.name)}</ModTitle>
          {description && <ModDesc>{description}</ModDesc>}
        </ModTextContent>
      </a>
      <ModByLine
        onClick={(e) => e.stopPropagation()}
        href={`https://github.com/${mod.createdBy}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <small>By: {mod.createdBy}</small>
      </ModByLine>
    </Wrap>
  );
};
