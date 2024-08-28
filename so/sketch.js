let caballero = 0,
  num,
  padawan = 0,
  master = 0,
  otros = 0;
num = prompt("ingrese cuantos jedis hay");
num = Number(num);

for (let i = 0; i < num; i = i + 1) {
  rango = prompt("ingrese su rango");
  if (rango == "maestro") {
    master = master + 1;
  } else if (rango == "caballero") {
    caballero = caballero + 1;
  } else if (rango == "padawan") {
    padawan = padawan + 1;
  } else {
    otros = otros + 1;
  }
}
console.log(
  `maestros= ${master}; caballeros ${caballero}; padawans= ${padawan}; otros= ${otros} `
);

if (caballero > 5) {
  console.log(`hay más de 5 caballeros`);
}
if (padawan > 5) {
  console.log(`hay más de 5 padawans`);
}
if (master > 5) {
  console.log(`hay más de 5 maestros`);
}
