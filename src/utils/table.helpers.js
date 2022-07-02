export const checkAllRows = (e, clientData) => {
  const newData = [...clientData];
  newData.forEach((client) => {
    client.isChecked = e.target.checked;
  });
  return newData;
};

export const checkEachRow = (e, clientData) => {
  const newData = [...clientData];
  newData.forEach((client) => {
    if (client.id === Number(e.target.value)) {
      client.isChecked = e.target.checked;
    }
  });
  return newData;
};

export const roundTwoDecimals = (num) => {
  if (Number(num)) return (Math.round(num * 100) / 100).toFixed(2);
};
