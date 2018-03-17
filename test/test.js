const assert = require("assert");
const getEmails = require("../index");

describe("main", function() {
  it("Should return array of emails", function() {
    const validEmails = [
      "my-email@example.com",
      "email@example.com",
      "firstname.lastname@example.com",
      "firstname-lastname@example.com",
      "firstname+lastname@example.com",
      "email@subdomain.example.com",
      "1234567890+letter@example.com",
      "1234567890@example.com",
      "email@example-one.com",
      "_______@example.com",
      "email@example.co.uk"
    ];

    const text = `
        "my-email@example.com",
        "email@example.com",
        "firstname.lastname@example.com",
        "firstname-lastname@example.com",
        "firstname+lastname@example.com",
        "email@subdomain.example.com",
        "1234567890+letter@example.com",
        "1234567890@example.com",
        "email@example-one.com",
        "_______@example.com",
        "email@example.co.uk"
      `;
    assert.deepEqual(getEmails(text), validEmails);
  });

  it("Should return empty array", function() {
    const text = `
        plainaddress
        @example.com
        email.example.com
        email.@example.com
        email@example
        email@-example.com
        email@111.222.333.44444
        email@example..com
        wrong@.email.com
        wrong@email.
        mail@mail^.com
    `;
    assert.deepEqual(getEmails(text), []);
  });
});
