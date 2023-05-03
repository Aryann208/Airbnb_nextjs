const url =
  "https://raw.githubusercontent.com/Aryann208/Store/main/airbnbHome.json";
const location = [
  {
    img: "https://github.com/Aryann208/Store/blob/main/liverpool.jpg?raw=true",
    location: "London",
    distance: "45-minute drive",
  },
  {
    img: "https://github.com/Aryann208/Store/blob/main/Manchestar.jpg?raw=true",
    location: "Manchester",
    distance: "4.5-hour drive",
  },
  {
    img: "https://github.com/Aryann208/Store/blob/main/York.jpg?raw=true",
    location: "York",
    distance: "4-hour drive",
  },
  {
    img: "https://github.com/Aryann208/Store/blob/main/Birkenhead.jpg?raw=true",
    location: "Birkenhead",
    distance: "45-minute drive",
  },
  {
    img: "https://github.com/Aryann208/Store/blob/main/Newquay.jpg?raw=true",
    location: "Newquay",
    distance: "6-hour drive",
  },
  {
    img: "https://github.com/Aryann208/Store/blob/main/liverpool.jpg?raw=true",
    location: "Liverpool",
    distance: "3-hour drive",
  },
  {
    img: "https://github.com/Aryann208/Store/blob/main/Cardiff.jpg?raw=true",
    location: "Cardiff",
    distance: "45-minute drive",
  },
  {
    img: "https://github.com/Aryann208/Store/blob/main/Hove.jpg?raw=true",
    location: "Hove",
    distance: "2-hour drive",
  },
];
const logging = async () => {
  const data = await fetch(url).then((res) => res.json());
  console.log("start");
  console.log(data);
  console.log("end");
};
const logging2 = async () => {
  const data = location;
  console.log("start");
  const imgUrl = data[2]["img"];
  fetch(imgUrl);
  console.log("end");
};

logging();
