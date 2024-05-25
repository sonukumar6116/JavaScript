new Promise((resolve, reject) => {
      setTimeout(() => {
            let flag = false;
            if (flag) {
                  resolve("Sonu Kumar")
            } else {
                  reject("ERROR")
            }

      }, 1000);
}).then((data) => {
      console.log(data)
}).catch((err) => {
      console.log(err)
})