const name = document.querySelector('.product-name').innerText
const originalPrice = parseFloat(document.querySelector('.price-sales').innerText.replace('Sale Price:', '').replace('$', ''))
const discountPrice = parseFloat(originalPrice - (originalPrice * .15)).toFixed(2)

document.addEventListener('click', handleSizeClick)
document.getElementsByTagName("body")[0].innerHTML += `<div id="overlay" style="
                                                        position: fixed;
                                                        display: none;
                                                        width: 100%;
                                                        height: 100%;
                                                        top: 0;
                                                        left: 0;
                                                        right: 0;
                                                        bottom: 0;
                                                        background-color: rgba(0,0,0,0.5);
                                                        z-index: 2;
                                                        cursor: pointer;
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
                                                              <br>
                                                              <button onclick="window.location.href = 'https://www.marmot.com/cart';">Go to Cart</button>
                                                              <button onclick="closeModal()" style="float:right">Close</button>
                                                          </div>
                                                      </div>`

function handleSizeClick(e){
  e.preventDefault()
  let available = e.target.attributes[3].nodeValue
  if(available === "Available"){
    openModal()
  }
}

function openModal(){
  document.getElementById("overlay").style.display = "block";
  document.getElementById("modal").style.display = "block";
}

function closeModal(){
  document.getElementById("overlay").style.display = "none";
  document.getElementById("modal").style.display = "none";
}
