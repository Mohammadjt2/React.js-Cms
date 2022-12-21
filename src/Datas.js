let xAxisData = [
  {
    name: "Jan",
    sale: 52_050,
  },
  {
    name: "Feb",
    sale: 89_400,
  },
  {
    name: "Mar",
    sale: 65_000,
  },
  {
    name: "Apr",
    sale: 89_080,
  },
  {
    name: "May",
    sale: 54_000,
  },
  {
    name: "Jun",
    sale: 95_033,
  },
  {
    name: "Jul",
    sale: 34_000,
  },
  {
    name: "Agu",
    sale: 28_200,
  },
  {
    name: "Sep",
    sale: 8_000,
  },
  {
    name: "Oct",
    sale: 73_078,
  },
  {
    name: "Nov",
    sale: 32_900,
  },
  {
    name: "Dev",
    sale: 97_000,
  },
];

const newMembers = [
  {
    id: 1,
    username: "Mohammad",
    title: "Web Developer",
    img: "images/Mohammadjt2.jpg",
  },
  {
    id: 2,
    username: "Ali",
    title: "Trader",
    img: "images/Ali.jpg",
  },
  {
    id: 3,
    username: "Ayob",
    title: "Hacker",
    img: "images/Ayob.jpg",
  },
  {
    id: 4,
    username: "Omid",
    title: "Seo",
    img: "images/Omid.jpg",
  },
];

const transactions = [
  {
    id: 1,
    customer: "Mohammad Jalilvand",
    date: "12 Jun 2022",
    amount: 423,
    status: "Declined",
    img: "images/Mohammadjt2.jpg",
  },
  {
    id: 2,
    customer: "Ali Jalilvand",
    date: "1 May 2022",
    amount: 383,
    status: "Pending",
    img: "images/Ali.jpg",
  },
  {
    id: 3,
    customer: "Ayob Bayat",
    date: "21 Apr 2022",
    amount: 121,
    status: "Declined",
    img: "images/Ayob.jpg",
  },
  {
    id: 4,
    customer: "Omid Torabi",
    date: "8 Spa 2022",
    amount: 229,
    status: "Approved",
    img: "images/Omid.jpg",
  },
];

let userRows = [
  {
    id: 1,
    username: "Mohammad Jalilvand",
    avatar: "images/Mohammadjt2.jpg",
    status: "active",
    transaction: "$129.52",
    email: "Mohammadjt2@gmail.com",
  },
  {
    id: 2,
    username: "Ali Jalilvand",
    avatar: "images/Ali.jpg",
    status: "non-active",
    transaction: "$110",
    email: "Ali@gmail.com",
  },
  {
    id: 3,
    username: "Ayob Bayat",
    avatar: "images/Ayob.jpg",
    status: "active",
    transaction: "$98",
    email: "Ayob@gmail.com",
  },
  {
    id: 4,
    username: "Lavin BabaSh",
    avatar: "images/Lavin.jpg",
    status: "active",
    transaction: "$0",
    email: "Lavin@gmail.com",
  },
  {
    id: 5,
    username: "Omid Torabi",
    avatar: "images/Omid.jpg",
    status: "active",
    transaction: "$55.98",
    email: "Omid@gmail.com",
  },
];

let products = [
  {
    id: 1,
    title: "Asus",
    avatar: "images/asus.jpeg",
    price: 890,
  },
  {
    id: 2,
    title: "Acer",
    avatar: "images/acer.jpg",
    price: 890,
  },
  {
    id: 3,
    title: "HP",
    avatar: "images/hp.jpg",
    price: 890,
  },
  {
    id: 4,
    title: "Dell",
    avatar: "images/dell.jpg",
    price: 890,
  },
];

const productsData = [
  {
    name: "Jan",
    sales: 4000,
  },
  {
    name: "Feb",
    sales: 3000,
  },
  {
    name: "Mar",
    sales: 5000,
  },
];

export {
  xAxisData,
  newMembers,
  transactions,
  userRows,
  products,
  productsData,
};
