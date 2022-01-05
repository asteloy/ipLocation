

export async function getAddress (ip = '8.8.8.8'){
   const responce = await fetch( `https://geo.ipify.org/api/v2/country,city?apiKey=at_E0RxQt1ja2mzvYzG1aKdt0Q0oSPlz&ipAddress=${ip}`)
  return await responce.json(); 
}