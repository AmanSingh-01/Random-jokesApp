const btn = document.querySelector("#btn");
btn.onclick = getjoke;
window.onload = getjoke;

const jokesetup = document.getElementById("joke");
function getjoke() {
  fetch(
    "https://hindi-jokes-api.onrender.com/jokes?api_key=0f5343573a6ed0df03faaf07cadf"
  )
  .then((response) => response.json())
  .then((data) => {
    jokesetup.textContent = data.jokeContent;
    console.log(data);
  })
  .catch((err) => {
    console.log(`error ${err}`);
  })
}