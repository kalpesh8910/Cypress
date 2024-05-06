describe("post user request", () => {
  let accessToken =
    "e47f0528fe6a638962cb118cee929df0f1e3dde530dfa70093efbd031774e123";
  let randomText = "";
  let testEmail = "";

  it("create user test", () => {
    var pattern = "ABCDEFGHIJKLMNOPRQSTYabcdefghijklmalpghekejgjn";
    for (var i = 0; i < 10; i++)
      randomText += pattern.charAt(Math.floor(Math.random() * pattern.length));
    cy.log(randomText);
    testEmail = randomText + "@yopmail.com";

    cy.fixture('createuser').then((payload) => {
      cy.request({
        method: "POST",
        url: "https://gorest.co.in/public/v2/users",
        headers: {
          authorization: "Bearer " + accessToken,
        },
        body: {
          "name": payload.name,
          "gender": payload.gender,
          "email": testEmail,
          "status": payload.status,
        },
      }).then((res) => {
        cy.log(JSON.stringify(res));
        expect(res.status).to.eq(201);
        expect(res.body.email).to.eq(testEmail);
        expect(res.body).to.have.property("name", payload.name);
        expect(res.body.gender).to.eq(payload.gender);
        expect(res.body).to.have.property("email", testEmail);
        expect(res.body).to.have.property("gender", payload.gender);
        expect(res.body).to.have.property("status", payload.status);

        const userID = res.body.id;
        cy.log("user ID is:- "+userID);

        // 2. get user (GET call)
        cy.request({

          method : 'GET',
          url    : 'https://gorest.co.in/public-api/users/'+userID,
          headers: {
            authorization: "Bearer " + accessToken,
        }
        }).then((res)=>{

          expect(res.status).to.eq(200);
          expect(res.body.data.id).to.eq(userID);
          expect(res.body.data).to.have.property("id", userID);
          expect(res.body.data).to.have.property("name", payload.name);
          expect(res.body.data).to.have.property("gender", payload.gender);
          expect(res.body.data).to.have.property("status", payload.status);
       
        })
    
      });
    });
  });
});
