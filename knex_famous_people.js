// const connectionString = 'postgres://vagrant@localhost:5432/w4d1'

const settings = require("./settings");
const knex = require("knex")({
  client: 'pg',
  connection: {
   user     : settings.user,
   password : settings.password,
   database : settings.database,
   host     : settings.host,
   port     : settings.port,
   uri      : settings.uri,
   ssl      : true 
  }
});

  // const q = `
  //   SELECT *
  //     FROM famous_people
  //     WHERE UPPER(last_name) = UPPER($1) 
  //     OR UPPER(first_name) = UPPER($1);
  // `;

knex.select()
    .from('famous_people')
    .where('last_name', process.argv[2])
    .orWhere('first_name', process.argv[2])
    .then((results) => {
    console.log("Found 1 person(s) by the name " + results[0].first_name, results[0].last_name + ", Birthdate: " + results[0].birthdate)
    })
    .catch((error) => { 
      console.log("An error occured.", error)
    })
knex.destroy();

// knex.connect((err) => {
//   if (err) {
//     return console.error("Connection Error", err);
//   }
//   console.log("Searching...") 
// knex.query(q, [process.argv[2]], (err, result) => {
//     if (err) {
//       return console.error("error running query", err);
//     }
//     console.log("Found 1 person(s) by the name " + result.rows[0].first_name, result.rows[0].last_name + ", Birthdate: " + result.rows[0].birthdate)
//   knex.end();
//   });
// });