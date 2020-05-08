
document.querySelectorAll(".change-devoured").forEach(button => {
  button.addEventListener('click', function (event) {
    const id = this.getAttribute('data-id')
    const newburger = this.getAttribute('data-newdevour')
    const name = this.getAttribute('name')

    fetch(`/api/burgers/${id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json'},
      body: JSON.stringify({burger_name: name, devoured: newburger})
    }).then(response => {
      if (response.ok) location.reload()
    })
  })
})


document.getElementById('create-form').addEventListener('submit', event => {
  event.preventDefault()
  const newBurger = {
    burgerName: document.getElementById('burger-name-input').value.trim()
  }  

  fetch(`/api/burgers`, {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(newBurger)
  }).then(response => {
      if (response.ok) location.reload()
  })

})
