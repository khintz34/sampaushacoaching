export const sendContactForm = async (data: any) => {
  fetch("/api/Contact", {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  });
  location.href = "http://localhost:3000";
};
