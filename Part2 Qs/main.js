const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  // =========================
  // Q1 - Add User
  // POST /user
  // =========================

  if (req.method === "POST" && req.url === "/user") {
    let body = "";

    req.on("data", (chunk) => {
      body += chunk;
    });

    req.on("end", () => {
      const newUser = JSON.parse(body);

      const data = fs.readFileSync("./users.json", "utf-8");
      const users = JSON.parse(data);

      // Check if email already exists
      for (const id in users) {
        if (users[id].email === newUser.email) {
          res.writeHead(400, {
            "Content-Type": "application/json",
          });

          res.end(
            JSON.stringify({
              message: "Email already exists.",
            }),
          );

          return;
        }
      }

      // Create new ID
      let newId = 1;

      for (const id in users) {
        if (Number(id) >= newId) {
          newId = Number(id) + 1;
        }
      }

      // Add new user
      users[newId] = {
        id: newId,
        name: newUser.name,
        age: newUser.age,
        email: newUser.email,
      };

      // Save data
      fs.writeFileSync("./users.json", JSON.stringify(users, null, 2));

      res.writeHead(201, {
        "Content-Type": "application/json",
      });

      res.end(
        JSON.stringify({
          message: "User added successfully.",
        }),
      );
    });

    return;
  }

  // =========================
  // Q2 - Update User
  // PUT /user/:id
  // =========================

  if (req.method === "PUT" && req.url.startsWith("/user/")) {
    const id = req.url.split("/")[2];

    let body = "";

    req.on("data", (chunk) => {
      body += chunk;
    });

    req.on("end", () => {
      const updatedUser = JSON.parse(body);

      const data = fs.readFileSync("./users.json", "utf-8");
      const users = JSON.parse(data);

      // Check if user exists
      if (!users[id]) {
        res.writeHead(404, {
          "Content-Type": "application/json",
        });

        res.end(
          JSON.stringify({
            message: "User ID not found.",
          }),
        );

        return;
      }

      // Update name
      if (updatedUser.name !== undefined) {
        users[id].name = updatedUser.name;
      }

      // Update age
      if (updatedUser.age !== undefined) {
        users[id].age = updatedUser.age;
      }

      // Update email
      if (updatedUser.email !== undefined) {
        users[id].email = updatedUser.email;
      }

      // Save data
      fs.writeFileSync("./users.json", JSON.stringify(users, null, 2));

      res.writeHead(200, {
        "Content-Type": "application/json",
      });

      res.end(
        JSON.stringify({
          message: "User updated successfully.",
        }),
      );
    });

    return;
  }

  // =========================
  // Q3 - Delete User
  // DELETE /user/:id
  // =========================

  if (req.method === "DELETE" && req.url.startsWith("/user/")) {
    const id = req.url.split("/")[2];

    const data = fs.readFileSync("./users.json", "utf-8");
    const users = JSON.parse(data);

    // Check if user exists
    if (!users[id]) {
      res.writeHead(404, {
        "Content-Type": "application/json",
      });

      res.end(
        JSON.stringify({
          message: "User ID not found.",
        }),
      );

      return;
    }

    // Delete user
    delete users[id];

    // Save data
    fs.writeFileSync("./users.json", JSON.stringify(users, null, 2));

    res.writeHead(200, {
      "Content-Type": "application/json",
    });

    res.end(
      JSON.stringify({
        message: "User deleted successfully.",
      }),
    );

    return;
  }

  // =========================
  // Q5 - Get User By ID
  // GET /user/:id
  // =========================

  if (req.method === "GET" && req.url.startsWith("/user/")) {
    const id = req.url.split("/")[2];

    const data = fs.readFileSync("./users.json", "utf-8");
    const users = JSON.parse(data);

    // Check if user exists
    if (!users[id]) {
      res.writeHead(404, {
        "Content-Type": "application/json",
      });

      res.end(
        JSON.stringify({
          message: "User not found.",
        }),
      );

      return;
    }

    // Return user
    res.writeHead(200, {
      "Content-Type": "application/json",
    });

    res.end(JSON.stringify(users[id]));

    return;
  }

  // =========================
  // Q4 - Get All Users
  // GET /users
  // =========================

  if (req.method === "GET" && req.url === "/users") {
    const data = fs.readFileSync("./users.json", "utf-8");
    const users = JSON.parse(data);

    res.writeHead(200, {
      "Content-Type": "application/json",
    });

    res.end(JSON.stringify(users));

    return;
  }

  // =========================
  // Invalid Route
  // =========================

  res.writeHead(404, {
    "Content-Type": "application/json",
  });

  res.end(
    JSON.stringify({
      message: "Route not found.",
    }),
  );
});

server.listen(3000, () => {
  console.log("Server running on port 3000");
});
