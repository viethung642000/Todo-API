import request from "supertest";
import app from "../app";
import { AppDataSource } from "../infrastructure/database/dataSource";

beforeAll(async () => {
  await AppDataSource.initialize();
});

afterAll(async () => {
  await AppDataSource.destroy();
});

describe("Task API", () => {
  it("should create a new task successfully", async () => {
    const res = await request(app)
      .post("/api/task/create")
      .send({ name: "Valid Task", startDate: "2025-02-21" });
    expect(res.status).toBe(201);
    expect(res.body.data[0].name).toBe("Valid Task");
  });

  it("should return 400 if name is empty", async () => {
    const res = await request(app)
      .post("/api/task/create")
      .send({ name: "", startDate: "2025-02-21" });
    expect(res.status).toBe(400);
  });

  it("should return 400 if name exceeds 80 characters", async () => {
    const longName = "a".repeat(81);
    const res = await request(app)
      .post("/api/task/create")
      .send({ name: longName, startDate: "2025-02-21" });
    expect(res.status).toBe(400);
  });

  it("should return 400 if end date is provided without start date", async () => {
    const res = await request(app)
      .post("/api/task/create")
      .send({ name: "Task", endDate: "2025-02-22" });
    expect(res.status).toBe(400);
  });

  it("should get all tasks", async () => {
    const res = await request(app).get("/api/task/get-all");
    expect(res.status).toBe(200);
    expect(Array.isArray(res.body.data)).toBeTruthy();
  });
});
