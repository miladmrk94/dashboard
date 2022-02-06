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
                <div class="box">
                <img
                src="https://www.cryptocompare.com${item.img}"
                alt="btc"
              />
              <span>${item.price} ${item.name}</span>
                </div>  
              `;
      });
    });
}

show();

const labels = ["January", "February", "March", "April", "May", "June"];

const data = {
  labels: labels,
  datasets: [
    {
      label: "My First dataset",
      backgroundColor: "rgb(255, 99, 132)",
      borderColor: "rgb(255, 99, 132)",
      data: [38.6724, 33.6724, 36.6724, 28.6724, 37.6724, 32.6724, 38.6724],
    },
  ],
};

const config = {
  type: "line",
  data: data,
  options: {},
};

const myChart = new Chart(document.getElementById("myChart"), config);
