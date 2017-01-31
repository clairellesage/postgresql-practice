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

//     var insertStuff = {first_name: process.argv[2], last_name: process.argv[3], birthdate: process.argv[4]}
// knex.('famous_people')
//     .insert(insertStuff)
//     .then((results) => {
//     console.log(results)
//     // })
//     // .catch((error) => { 
//     //   console.log("An error occured.", error)
//     // })
//     process.ext
// });
// knex.destroy();


var insert1 = {first_name: process.argv[2], last_name: process.argv[3], birthdate: process.argv[4]}
knex('famous_people').insert(insert1)
.then((result)=>{
  console.log(result.first_name)
  process.ext
});

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