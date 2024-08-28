let edadMax = 0;

for (let i = 1; i <= 20; i = i + 1) {
  edad = prompt("ingrese su edad");
  edad = Number(edad);
  if (edad > edadMax) {
    edadMax = edad;
  }
}
console.log(`la edad maxima es ${edadMax}`);
