const userInput = document.getElementById('user-input');
const convertBtn = document.getElementById('convert-input-btn');
const lengthEl = document.getElementById('length-result');
const volumeEl = document.getElementById('volume-result');
const massEl = document.getElementById('mass-result');
const toggleBtn = document.getElementById('toggle-btn');
const resultsContainer = document.getElementById('converted-results');
let isLightMode = true;
const meterToFeetConversionRate = 3.281;
const literToGalonConversionRate = 0.264;
const kilogramToPoundConversionRate = 2.204;

convertBtn.addEventListener('click', function (event) {
  preventDefaultForNegativeValues(event);

  if (userInput.value !== '' && userInput.value > 0) {
    convertBtn.disabled = false;
    convertAndClear();
  }

  convertBtn.disabled = true;
});

userInput.addEventListener('keypress', function (event) {
  preventDefaultForNegativeValues(event);

  if (userInput.value !== '' && userInput.value > 0) {
    if (event.key === 'Enter') {
      convertAndClear();
    }
  }
});

toggleBtn.addEventListener('click', function () {
  modeToggle();
});

function preventDefaultForNegativeValues(event) {
  if (event.key === '-') {
    event.preventDefault();
  }
}

function convertAndClear() {
  convertUnits(userInput.value);
  userInput.value = '';
}

function convertUnits(userValue) {
  convert(userValue, lengthEl, meterToFeetConversionRate, 'meters', 'feet');
  convert(userValue, volumeEl, literToGalonConversionRate, 'liters', 'gallons');
  convert(
    userValue,
    massEl,
    kilogramToPoundConversionRate,
    'kilograms',
    'pounds'
  );

  convertVolume(userValue);
  convertMass(userValue);
}

function convert(value, resultEl, conversionRate, firstUnit, secondUnit) {
  clearPrevResult(resultEl);
  const toFirstUnit = value * conversionRate;
  const toSecondUnit = value / conversionRate;
  resultEl.innerHTML += `
    ${value} ${firstUnit} = ${toFirstUnit.toFixed(3)} ${secondUnit} | 
    ${value} ${secondUnit} = ${toSecondUnit.toFixed(3)} ${firstUnit}
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
