/*
    *Client side fetch 
        - patch method
*/
document.querySelectorAll(".change-devoured").forEach((button) => {
  button.addEventListener("click", function (event) {
    // update burger name and devoured using id parameter
    const id = this.getAttribute("data-id");
    const newburger = this.getAttribute("data-newdevour");
    const name = this.getAttribute("name");

    fetch(`/api/burgers/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ burger_name: name, devoured: newburger }),
    }).then((response) => {
      if (response.ok) location.reload();
    });
  });
});
/*
      *Client side fetch 
        - post method
*/
document.getElementById("create-form").addEventListener("submit", (event) => {
  event.preventDefault();
  // get text area input data
  const newBurger = {
    burgerName: document.getElementById("burger-name-input").value.trim(),
  };

  // post data (newBurger) to the server
  fetch(`/api/burgers`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(newBurger),
  }).then((response) => {
    if (response.ok) location.reload();
  });
});
