const data = [
  {
    id: 1,
    first_name: "Sherozbek",
    last_name: "Baxtiyorov",
    image: "./image/users/user1.jpg",
    point: 75,
    datail: {
      username: "sherozbek.17",
      password: "12341234",
    },
    birthday: "2005-06-17",
  },
  {
    id: 2,
    first_name: "Javohir",
    last_name: "O'ktamovich",
    image: "./image/users/user3.jpg",
    point: 45,
    datail: {
      username: "uktamovich",
      password: "12341234",
    },
    birthday: "2006-02-27",
  },
  {
    id: 3,
    first_name: "Tmurbek",
    last_name: "Adhamov",
    image: "./image/users/user2.jpg",
    point: 65,
    datail: {
      username: "temurbek.00",
      password: "12341234",
    },
    birthday: "1994-05-22",
  },
];

export const Users = data.sort((a, b) => {
  return b.point - a.point;
});
