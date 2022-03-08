export const stripHTML = (data: string): string => {
  const htmlRegex = /(<([^>]+)>)/gi;
  const imgReg =
    /(!|)\[.*\]\(((https?:\/\/|.\/)(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*))\)/gi;

  return data.replace(htmlRegex, "").replace(imgReg, "").replace(/\\n+/g, " ");
};
