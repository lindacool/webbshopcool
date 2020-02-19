const supertest = require("supertest");
const { app, port } = require("../src/server"); // HÄmtar in app och port från server.js

describe("simple test, doest it work", () => {
  //Huvudrubrik till våra test
  let server;

  beforeEach(() => {
    server = app.listen(port, () => console.log("Testing server up"));
  });

  it("should respond to /", done => {
    // Ett test för att se om server svara på get
    supertest(server)
      .get("/")
      .expect(200, done);
  });

  afterEach(done => {
    // afterEach körs efter varje 'it' test.
    server.close(done);
  });
});
