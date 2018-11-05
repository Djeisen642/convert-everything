import plist from 'plist';

export default function (input) {
  let output = plist.parse(input);
  return JSON.stringify(output, null, 2);
};
