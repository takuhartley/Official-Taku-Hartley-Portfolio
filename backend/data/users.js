import bcrypt from "bcryptjs";

const users = [
  {
    firstName: "Robert",
    lastName: "Hartley",
    userName: "robbylobby",
    email: "robert.taku.hartley@gmail.com",
    password: bcrypt.hashSync("12345", 10),
    isAdmin: true,
  },
  {
    firstName: "Rob",
    lastName: "Hart",
    userName: "robhart",
    email: "test@gmail.com",
    password: bcrypt.hashSync("12345", 10),
  },
  {
    firstName: "Test",
    lastName: "Account",
    userName: "testaccount",
    email: "tester@gmail.com",
    password: bcrypt.hashSync("Tester", 10),
  },
];

export default users;
