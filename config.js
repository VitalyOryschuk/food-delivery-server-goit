const dbUser = "Pataska";
const dbPassword = "fhbz8887";

module.exports = {
  port: 8080,
  dbUser,
  dbPassword,
  databaseUrl: `mongodb+srv://${dbUser}:${dbPassword}@clustervitaly-y2ld9.mongodb.net/test?retryWrites=true&w=majority`,
};
