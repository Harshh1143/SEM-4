// You are tasked with creating a basic Express.js application for a small online store. The
// application should have the following features:
// 1) Create a server using Express.js that listens on port 3000. Set up a route to display a
// welcome message on the homepage ("/") when a user visits it.
// 2)Create a route to display a list of products ("/products"). You should define an array of
// product objects with properties like "name," "description," and "price."
// 3)Create a route handler that renders this list of products in an HTML format.
// Implement a dynamic route for product details ("/products/:id").
// 4)Handle 404 errors by displaying a custom error page when a user tries to access a nonexistent route.
// 5)Your task is to write the Express.js code to achieve the above functionality.
// 6)Please make sure to include all the necessary dependencies and set up the Express
// application correctly.
// Note: You can use any template engine (e.g. Pug) of your choice to render HTML
// pages, or you can send plain HTML as a response. Ensure that you have installed the
// required packages and set up the project structure accordingly. Write the Express.js code
// to implement the features mentioned above.

const express = require("express");
const app = express();

const product = [
  {
    id: 1,
    name: "Laptop",
    description: "Dell Inspiron 15",
    price: 65000,
  },
  {
    id: 2,
    name: "Mobile",
    description: "Samsung Galaxy S24",
    price: 55000,
  },
  {
    id: 3,
    name: "Headphones",
    description: "Boat Rockerz",
    price: 2000,
  },
];

app.get("/", (req, res) => {
  res.send("<h2>Welcome user </h2> <a href='/products'>Products</a>  ");
});

app.get("/products", (req, res) => {
  res.write("<h1>List of products </h1>");
  let html = ""
  product.map((p) => {
    html = html + `
      <li>
            <ul>
                Name : ${p.name} 
                Description : ${p.description}
                Price : ${p.price}
                <a href='/products/${p.id}'>Details</a>
            </ul>
        </li>
        `;
  });

  res.write(html);
  res.send()
});
app.get("/products/:id", (req, res) => {
  const id = Number(req.params.id);
  const product1 = product.find((p) => id === p.id);
  if (!product1) {
    return res.status(404).send("<h1>Product not found </h1>");
  } else {
    res.send(`
            <h1>${product1.name} 
            Description : ${product1.description} 
            Price : ${product1.price}
            </h1>
            <a href='/products'>Go Back </a>
            `);
  }
});
app.use((req, res) => {
  res.status(404).send(
    `
        <h1> Not found </h1>
        <a href='/'>Go to home </a>
        `,
  );
});

app.listen(3000);
