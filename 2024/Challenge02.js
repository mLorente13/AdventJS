function createFrame(names) {
    let longestStr = Math.max(...names.map(name => name.length)) + 1;
    let framedNames = names.map(name => {
        let numSpaces = longestStr - name.length;
        return "* " + name + " ".repeat(numSpaces) + "*\n"
    });
    return "*".repeat(longestStr+3) + "\n" + framedNames.join("") + "*".repeat(longestStr+3);
}

console.log(createFrame(['midu', 'madeval', 'educalvolpz']));
