const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({
    path: './config.env'
});

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

module.exports = {
    SESSION_ID: process.env.SESSION_ID || 'PRINCE-MDX!H4sIAAAAAAAAA5VU2bKiSBD9l3rVaAFFhIgbMSwiiwuL+8Q8IBRQymZVgWKH/z6B997ufpjpucNTUcvJk3lO5ndQlIhAG7ZA+g4qjJqAwm5J2woCCSh1HEMM+iAKaAAkAJXe2ecfQ8NgV85ikJI0LyfKXOE37O3MiqNdljM9f1boOnkDzz6o6lOGwt8Axhwb6lnC1bnqLXLjEhM+iWtu8tD0MRHmcplbpxQdw01WvoFnhxggjIpkWqUwhzjIbNg6AcJfox/I/tZf5Pl17ImxNQ5Kx3JrocdaibzrHT3HUYU0da5rded+jX7dIK/IrAOBjIV71mnbO+t2Q66i2lPKaWIqjU7d0VRb3tx3+gQlBYzMCBYU0fbLdZ+oGqqb8XZODtnAKZThY3U8cyJizDi9Wl4052dGTa43Rze/Rvze02VlQJbHQiYJbmazgn24S/26HKXrla1hp1LqKhD25/PkV+IO/vTK5f/UPZxPcZbbdu9w9gW5WpYpbO95I7jDcGDaM1SxyXF9wc6cTb5oG1EU1UFTjqMUO1Emcnub5JuVt7+cL16SReu5daSupVOZ+Uk/oDX+HcsVY49n99mKgR5/jF1jqE7y0wmmke542J4KFyReR4VnWebhNr2pA6Wk9xM3Gq01OV0ODtpZK/gDs/ANL6BFYu0jBQ+V29srowtszQhI7LMPMEwQoTigqCxee9yoD4Ko8WGIIX2VF1T33mkyMcbqTWO3Al36D9Z3hwvjMtVUdbsebtspad3dPrQvb6APKlyGkBAYGYjQErcLSEiQQAKkP//qgwLe6btwXbgh2wcxwoRuirrKyiD6VPXzMAjDsi6o3xah2i0gBhLzcxtSioqEdHWsiwCHKWqgmgaUACkOMgJ/ZAgxjIBEcQ1/dK1aRl3hx8Z+rB5sE/RB/hIERUACPCOOhowoCtxQGjJ/kG+3DjWoqm8FpKAPiqC7DAJEYZiCPsherziB53lO4BiWnwjCuHvZHTx/EO7wI0gDlBEgAdVZKVUUzqaLnTkIb7OZ7CaymsjgZ4KfTnlXwuK0fPVw3LXD6HvzarZGkjxC1zMOqFS0tb9D+x6zyKyHN3r7BxAgAW9mIZk3qdgm68McNy2PdviS1+hiTjCt3N0+eWwetX/f7OGtuNi3cDNCBcSoOayOOT1BbqQ73GOLTureX/T0q6ZO5eStixbBBoXw12B7S28bZT6um/tq27JrhZWZg3U716HWNupmH0INFstc4A+napaKqxFZaRR7xvh4E9linqj2OXbCWN+OZ8ljftGW6XWlfnj41UPZx+xCL3d10nW/MYKvUfCh0X9J+c67Mxzz7P8C8TFb/qU/FT9K+DN5MNOHqGxbGy3SkbkYTqceZ15ll2GyMhtQzfJDBoLn868+qLKAxiXOgQRIfgpAH+Cy7uxrFnH5m0iqnJiKm6hd1llAqPyzJdYoh4QGeQUkVhA4ZsQPReb9loPLyghICiQwTJyNden83cpV5dOAfnYYkLvPOI3B828dAYmHfQcAAA==', // 👈👈paste your session id here
    PORT: process.env.PORT || 8000,
    SESSION_NAME: process.env.SESSION_NAME || "auth_info_baileys"
};
