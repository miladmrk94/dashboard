//------------------

async function show() {
  let CRYPTO;

  await axios
    .get(
      "https://min-api.cryptocompare.com/data/pricemultifull?fsyms=BTC,ETH,LTC,USDT&tsyms=USD&api_key=d6c95999b02816f855d45b844c33cbf1fef94dbd67628056fc6346bab2da6ddf"
    )
    .then((res) => {
      console.log(res);
      CRYPTO = [
        {
          //BTC
          name: res.data.RAW.BTC.USD.FROMSYMBOL,
          price: res.data.DISPLAY.BTC.USD.PRICE,
          img: res.data.RAW.BTC.USD.IMAGEURL,
        },
        {
          //ETH
          name: res.data.RAW.ETH.USD.FROMSYMBOL,
          price: res.data.DISPLAY.ETH.USD.PRICE,
          img: res.data.RAW.ETH.USD.IMAGEURL,
        },
        {
          //LTC
          name: res.data.RAW.LTC.USD.FROMSYMBOL,
          price: res.data.DISPLAY.LTC.USD.PRICE,
          img: res.data.RAW.LTC.USD.IMAGEURL,
        },
        {
          //USDT
          name: res.data.RAW.USDT.USD.FROMSYMBOL,
          price: res.data.DISPLAY.USDT.USD.PRICE,
          img: res.data.RAW.USDT.USD.IMAGEURL,
        },
      ];

      console.log(CRYPTO);
      const divItems = document.querySelector(`.items`);
      divItems.innerHTML = "";
      CRYPTO.forEach((item, index) => {
        divItems.innerHTML += `
                <div class="box" onclick="myFunction(${index})" >
                <img
                src="https://www.cryptocompare.com${item.img}"
                alt="btc"
                
              />
              <span> ${item.name}</span>
                </div> 
           
              `;
      });
    });
}

const cryptoTag = [
  document.querySelector(".show-btc"),
  document.querySelector(".show-eth"),
  document.querySelector(".show-ltc"),
  document.querySelector(".show-usdt"),
];
const myFunction = (index) => {
  cryptoTag.forEach((item, x) => {
    if (x === index) {
      item.style.display = "block";
      item.style.animation = "fadein 1s";
    } else {
      item.style.display = "none";
    }
  });
};
myFunction();
document.querySelector(".show-btc").style.display = "block";

show();

const time = () => {
  let date = new Date();
  let hh = date.getHours();
  let mm = date.getMinutes();
  let ss = date.getSeconds();

  if (hh == 0) {
    hh = 12;
  }

  hh = hh < 10 ? "0" + hh : hh;
  mm = mm < 10 ? "0" + mm : mm;
  ss = ss < 10 ? "0" + ss : ss;

  let time = hh + ":" + mm + ":" + ss;

  const showTime = document.querySelector(".time-box");
  showTime.innerHTML = `

  <h4 class="show-time" >${time}</h4>
  `;
};

time();
setInterval(time, 1000);
