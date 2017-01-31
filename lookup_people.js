const pg = require("pg");
const settings = require("./settings"); // settings.json

const client = new pg.Client({
   user     : settings.user,
   password : settings.password,
   database : settings.database,
   host     : settings.host,
   port     : settings.port,
   ssl      : true 
});

  const q = `
    SELECT *
      FROM famous_people
      WHERE UPPER(last_name) = UPPER($1) 
      OR UPPER(first_name) = UPPER($1);
  `;

client.connect((err) => {
  if (err) {
    return console.error("Connection Error", err);
  }
  console.log("Searching...") 
  client.query(q, [process.argv[2]], (err, result) => {
    if (err) {
      return console.error("error running query", err);
    }
    console.log("Found 1 person(s) by the name " + result.rows[0].first_name, result.rows[0].last_name + ", Birthdate: " + result.rows[0].birthdate)
    client.end();
  });
});