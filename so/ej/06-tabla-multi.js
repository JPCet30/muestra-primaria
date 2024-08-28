let num;
num = prompt("ingrese un numero")
num = Number(num)
mult = 0
for (let i = 1; i <= 10; i=i+1) {
  mult = i*num
  console.log(`${num}x${i}=${mult}`);
}