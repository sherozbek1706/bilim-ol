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
    birthday: "2005-06-17",
  },
  {
    id: 2,
    first_name: "Malika",
    last_name: "Baxtiyorova",
    image: "./image/users/user2.jpg",
    point: 0,
    datail: {
      username: "malika.28",
      password: "200628123",
    },
    birthday: "2008-10-28",
  },
];

export const Users = data.sort((a, b) => {
  return b.point - a.point;
});
