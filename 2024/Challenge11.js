function decodeFilename(filename) {
    let arr = filename.split("")
    let isFirstDot = true;
    let underScoreIndex = arr.indexOf("_");
    arr.splice(0, underScoreIndex+1);
    arr.reverse()
    let dotIndex = arr.indexOf(".");
    arr.splice(0, dotIndex+1);
    return arr.reverse().join("");
}


console.log(decodeFilename('2023122512345678_sleighDesign.png.grinchwa'));
console.log(decodeFilename('42_chimney_dimensions.pdf.hack2023'));
console.log(decodeFilename('987654321_elf-roster.csv.tempfile'));