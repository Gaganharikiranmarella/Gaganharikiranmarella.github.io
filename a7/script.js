const getValues = () => {
  const num1 = parseFloat(document.getElementById("num1").value);
  const num2 = parseFloat(document.getElementById("num2").value);
  return { num1, num2 };
};

const calculateResults = ({ num1, num2 }) => {
  return {
    addition: num1 + num2,
    subtraction: num1 - num2,
    multiplication: num1 * num2,
    division: num2 !== 0 ? (num1 / num2).toFixed(2) : "Cannot divide by zero"
  };
};

const displayResults = (results) => {
  const resultDiv = document.getElementById("result");
  resultDiv.innerHTML = `
    <p>Addition: ${results.addition}</p>
    <p>Subtraction: ${results.subtraction}</p>
    <p>Multiplication: ${results.multiplication}</p>
    <p>Division: ${results.division}</p>
  `;
};

const handleSubmit = () => {
  const values = getValues();
  const results = calculateResults(values);
  displayResults(results);
};
