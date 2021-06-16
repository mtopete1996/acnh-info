const titleize = (string) => {
  if (typeof string !== 'string') {
    throw new TypeError('Expected a string');
  }

  let str = string.toLowerCase().replace(/(?:^|\s|-|_)\S/g, x => x.toUpperCase());
  return str.replace(/(?:^|\s|-|_)\S/g, ' ');
}

module.exports = { titleize }
