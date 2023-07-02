const data = [
  {
    id: 1,
    first_name: "Sherozbek",
    last_name: "Baxtiyorov",
    image: "./image/users/user1.jpg",
    point: 0,
    datail: {
      username: "sherozbek.17",
      password: "12341234",
    },
    birthday: "01-01-1999",
  },
];

export const Users = data.sort((a, b) => {
  return b.point - a.point;
});
