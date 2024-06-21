import * as fs from 'fs';

function createBigBangArray(): string[] {
    const result: string[] = [];

    for (let i = 1; i <= 100; i++) {
        
        if (i % 3 === 0 && i % 5 === 0) {
            result.push("BIGBANG");
        } 
        else if (i % 3 === 0) {
            result.push("BIG");
        } 
        else if (i % 5 === 0) {
            result.push("BANG");
        } 
        else {
            result.push(i.toString());
        }
    }

    return result;
}

const bigBangArray = createBigBangArray();
fs.writeFileSync('output.json', JSON.stringify(bigBangArray, null, 2));

console.log("output.json created and written");
