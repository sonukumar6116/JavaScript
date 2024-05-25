fetch('https://dummyjson.com/users')
      .then(data => data.json())
      .then(res => {
            console.log(res)
      })
      .catch(err => {
            console.log(err)
      })

const MakeReq = async () => {

      const res = await fetch("https://dummyjson.com/users");
      const usersData = await res.json();
      // console.log(data)

      const res2 = await fetch(`https://dummyjson.com/posts/user/${usersData.users[10].id}`);
      const userData = await res2.json();
      // console.log(userData)

      const res3 = await fetch(`https://dummyjson.com/comments/post/${userData.posts[0].id}`);
      const commentData = await res3.json();
      // console.log(commentData)

      const res4 = await fetch(`https://dummyjson.com/users/${commentData.comments[0].user.id}`);
      const CommentuserData = await res4.json();
      console.log(CommentuserData)
}

MakeReq();