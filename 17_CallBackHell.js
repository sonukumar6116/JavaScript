function makeHTTPreq(method, url, callback) {
      let xhttp = new XMLHttpRequest();
      xhttp.responseType = 'json';
      xhttp.open(method, url);
      xhttp.send();

      xhttp.addEventListener('load', () => {
            callback(xhttp.response)
      })
}

makeHTTPreq('GET', 'https://dummyjson.com/users', (usersData) => {
      makeHTTPreq('GET', `https://dummyjson.com/posts/user/${usersData.users[10].id}`, (userData) => {
            makeHTTPreq('GET', `https://dummyjson.com/comments/post/${userData.posts[0].id}`, (commentData) => {
                  makeHTTPreq('GET', `https://dummyjson.com/users/${commentData.comments[0].user.id}`, (userData) => {
                        console.log(userData)
                  });
            });
      });
});

