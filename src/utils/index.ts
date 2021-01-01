export const toSentenceCase = (value: string) => {
  return value
    .replace(/([a-z\xE0-\xFF])([A-Z\xC0\xDF])/g, "$1 $2")
    .split(" ")
    .map((s) => s.charAt(0).toUpperCase() + s.slice(1))
    .join(" ");
};
