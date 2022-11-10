// Task 1
// Die Ausgabe des gegebenen Pseucode sind  6 , 5 , 4 
let i = 3;
do{
    console.log(i+3);
    i = i-1;
}while(i != 0)

// nur benutzt, um Abstand mit Task 1 zu haben
console.log("\n");  

// Task 2 
//  Die Ausgabe von folgendem JavaScript Code sind https:// , go. , sleevesup. , de , /task , -solve

const parts = ['http://', 'https://', 'www.', 'go.', 'bit.', 'sleevesup.', 'ly', 'de', '/3yXj', '/task', 'oCL', '-solve'];
   i = 0; // let wird entfehrnt, weil i bei Task 1 als Variable schon initialisiert wurde.
do {
	if (i % 2 === 1){
		console.log(parts[i]);
	}
	i = i + 1;
} while (i < parts.length)
