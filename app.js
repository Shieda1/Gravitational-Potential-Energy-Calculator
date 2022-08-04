// https://calculator.swiftutors.com/gravitational-potential-energy-calculator.html

const v1 =  document.getElementById('v1');
const v2 = document.getElementById('v2');
const v3 = document.getElementById('v3');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const gravitationalPotentialEnergyRadio = document.getElementById('gravitationalPotentialEnergyRadio');
const massoftheBodyRadio = document.getElementById('massoftheBodyRadio');
const distanceRadio = document.getElementById('distanceRadio');

const G = 6.673e-11;
let gravitationalPotentialEnergy;
let massoftheBody = v1;
let distance = v2;

// labels of the inpust
const variable1 = document.getElementById('variable1');
const variable2 = document.getElementById('variable2');

gravitationalPotentialEnergyRadio.addEventListener('click', function() {
  variable1.textContent = '(M) Mass of the Body (kg)';
  variable2.textContent = '(r) Distance (m)';
  massoftheBody = v1;
  distance = v2;
  result.textContent = '';
});

massoftheBodyRadio.addEventListener('click', function() {
  variable1.textContent = '(U) Gravitational Potential Energy (J)';
  variable2.textContent = '(r) Distance (m)';
  gravitationalPotentialEnergy = v1;
  distance = v2;
  result.textContent = '';
});

distanceRadio.addEventListener('click', function() {
  variable1.textContent = '(U) Gravitational Potential Energy (J)';
  variable2.textContent = '(M) Mass of the Body (kg)';
  gravitationalPotentialEnergy = v1;
  massoftheBody = v2;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(gravitationalPotentialEnergyRadio.checked)
    result.textContent = `Gravitational Potential Energy = ${computeGravitationalPotentialEnergy()} J`;

  else if(massoftheBodyRadio.checked)
    result.textContent = `Mass of the Body = ${computeMassoftheBody().toFixed(2)} kg`;

  else if(distanceRadio.checked)
    result.textContent = `Distance = ${computeDistance().toFixed(2)} m`;
})

// calculation

function computeGravitationalPotentialEnergy() {
  return (-G * Number(massoftheBody.value)) / Number(distance.value);
}

function computeMassoftheBody() {
  return (Number(gravitationalPotentialEnergy.value) * Number(distance.value)) / -G;
}

function computeDistance() {
  return (-G * Number(massoftheBody.value)) / Number(gravitationalPotentialEnergy.value);
}