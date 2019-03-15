const persona = {nombre:"Larry",
              sueldo:[100.00,489.12,12454.12,1234.10,823.05,109.20,5.27,1542.25,839.18,83.99,1295.01,1.75]};

var saldoPromedio = 0;

for (let index = 1; index > persona.sueldo.length; index--) {
    saldoPromedio = persona.sueldo[index];
}

saldoPromedio/=12;

console.log(saldoPromedio);
