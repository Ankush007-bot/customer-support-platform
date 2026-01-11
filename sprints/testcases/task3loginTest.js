🧪 FINAL CORRECT TEST (Admin Login)

📁 tests/admin.login.test.js

const request = require("supertest");
const app = require("../app");

// mock admin data
jest.mock("../data/admin", () => ({
  email: "admin@test.com",
  password: "123456",
}));

// mock jwt
jest.mock("jsonwebtoken", () => ({
  sign: jest.fn(() => "fake-jwt-token"),
}));

describe("Admin Login API", () => {
  it("should login admin and return token", async () => {
    const res = await request(app)
      .post("/api/admin/login")
      .send({
        email: "admin@test.com",
        password: "123456",
      });

    expect(res.statusCode).toBe(200);
    expect(res.body.token).toBe("fake-jwt-token");
    expect(res.body.message).toBe("Login successful");
  });

  it("should return 401 for wrong credentials", async () => {
    const res = await request(app)
      .post("/api/admin/login")
      .send({
        email: "wrong@test.com",
        password: "wrong",
      });

    expect(res.statusCode).toBe(401);
    expect(res.body.message).toBe("Invalid credentials");
  });

  it("should return 401 if password is wrong", async () => {
    const res = await request(app)
      .post("/api/admin/login")
      .send({
        email: "admin@test.com",
        password: "wrong",
      });

    expect(res.statusCode).toBe(401);
  });
});