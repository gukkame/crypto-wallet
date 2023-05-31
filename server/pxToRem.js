let css = `
your css here
`;

function pxToRem(CSSString) {
  const rgx = new RegExp(/(\d+\.?\d*)px/, 'g');
  return CSSString.replace(rgx, (match, n) => (n / 16) + 'rem');
}

console.log();
console.log(pxToRem(css));