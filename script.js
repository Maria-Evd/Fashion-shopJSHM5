const url = "./data.json";
async function getData(url) {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error.message);
  }
}

document.addEventListener("DOMContentLoaded", async (e) => {
  const data = await getData(url);
  const list = document.querySelector(".card-list");
  data.forEach(element => {
    list.insertAdjacentHTML(
      'beforeend',
            `<div class="card">
							<div class="img">
								<img src="${element.img}" alt="${element.title}" />
								<div class="add-cart">
									<button>
										<img src="./img/cart.png" alt="Cart" />Add to Cart
									</button>
								</div>
							</div>
							<div class="info">
								<h3>${element.title}</h3>
								<p>${element.description}</p>
								<span class="price">$${element.price}</span>
							</div>
						</div>`
    )
  });
});
