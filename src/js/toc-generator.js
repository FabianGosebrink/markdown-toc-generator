 function convertToMarkDown() {
     var markdowvalue = document.getElementById('markDown').value;
     document.getElementById('result').innerHTML = createToc(markdowvalue);
 }

 function createToc(value) {
     const allLinesWithHash = this.getAllLinesWithHash(value);

     const allNewLinesWithSpaces = allLinesWithHash.map((line) => {
         const spacesCount = this.calculatePrefixSpaces(line);
         line = this.removeHashes(line);
         line = this.createMarkdownLine(line);
         return this.addSpacesPrefixToLine(spacesCount, line);
     });

     if (!!allNewLinesWithSpaces.length) {
         showButton();
     } else {
         hideButton();
     }

     return allNewLinesWithSpaces.join('\r\n');
 }

 function getAllLinesWithHash(value) {
     const allLines = value.split(/\r\n|\r|\n/);
     return allLines.filter((x) => x.startsWith('#'));
 }

 function createAnchorString(line) {
     return line
         .replace(/([a-z])([A-Z])/g, '$1-$2')
         .replace(/[\s_]+/g, '-')
         .toLowerCase();
 }

 function addSpacesPrefixToLine(hashCount, line) {
     let prefix = '';

     for (let index = 0; index < hashCount; index++) {
         var twoSpaces = '  ';
         prefix = twoSpaces + prefix;
     }

     return prefix + line;
 }

 function createMarkdownLine(line) {
     const anchor = this.createAnchorString(line);

     return '- [' + line + '](#' + anchor + ')';
 }

 function calculatePrefixSpaces(line) {
     return line.split('#').length - 2;
 }

 function removeHashes(line) {
     return line.split('#').join('').trim();
 }

 function showButton() {
     document.getElementById('clipboard-button').classList.remove("hide");
     document.getElementById('clipboard-button').classList.add("show");
 }

 function hideButton() {
     document.getElementById('clipboard-button').classList.remove("show");
     document.getElementById('clipboard-button').classList.add("hide");

 }