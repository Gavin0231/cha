function getQueryParam(name) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(name);
}

const id = getQueryParam("id");

fetch("products.json")
  .then(response => response.json())
  .then(data => {
    const product = data[id];
    if (product) {
      document.getElementById("name").innerText = product.name;
      document.getElementById("price").innerText = product.price;
    } else {
      document.getElementById("name").innerText = "未找到该产品";
      document.getElementById("price").innerText = "";
    }
  });
