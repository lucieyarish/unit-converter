const userInput = document.getElementById('user-input');
const convertBtn = document.getElementById('convert-input-btn');
const lengthEl = document.getElementById('length-result');
const volumeEl = document.getElementById('volume-result');
const massEl = document.getElementById('mass-result');
const toggleBtn = document.getElementById('toggle-btn');
const resultsContainer = document.getElementById('converted-results');
let isLightMode = true;

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

toggleBtn.addEventListener('click', function () {
  modeToggle();
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

function modeToggle() {
  isLightMode = !isLightMode;
  isLightMode ? (toggleBtn.innerText = '🌚') : (toggleBtn.innerText = '🌞');
  resultsContainer.classList.toggle('dark-container');

  const resultContainers = document.getElementsByClassName('convert-results');
  for (let i = 0; i < resultContainers.length; i++) {
    resultContainers[i].classList.toggle('dark-inner-container');
  }

  const resultContainersTitle = document.getElementsByClassName(
    'convert-results-title'
  );
  for (let i = 0; i < resultContainersTitle.length; i++) {
    resultContainersTitle[i].classList.toggle('light-title');
  }

  const resultContainersText = document.getElementsByClassName(
    'convert-results-text'
  );
  for (let i = 0; i < resultContainersText.length; i++) {
    resultContainersText[i].classList.toggle('light-text');
  }
}
