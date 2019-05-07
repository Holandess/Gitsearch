var listElement = document.querySelector("ul");
var inputElement = document.querySelector("input");
var loading = document.querySelector("li");

function teste() {
  var user = inputElement.value;
  if (!user) return;
  axios
    .get(`https://api.github.com/users/${user}/repos`)
    .then(function(response) {
      renderRepositories(response.data);
    })
    .catch(function(reject) {
      reject(alert("Usuario não encontrado"));
    });
}

function renderRepositories(repositories) {
  for (repo of repositories) {
    const textElement = document.createTextNode(repo.name);
    const liElement = document.createElement("li");
    liElement.appendChild(textElement);
    listElement.appendChild(liElement);
  }
}

async function Carregando() {
  const tituloElement = "Carregando";
  const loadingElement = document.createElement("li");
  loadingElement.appendChild(tituloElement);
  loading.appendChild(loadingElement);
}

async function renderLoadin(renderRepositories) {}
