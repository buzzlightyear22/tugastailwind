const express = require('express')
var cors = require('cors')
const app = express();
const port = 8200;
app.use(express.json());
app.use(cors())

app.get("/getlist", (req, res) => {
    res.send({judul_skripsi:[{nim: 1102200049, nama: "Muhammad Ardiansyah Al Faiz", judul:"Perancangan Perangkat Lunak di Sistem Jual Beli"}
                            ,{nim: 1102202064, nama: "Alif Andika Amin", judul:"Analisis Perilaku AI di game Petualangan"}
                            ,{nim: 1102200018, nama: "Dhery Akbar Ramadhan", judul:"Membuat Robot kasir di Alfamart"}]})
});
app.post("/sensorpost", (req, res) => {
    res.send(
        "suhu yang diterima adalah " +
        req.body.suhu + "\n" +
        "kelembapan yang diterima adalah " +
        req.body.kelembapan
    )
});
app.get("/sensor2", (req, res) => {
    res.send("sensor2")
});
app.get("/sensor3", (req, res) => {
    res.send({ sensor3: 100 })
})
app.listen(port, () => {
    console.log(`cli-nodejs-api listening at http://localhost:${port}`)
});