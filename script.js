function convertTemperature() {
  const temperature = parseFloat(document.getElementById('temperature').value);
  const unit = document.getElementById('unit').value;
  let convertedTemperature;

  switch (unit) {
    case 'fahrenheit':
      convertedTemperature = (temperature * 9) / 5 + 32;
      break;
    case 'kelvin':
      convertedTemperature = temperature + 273.15;
      break;
    case 'rankine':
      convertedTemperature = ((temperature + 273.15) * 9) / 5;
      break;
    case 'reaumur':
      convertedTemperature = (temperature * 4) / 5;
      break;
    case 'newton':
      convertedTemperature = (temperature * 33) / 100;
      break;
    case 'delisle':
      convertedTemperature = ((100 - temperature) * 3) / 2;
      break;
    case 'romer':
      convertedTemperature = (temperature * 21) / 40 + 7.5;
      break;
    case 'celsius':
      convertedTemperature = temperature;
      break;
    default:
      convertedTemperature = 'Invalid unit';
  }

  document.getElementById(
    'result'
  ).textContent = `Converted Temperature: ${convertedTemperature.toFixed(
    2
  )} ${unit}`;
}

function resetConverter() {
  document.getElementById('temperature').value = '';
  document.getElementById('unit').value = 'fahrenheit';
  document.getElementById('result').textContent =
    'Result will be displayed here';
}
