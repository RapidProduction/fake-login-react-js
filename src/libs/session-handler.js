const correctEmail = 'example@appman.co.th';
const correctPassword = 'password';

// This method acting like the fake RESTful server
export const login = (username, password) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if(username === correctEmail && password === correctPassword) {
        resolve({
          token: 'fake-jwt-token',
        });
      }
      reject({
        title: 'login failure',
        detail: 'username or password is in correct',
      });
    }, Math.random() * 5000);
  });
};