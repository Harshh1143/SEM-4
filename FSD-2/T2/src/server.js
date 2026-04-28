const express = require('express');
const app = express();
app.use(express.static('../public',{index:'form.html'}));

app.listen(7008, () => {
    console.log("Server running on http://localhost:7008");
});