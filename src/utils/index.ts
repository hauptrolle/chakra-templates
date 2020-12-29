export const toSentenceCase = (value: string) => {
  const res = value.replace(/([A-Z])/g, " $1");
  return res.charAt(0).toUpperCase() + res.slice(1);
};
