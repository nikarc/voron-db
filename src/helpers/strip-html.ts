import { unified } from "unified";
import remarkParse from "remark-parse";
import rehypeFormat from "rehype-format";
import rehypeStringify from "rehype-stringify";
import remarkRehype from "remark-rehype";

export const stripHTML = async (data: string): Promise<string> => {
  const formatted = await unified()
    .use(remarkParse)
    .use(remarkRehype)
    .use(rehypeFormat)
    .use(rehypeStringify)
    .process(data);

  const parser = new DOMParser();
  const doc = parser.parseFromString(String(formatted), "text/html");

  return doc.body.textContent?.trim().length
    ? doc.body.textContent
    : "No README";
};
