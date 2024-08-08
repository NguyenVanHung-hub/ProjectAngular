const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

let users = []; // Biến toàn cục để lưu trữ thông tin người dùng

// Tạo tài khoản mặc định admin
const defaultAdmin = { name: 'Admin', email: 'admin@admin.com', password: 'admin' };
users.push(defaultAdmin);

app.get("/", (req, res) => {
  res.send("Server running");
});

// POST /login: xử lý đăng nhập
app.post("/login", (req, res) => {
  const { email, password } = req.body;
  const user = users.find(u => u.email === email && u.password === password);
  if (!user) return res.status(401).json({ error: "Invalid Credentials" });
  res.json({
    user: { name: user.name, email: user.email, token: Math.random() },
    success: "Logged In successfully",
  });
});

// POST /register: xử lý đăng ký
app.post("/register", (req, res) => {
  const { name, email, password } = req.body;
  const userExists = users.some(u => u.email === email);
  if (userExists) return res.status(400).json({ error: "User already exists" });

  const newUser = { name, email, password };
  users.push(newUser);
  res.json({
    user: { name, email },
    success: "Registered successfully",
  });
});

const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
