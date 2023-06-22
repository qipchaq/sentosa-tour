export const sendMail = async (data: any) => {
  // console.log(JSON.stringify(data));
  await fetch("/api/sendMail", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(data),
  });
};
