// Härifrån startar vi upp vår webbshop
const {
    app,
    port
} = require("./src/server");

// Kicka igång server
const server = app.listen(port, () => console.log(`Listening on port ${port}`));