    function convertTemperature() {
      var temperatureInput = document.getElementById("temperatureInput").value;
      var fromUnit = document.getElementById("fromUnit").value;
      var toUnit = document.getElementById("toUnit").value;

      var convertedTemperature;

      switch (fromUnit) {
        case "Celsius":
          if (toUnit === "Fahrenheit") {
            convertedTemperature = (temperatureInput * 9/5) + 32;
          } else if (toUnit === "Kelvin") {
            convertedTemperature = parseFloat(temperatureInput) + 273.15;
          } else {
            convertedTemperature = temperatureInput;
          }
          break;
        case "Fahrenheit":
          if (toUnit === "Celsius") {
            convertedTemperature = (temperatureInput - 32) * 5/9;
          } else if (toUnit === "Kelvin") {
            convertedTemperature = (parseFloat(temperatureInput) - 32) * 5/9 + 273.15;
          } else {
            convertedTemperature = temperatureInput;
          }
          break;
        case "Kelvin":
          if (toUnit === "Celsius") {
            convertedTemperature = temperatureInput - 273.15;
          } else if (toUnit === "Fahrenheit") {
            convertedTemperature = (parseFloat(temperatureInput) - 273.15) * 9/5 + 32;
          } else {
            convertedTemperature = temperatureInput;
          }
          break;
      }
      document.getElementById("resultText").textContent = temperatureInput + " " + fromUnit + " is equal to " + convertedTemperature.toFixed(2) + " " + toUnit;
    }