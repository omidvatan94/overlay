document.addEventListener('click', handleSizeClick)

function handleSizeClick(event){
  console.log(event.target.attributes[3].nodeValue)
}

var list = document.querySelectorAll('[aria-label="Available"]');

event.target.attributes.3.nodeValue = "Available"
