const express = require("express");
const app = express();
const port = 4000;
const users = [
  { firstName: "Reimu",  lastName: "Hakurei"    },
  { firstName: "Marisa", lastName: "Kirisame"   },
  { firstName: "Sanae",  lastName: "Kochiya"    },
  { firstName: "Sakuya", lastName: "Izayoi"     },
  { firstName: "Momiji", lastName: "Inubashiri" },
  { firstName:"Nadhir" , lastName:"Yezza"}
];
// req is short for request
// res is short for response
app.get("/api", (req, res) => {
 // res.json({ message: "Hello World !" });
 res.json(users)
});

// this needs to be below the other code blocks
app.listen( port, () => console.log(`Listening on port: ${port}`) );