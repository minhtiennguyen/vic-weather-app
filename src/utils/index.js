const convertUnixTimestamp = timestamp => {
  const d = new Date(timestamp * 1000);
  const hours = ('0' + d.getHours()).slice(-2);
  const minutes = ('0' + d.getMinutes()).slice(-2);
  return `${(hours % 12) ? hours : 12}:${minutes} ${hours > 12 ? 'PM' : 'AM'}`;
};

// const toCelsius = fahrenheit => {
//   return ((fahrenheit - 32) * 5) / 9;
// };

const toFahrenheit = celsius => {
  return ((celsius * 9) / 5 + 32).toFixed(2);
};

const convertTemp = (unit, temp) => {
  if (unit === 'imperial') {
    return `${toFahrenheit(temp)} F`;
  }
  return `${temp} C`;
};

const getCurentTime = () => {
  let today = new Date();
  const dd = String(today.getDate()).padStart(2, '0');
  const mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
  const yyyy = today.getFullYear();
  const hours = today.getHours();
  const ampm = hours >= 12 ? 'PM' : 'AM';
  const minutes = today.getMinutes();

  return `${dd}/${mm}/${yyyy} - ${hours}:${minutes} ${ampm}`;
};


export { convertUnixTimestamp, toFahrenheit, convertTemp, getCurentTime };
