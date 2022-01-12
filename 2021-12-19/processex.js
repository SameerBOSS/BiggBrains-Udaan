
let name1 = process.argv[2]
let name2 = process.argv[3]
console.log("Hello "+name1)
console.log("Hello "+name2)

for(let i=2; i< process.argv.length; i++){
	console.log("Hello "+process.argv[i])
}