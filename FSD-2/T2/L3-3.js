const expr = require("express");
const app = expr();

app.use(expr.static('./'));

app.listen(7008, () => {
    console.log("Server running on http://localhost:7008");
});