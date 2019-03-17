// Creates new line after dot.
export const newLine = () => {
  const regex = /[.]/g;
  const details = JSON.stringify(product.details);
  const subst = `\n`;

  // The substituted value will be contained in the result variable
  const detailsResult = details.replace(regex, subst);
  return detailsResult;
};

export const replaceForNewLine = () => {
  const details = JSON.stringify(product.details)
    .replace(/\./g, "<br>")
    .replace(/\\r/g, "");
};
