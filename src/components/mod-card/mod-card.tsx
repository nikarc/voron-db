import ExternalLink from "components/icons/external-link";
import Image from "components/image";
import { deslugify } from "helpers";
import { stripHTML } from "helpers/strip-html";
import { ModFlatMapNode } from "interfaces";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import {
  ModByLine,
  ModCardFooter,
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
  const router = useRouter();
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

  const modClick = () => {
    router.push(mod.path);
  };

  return (
    <Wrap onClick={modClick}>
      <ModImageWrap>
        {mod.images?.[0] && (
          <Image src={mod.images[0].path} alt={mod.images[0].name} />
        )}
      </ModImageWrap>
      <ModTextContent>
        <ModTitle>{deslugify(mod.name)}</ModTitle>
        {description && <ModDesc>{description}</ModDesc>}
      </ModTextContent>
      <ModCardFooter>
        <ModByLine
          onClick={(e) => e.stopPropagation()}
          href={`https://github.com/${mod.createdBy}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <small>By: {mod.createdBy}</small>
        </ModByLine>
        <a href={mod.path} target="_blank" rel="noopener noreferrer">
          <small>
            Go To Repo <ExternalLink color="grayLight" />
          </small>
        </a>
      </ModCardFooter>
    </Wrap>
  );
};
