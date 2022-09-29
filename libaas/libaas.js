function fetchData(){
    fetch('https://api.coinstats.app/public/v1/coins?skip=0&limit=100&currency=INR')
    .then(response => response.json())
    .then(data => {
      console.log(data.coins);
      const html=data.coins.map(coins =>{
         
        return'<p>Name:' +coins.name +'<br>Price:'+coins.price;         
          
      }).join("");
      
      document
      .querySelector("#app")
      .insertAdjacentHTML("afterbegin",html)
});
} 
fetchData();