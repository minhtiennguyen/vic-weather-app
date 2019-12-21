const convertUnixTimestamp = (timestamp: any) => {
  const d = new Date(timestamp * 1000);
  const hours: any = ('0' + d.getHours()).slice(-2);
  const minutes: string = ('0' + d.getMinutes()).slice(-2);
  return `${hours}:${minutes} ${hours > 12 ? 'PM' : 'AM'}`;
};

export {
  convertUnixTimestamp
};
