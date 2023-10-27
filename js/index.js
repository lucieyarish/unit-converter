const userInput = document.getElementById('user-input');
const convertBtn = document.getElementById('convert-input-btn');
const lengthEl = document.getElementById('length-result');
const volumeEl = document.getElementById('volume-result');
const massEl = document.getElementById('mass-result');

convertBtn.addEventListener('click', function () {
  convertUnits(userInput.value);
  userInput.value = '';
});

userInput.addEventListener('keypress', function (event) {
  if (event.key === 'Enter') {
    convertUnits(userInput.value);
    userInput.value = '';
  }
});

function convertUnits(userValue) {
  convertLength(userValue);
  convertVolume(userValue);
  convertMass(userValue);
}

function convertLength(value) {
  clearPrevResult(lengthEl);
  const toFeet = value * 3.281;
  const toMeters = value / 3.281;
  lengthEl.innerHTML += `
    ${value} meters = ${toFeet.toFixed(3)} feet | 
    ${value} feet = ${toMeters.toFixed(3)} meters
  `;
}

function convertVolume(value) {
  clearPrevResult(volumeEl);
  const toGallons = value * 0.264;
  const toLiters = value / 0.264;
  volumeEl.innerHTML += `
  ${value} liters = ${toGallons.toFixed(3)} gallons | 
  ${value} gallons = ${toLiters.toFixed(3)} liters
  `;
}

function convertMass(value) {
  clearPrevResult(massEl);
  const toPounds = value * 2.204;
  const toKilograms = value / 2.204;
  massEl.innerHTML += `
    ${value} kilograms = ${toPounds.toFixed(3)} pounds | 
    ${value} pounds = ${toKilograms.toFixed(3)} kilograms
    `;
}

function clearPrevResult(element) {
  element.innerHTML = '';
}
