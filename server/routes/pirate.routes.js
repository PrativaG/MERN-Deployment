const PirateCtl = require("../controllers/pirate.controllers");
const  {authenticate} = require("../config/jwt.config");

module.exports = app => {
    app.get("/api/pirates", authenticate, PirateCtl.getAllPirates);
    app.post("/api/pirates", authenticate, PirateCtl.createPirate);
    app.delete("/api/pirates/delete/:id", PirateCtl.deletePirate);
    app.put("/api/pirates/edit/:id", PirateCtl.editOnePirate);
    app.get("/api/pirates/:id", authenticate, PirateCtl.getOnePirate);
}