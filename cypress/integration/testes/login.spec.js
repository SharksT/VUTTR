describe("Login", function() {
  const email = "f1xygt0tiluz46o0lulz1e";
  const password = "teste";

  before(function() {
    cy.request("POST", "/", {
      email,
      password
    })
      .its("body.token")
      .as("teste")
      .should("exist");
  });

  it("Login testing", function() {
    cy.request({
      url: "/tools",
      method: "POST",
      headers: { Authorization: "Bearer " + this.teste },
      body: {
        title: "Notio2n",
        link: "https://notion.so",
        description:
          "All in one tool to organize teams and ideas. Write, plan, collaborate, and get organized. ",
        tags: [
          "organization",
          "planning",
          "collaboration",
          "writing",
          "calendar",
          "node"
        ]
      }
    })
      .its("body._id")
      .should("exist")
      .as("id0");
    cy.request({
      url: "/tools",
      method: "POST",
      headers: { Authorization: "Bearer " + this.teste },
      body: {
        title: "json-server",
        link: "https://github.com/typicode/json-server",
        description:
          "Fake REST API based on a json schema. Useful for mocking and creating APIs for front-end devs to consume in coding challenges.",
        tags: ["api", "json", "schema", "node", "github", "rest"]
      }
    })
      .its("body._id")
      .should("exist")
      .as("id1");
  });
  it("Tag testing", function() {
    cy.request({
      url: "/tools?tag=node",
      method: "GET",
      headers: { Authorization: "Bearer " + this.teste }
    })
      .its("body")
      .each(tool => {
        expect(tool.tags).to.contain("node");
      });
  });

  it("Delete testing", function() {
    cy.request({
      url: `/tools/${this.id0}`,
      method: "POST",
      headers: { Authorization: "Bearer " + this.teste }
    })
      .its("status")
      .should("equal", 200);
    cy.request({
      url: `/tools/${this.id1}`,
      method: "POST",
      headers: { Authorization: "Bearer " + this.teste }
    })
      .its("status")
      .should("equal", 200);
  });
  it("listing testing", function() {
    cy.request({
      url: `/tools/`,
      method: "GET",
      headers: { Authorization: "Bearer " + this.teste }
    })
      .its("body")
      .each(object => {
        expect(object._id).to.not.equal(this.id0);
        expect(object._id).to.not.equal(this.id1);
      });
  });
});
