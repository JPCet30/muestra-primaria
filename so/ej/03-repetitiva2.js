let jovn, edad;
jovn = prompt("ingrese la cantidad de jovenes");
jovn = Number(jovn);
for (let i = 0; i < jovn; i = i + 1) {
  edad = prompt("ingrese la edad de los jovenes");
  edad = Number(edad);
  if (edad < 18) {
    console.log(`Su edad es ${edad}. Su nivel de fuerza es de 50`);
  }
  if (edad >= 18) {
    console.log(`Su edad es ${edad}. Su nivel de fuerza es de 100`);
  }
}
