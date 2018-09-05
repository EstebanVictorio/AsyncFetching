/*let p1 = new Promise((resolve,reject) => {
  if(2 < 2){
    resolve(40);
  }else{
    reject(40);
  }
})
  .then(data => { console.log(data)})
.catch(reason => console.log(reason));*/

async function fetchData() {
  let json = {};
  await fetch("https://swapi.co/api/people/1").then(data => {
    console.log(data);
    return (json = data.json());
  });
  return json;
}

let info = {};
const gatherInfo = async () => {
  info = await fetchData();
  console.log(info);
};

gatherInfo();
