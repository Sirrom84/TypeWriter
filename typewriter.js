const sentence = "hello there from lighthouse labs";
let initial = 0;
let timeAdd = 60;
for (const char of sentence) {
 setTimeout(() => {process.stdout.write(char)}, initial)
 initial+= timeAdd
}
setTimeout(() => {process.stdout.write('\n')}, initial)
