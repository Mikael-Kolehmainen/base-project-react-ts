export const theme = {
  primaryColor: "#000000",
  secondaryColor: "#000000",
  primaryFontColor: "#000000",
  secondaryFontColor: "#000000",
  miscColor: "#000000",
};

export const applyTheme = (theme: Record<string, string>) => {
  const root = document.documentElement;
  Object.keys(theme).forEach((key: keyof typeof theme) => {
    root.style.setProperty(`--${toKebabCase(key)}`, theme[key]);
  });
};

const toKebabCase = (str: string) => {
  return str.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
};
