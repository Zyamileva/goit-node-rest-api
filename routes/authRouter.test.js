import mongoose from "mongoose";
import request from "supertest";
import app from "../app.js";

const { DB_HOST, PORT = 3000 } = process.env;

describe("test /api/users/login route", () => {
  beforeAll(async () => {
    await mongoose.connect(DB_HOST);
  });

  afterAll(async () => {
    await mongoose.connection.close();
  });

  test("test /api/users/login with valid data", async () => {
    const loginData = {
      password: "HHHvtdshjk55n",
      email: "elenazyamileva@gmail.com",
    };

    const { statusCode, body } = await request(app)
      .post("/api/users/login")
      .send(loginData);

    expect(statusCode).toEqual(200);
    expect(body).toEqual({
      token: expect.any(String),
      user: {
        email: "elenazyamileva@gmail.com",
        subscription: "starter",
      },
    });
  });
});
