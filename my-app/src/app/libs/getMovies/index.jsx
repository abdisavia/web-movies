
async function getData(search="harry potter")  {
  const res = await fetch(`http://www.omdbapi.com/?apikey=929c59ff&s=${search}`);
  
  if(!res.ok){
    throw new Error("Failed to fetch movies")
  }
  return res.json();
}

export default getData;