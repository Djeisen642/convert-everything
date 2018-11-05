// https://gist.github.com/iwek/7154578
export default function (input) {
  let lines = input.split('\n');

  let removeOuterQuotes = new RegExp(/^"|"$/, 'g');

  let headers = lines[0].split(',');
  console.log(headers.map(header => header.trim()));
  headers = headers.map(header => header.trim().replace(removeOuterQuotes, ''));
  console.log(headers);

  let result = lines.slice(1).map((line) => {
    let obj = {};
    let currentLine = line.split(',');
    headers.forEach((header, j) => {
      obj[header] = currentLine[j].trim().replace(removeOuterQuotes, '');
    });
    return obj;
  });

  return JSON.stringify(result, false, 2);
}
