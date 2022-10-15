const products = [
  { title: "PPLE", body: "this is  a apple" },
  { title: "bnana", body: "this is  a banana" },
  { title: "kiwi", body: "this is  a kiwi" },
];

function createProduct(product, callback) {
  setTimeout(() => {
    products.push(product);
    callback();
  }, 400);
}

function getProducts() {
  setTimeout(() => {
    let output = "";
    products.forEach((product) => {
      output += `<li>${product.title}</li>`;

      document.querySelector(".output").innerHTML = output;
    });
  }, 000);
}

createProduct({ title: "kurma", body: "this is a kurma" }, getProducts);
createProduct({ title: "kurma", body: "this is a kurma" }, getProducts);
createProduct({ title: "kurma", body: "this is a kurma" }, getProducts);
createProduct({ title: "kurma", body: "this is a kurma" }, getProducts);
createProduct({ title: "kurma", body: "this is a kurma" }, getProducts);
createProduct({ title: "kurma", body: "this is a kurma" }, getProducts);
createProduct({ title: "kurma", body: "this is a kurma" }, getProducts);
createProduct({ title: "kurma", body: "this is a kurma" }, getProducts);
createProduct({ title: "kurma", body: "this is a kurma" }, getProducts);
createProduct({ title: "kurma", body: "this is a kurma" }, getProducts);
createProduct({ title: "kurma", body: "this is a kurma" }, getProducts);
createProduct({ title: "kurma", body: "this is a kurma" }, getProducts);
createProduct({ title: "kurma", body: "this is a kurma" }, getProducts);
createProduct({ title: "kurma", body: "this is a kurma" }, getProducts);
createProduct({ title: "kurma", body: "this is a kurma" }, getProducts);
createProduct({ title: "kurma", body: "this is a kurma" }, getProducts);
createProduct({ title: "kurma", body: "this is a kurma" }, getProducts);
createProduct({ title: "kurma", body: "this is a kurma" }, getProducts);
createProduct({ title: "kurma", body: "this is a kurma" }, getProducts);
createProduct({ title: "kurma", body: "this is a kurma" }, getProducts);
createProduct({ title: "kurma", body: "this is a kurma" }, getProducts);
createProduct({ title: "kurma", body: "this is a kurma" }, getProducts);
createProduct({ title: "kurma", body: "this is a kurma" }, getProducts);
createProduct({ title: "kurma", body: "this is a kurma" }, getProducts);
createProduct({ title: "kurma", body: "this is a kurma" }, getProducts);
createProduct({ title: "kurma", body: "this is a kurma" }, getProducts);
createProduct({ title: "kurma", body: "this is a kurma" }, getProducts);
createProduct({ title: "kurma", body: "this is a kurma" }, getProducts);
createProduct({ title: "kurma", body: "this is a kurma" }, getProducts);
createProduct({ title: "kurma", body: "this is a kurma" }, getProducts);
createProduct({ title: "kurma", body: "this is a kurma" }, getProducts);
createProduct({ title: "kurma", body: "this is a kurma" }, getProducts);
createProduct({ title: "kurma", body: "this is a kurma" }, getProducts);

createProduct({ title: "kurma", body: "this is a kurma" }, getProducts);
createProduct({ title: "kurma", body: "this is a kurma" }, getProducts);
createProduct({ title: "kurma", body: "this is a kurma" }, getProducts);
createProduct({ title: "kurma", body: "this is a kurma" }, getProducts);
createProduct({ title: "kurma", body: "this is a kurma" }, getProducts);
createProduct({ title: "kurma", body: "this is a kurma" }, getProducts);
createProduct({ title: "kurma", body: "this is a kurma" }, getProducts);
createProduct({ title: "kurma", body: "this is a kurma" }, getProducts);
createProduct({ title: "kurma", body: "this is a kurma" }, getProducts);
createProduct({ title: "kurma", body: "this is a kurma" }, getProducts);
createProduct({ title: "kurma", body: "this is a kurma" }, getProducts);
createProduct({ title: "kurma", body: "this is a kurma" }, getProducts);
createProduct({ title: "kurma", body: "this is a kurma" }, getProducts);
createProduct({ title: "kurma", body: "this is a kurma" }, getProducts);
createProduct({ title: "kurma", body: "this is a kurma" }, getProducts);
createProduct({ title: "kurma", body: "this is a kurma" }, getProducts);
createProduct({ title: "kurma", body: "this is a kurma" }, getProducts);
createProduct({ title: "kurma", body: "this is a kurma" }, getProducts);
createProduct({ title: "kurma", body: "this is a kurma" }, getProducts);
createProduct({ title: "kurma", body: "this is a kurma" }, getProducts);
createProduct({ title: "kurma", body: "this is a kurma" }, getProducts);
createProduct({ title: "kurma", body: "this is a kurma" }, getProducts);
createProduct({ title: "kurma", body: "this is a kurma" }, getProducts);
createProduct({ title: "kurma", body: "this is a kurma" }, getProducts);
createProduct({ title: "kurma", body: "this is a kurma" }, getProducts);
createProduct({ title: "kurma", body: "this is a kurma" }, getProducts);
createProduct({ title: "kurma", body: "this is a kurma" }, getProducts);
createProduct({ title: "kurma", body: "this is a kurma" }, getProducts);
createProduct({ title: "kurma", body: "this is a kurma" }, getProducts);
createProduct({ title: "kurma", body: "this is a kurma" }, getProducts);
createProduct({ title: "kurma", body: "this is a kurma" }, getProducts);
