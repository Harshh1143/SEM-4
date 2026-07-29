// "Create a React component called StockDetail that allows users to input and display
// stock information. The component should have the following features:
// Input fields for the following stock details:
// Name
// Purchase Price
// Purchase Quantity
// Selling Price
// Selling Quantity
// When the user clicks the ""Add Stock"" button, the component should:
// 1. Check if the selling quantity is greater than the purchase quantity it will display an
// alert message: "Selling quantity cannot be more than purchase quantity."
// 2. If the selling quantity is equal to or less than the purchase quantity, add a new stock
// entry into a table below the input fields.
// Table contains detail of Name,Purchase Price,Purchase Quantity,Selling Price,Selling
// Quantity and Profit/Loss
// 3. Display ""Invested"" in the Profit/Loss column if the selling quantity is less than the
// purchase quantity; otherwise, calculate and display the amount of profit or loss .
// 4. Style the profit/loss value in green if it's a profit and in red if it's a loss.
// Write the StockDetail component and any necessary state management code. You can
// use required React and CSS as per your style."

import { useState } from "react";

export default function P19() {
  const [formdata, setFormdata] = useState({});
  const [res, setRes] = useState(0);
  const [stocks, setStocks] = useState([]);

  function handleChange(e) {
    const { name, value } = e.target;
    setFormdata({ ...formdata, [name]: value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (
      Number(formdata.selling_quantity) > Number(formdata.purchase_quantity)
    ) {
      alert("Selling quantity cannot be more than purchase quantity.");
      return;
    } else {
      setRes(
        (Number(formdata.selling_price) - Number(formdata.purchase_price)) *
          Number(formdata.selling_quantity),
      );
      setStocks([...stocks, { ...formdata, res }]);
      setFormdata({
        name: "",
        purchase_price: "",
        purchase_quantity: "",
        selling_price: "",
        selling_quantity: "",
      });
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        Name :{" "}
        <input
          type="text"
          name="name"
          onChange={handleChange}
          value={formdata.name || ""}
        />{" "}
        <br />
        Purchase Price :{" "}
        <input
          type="number"
          name="purchase_price"
          value={formdata.purchase_price || ""}
          onChange={handleChange}
        />{" "}
        <br />
        Purchasing Quantity :{" "}
        <input
          type="number"
          name="purchase_quantity"
          value={formdata.purchase_quantity || ""}
          onChange={handleChange}
        />{" "}
        <br />
        Selling Price :{" "}
        <input
          type="number"
          name="selling_price"
          value={formdata.selling_price || ""}
          onChange={handleChange}
        />{" "}
        <br />
        Selling Quantity :{" "}
        <input
          type="number"
          name="selling_quantity"
          value={formdata.selling_quantity || ""}
          onChange={handleChange}
        />{" "}
        <br />
        <input type="submit" /> Save
      </form>
      <table>
        <tr>
          <td>Name</td>
          <td>Purchase Price</td>
          <td>Purchase Quantity</td>
          <td>Selling Price</td>
          <td>Selling Quantity</td>
        </tr>
        {stocks.map((f) => (
          <tr key={f.id}>
            <td>{f.name}</td>
            <td>{f.purchase_price}</td>
            <td>{f.purchase_quantity}</td>
            <td>{f.selling_price}</td>
            <td>{f.selling_quantity}</td>
            <td style={{ color: `${res > 0 ? "green" : "red"} ` }}>
              {res > 0 ? `Profit ${res}` : `Loss ${res}`}
            </td>
          </tr>
        ))}
      </table>
    </div>
  );
}
