const data = [
  {
    id: 1,
    first_name: "Sherozbek",
    last_name: "Baxtiyorov",
    image: "./src/assets/image/users/user1.jpg",
    point: 6,
    datail: {
      username: "sherozbek.17",
      password: "12341234",
    },
    birthday: "01-01-1999",
  },
  {
    id: 2,
    first_name: "Temurbek",
    last_name: "Adhamov",
    image: "./src/assets/image/users/user2.jpg",
    point: 401,
    datail: {
      username: "temurbek.00",
      password: "123123123",
    },
    birthday: "05-05-1882",
  },
  {
    id: 3,
    first_name: "Avazbek",
    last_name: "Shukurullayev",
    image: "./src/assets/image/users/user1.jpg",
    point: 150,
    datail: {
      username: "avaz.00",
      password: "123123123",
    },
    birthday: "05-05-1882",
  },
  {
    id: 4,
    first_name: "Shukurullo",
    last_name: "Mansurov",
    image: "./src/assets/image/users/user2.jpg",
    point: 520,
    datail: {
      username: "shukurullo.00",
      password: "123123123",
    },
    birthday: "05-05-2001",
  },
  {
    id: 5,
    first_name: "Malika",
    last_name: "Jamshidova",
    image: "./src/assets/image/users/user1.jpg",
    point: 525,
    datail: {
      username: "malika.00",
      password: "123123123",
    },
    birthday: "05-05-2004",
  },
];

export const Users = data.sort((a, b) => {
  return b.point - a.point;
});
