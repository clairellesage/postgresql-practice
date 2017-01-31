const pg = require("pg");
const settings = require("./settings"); // settings.json

const client = new pg.Client({
   user     : settings.user,
   password : settings.password,
   database : settings.database,
   host     : settings.host,
   port     : settings.port,
   ssl : true
  //uri : "postgres://zbqrpispdtiazy:50718b753c32d0479424cbf99dd6795ab1bc4ceb075df58f1caea691be433b13@ec2-184-73-222-194.compute-1.amazonaws.com:5432/d3aap5lth6lsus"
});

client.connect((err) => {
  if (err) {
    return console.error("Connection Error", err);
  }
  client.query("SELECT $1::int AS number", ["1"], (err, result) => {
    if (err) {
      return console.error("error running query", err);
    }
    console.log(result.rows[0].number); //output: 1
    client.end();
  });
});