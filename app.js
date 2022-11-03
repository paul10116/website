let shop = document.getElementById("shop");

fetch("products.json")
  .then((res) => res.json())
  .then((products) => {
    products.map((product) => {
      let productElement = document.createElement("div");

      productElement.innerHTML = ` 
        <div class="product-card">
          <img src="${product.image}"/>
          <div class="description">
            <h4>${product.model}</h4>
            <div class="star">
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
            </div>
            <p> In store: ${product.in_store}</p>
          </div>
        </div>`;

      shop.append(productElement);
    });
  });
