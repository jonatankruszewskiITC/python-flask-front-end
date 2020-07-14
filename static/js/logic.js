console.log("hello");
button = document.getElementById("submit-button");

button.addEventListener("click", async (e) => {
  console.log("Launching Backend");
  e.preventDefault();
  payload = {};
  payload.instrument = document.getElementById("instrument").value;
  payload.quantity = document.getElementById("amount").value;
  console.log(payload);
  url = `${window.location.href}api/post`;
  console.log(url);

  response = await fetch(url, {
    method: "POST",
    mode: "cors",
    cache: "no-cache",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
    },
    redirect: "follow",
    referrerPolicy: "no-referrer", 
    body: JSON.stringify(payload),
  }).then((response) => response.json());
  console.log(response);
});
