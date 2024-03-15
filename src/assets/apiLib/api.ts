export const sendContactForm = async (data: any) => {
  console.log(data);
  fetch("/api/Contact", {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  });
};
