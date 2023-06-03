export const sendMail = async (data) => {
  console.log(JSON.stringify(data));
  await fetch('/api/sendMail', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify(data),
  });
};
