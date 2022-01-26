var repoList = document.querySelector('ul');
var fetchButton = document.getElementById('fetch-button');

// function getApi() {
//   // Replace `octocat` with anyone else's GitHub username
//   var requestUrl = 'https://api.github.com/users/octocat/repos';

//   fetch(requestUrl)
//     .then(function(response) {

//       return response.json();

//     })
//     .then(function(data) {

//       for (var i = 0; i < data.length; i++) {

//         var listItem = document.createElement('li');
//         listItem.textContent = data[i].html_url;
//         repoList.appendChild(listItem);
        
//       }

//     });
// }

async function getApiAsync() {
  // Replace `octocat` with anyone else's GitHub username
  var requestUrl = 'https://api.github.com/users/octocat/repos';

  var response = await fetch(requestUrl);

  var reposData = await response.json();

  for (var i = 0; i < reposData.length; i++) {
    var listItem = document.createElement('li');
    listItem.textContent = reposData[i].html_url;
    repoList.appendChild(listItem);
  }

}

//fetchButton.addEventListener('click', getApi); 

fetchButton.addEventListener('click', getApiAsync );
