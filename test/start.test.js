const { GhostClient } = require("../dist/index");

const bot = new GhostClient({
    token: "our-0token",
    debug: true
});

bot.start()