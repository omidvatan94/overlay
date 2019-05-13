let name = document.querySelector('.product-name').innerText
let originalPrice = parseFloat(document.querySelector('.price-sales').innerText.replace('Sale Price:', '').replace('$', ''))
let discountPrice = originalPrice - (originalPrice * .15)

document.addEventListener('click', handleSizeClick)
document.getElementsByTagName("body")[0].innerHTML += `<div id="overlay" style="
                                                        position: fixed; /* Sit on top of the page content */
                                                        display: none; /* Hidden by default */
                                                        width: 100%; /* Full width (cover the whole page) */
                                                        height: 100%; /* Full height (cover the whole page) */
                                                        top: 0;
                                                        left: 0;
                                                        right: 0;
                                                        bottom: 0;
                                                        background-color: rgba(0,0,0,0.5); /* Black background with opacity */
                                                        z-index: 2; /* Specify a stack order in case you're using a different order for other elements */
                                                        cursor: pointer; /* Add a pointer on hover */
                                                        ">
                                                          <div id="modal" style="
                                                            position: fixed;
                                                            display: none;
                                                            background-color: rgb(255,255,255);
                                                            left: 50%;
                                                            top: 50%;
                                                            transform: translate(-50%, -50%);
                                                            padding: 20px;
                                                            ">
                                                              <h1>Get this ${name} for $${discountPrice} with a 15% discount!</h1>
                                                          </div>
                                                      </div>`

function handleSizeClick(e){
  e.preventDefault()
  let target = e.target.innerText
  if(target === "S" || target === "M" || target === "L" || target === "XL" || target === "XXL"){
    clickedSize()
  } else {
    console.log("not size")
  }
}

function clickedSize(){
  document.getElementById("overlay").style.display = "block";
  document.getElementById("modal").style.display = "block";
}
