import App from "./app";

test("should return SERVE", async () => {
  expect.assertions(2);
  const options = {
    logger: true,
  };
  const app = App(options);
  const result = app.inject({
    method: "GET",
    url: "/",
  });
  expect((await result).statusCode).toBe(200);
  expect((await result).body).toBe("SERVE");
});
