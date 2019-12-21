const convertUnixTimestamp = timestamp => {
  const d = new Date(timestamp * 1000);
  const hours = ('0' + d.getHours()).slice(-2);
  const minutes = ('0' + d.getMinutes()).slice(-2);
  return `${hours}:${minutes} ${hours > 12 ? 'PM' : 'AM'}`;
};

export {
  convertUnixTimestamp
};
