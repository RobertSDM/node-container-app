const express = require("express")
const app = express()

app.get("/", (req, res) => {
    res.send("Implantação efetuada com sucesso. Bom trabalho!")
})


app.listen(process.env.PORT || 4500, () => {
    console.log("rodando em localhost:4500");
})
