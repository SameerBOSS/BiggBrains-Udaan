import fs from "fs";

const BASE_PATH = "./files/";

export const readFile = (fileName) =>{
    const data = fs.readFileSync(BASE_PATH+fileName);
    return JSON.parse(data);
}

export const writeFile = (data, fileName) => {
    fs.writeFileSync(BASE_PATH+fileName, JSON.stringify(data))
}