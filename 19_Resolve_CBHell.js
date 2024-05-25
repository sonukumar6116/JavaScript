function makeHTTPreq(method, url) {
      const xhhtp = new XMLHttpRequest();
      xhhtp.responseType = "json"
      xhhtp.open(method, url);
      xhhtp.send();
      const promise = new Promise((resolve, reject) => {
            xhhtp.addEventListener('load', () => {
                  resolve(xhhtp.response)
            })
      })
      return promise;
}

makeHTTPreq('GET', "https://dummyjson.com/users")
      .then(usersData => makeHTTPreq("GET", `https://dummyjson.com/posts/user/${usersData.users[10].id}`))
      .then(userData => makeHTTPreq("GET", `https://dummyjson.com/comments/post/${userData.posts[0].id}`))
      .then(commentData => makeHTTPreq("GET", `https://dummyjson.com/users/${commentData.comments[0].user.id}`))
      .then(data => { console.log(data) })