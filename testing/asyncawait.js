const fetchingUserFromInternet = (callback, isOffline) => {
    setTimeout(() => {
      if (isOffline) {
        callback(new NetworkError('Gagal mendapatkan data dari internet'), null);
      }
      callback(null, { name: 'John', age: 18 });
    }, 500);
  };

  const gettingUserName = () => {
    fetchingUserFromInternet((error, user) => {
      if (error) {
        return error.message;
      }
      return user.name;
    }, false);
  };


//transpose =>



const fetchingUserFromInternet = (isOffline) => new Promise((resolve, reject) =>{
    if(isOffline){
      reject(new NetworkError('Gagal mendapatkan data dari internet'));
    }else{
      resolve({ name: 'John', age: 18 });
    }
  }, 500);


const gettingUserName= async () => {
  try {
    const user = await fetchingUserFromInternet (false);
      return user.name;
  } catch (error) {
      return error.message;
  }};

gettingUserName()