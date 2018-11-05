import converter from 'xml-js';

export default function (input) {
  return converter.xml2json(input, { compact: false, spaces: 2 });
};
