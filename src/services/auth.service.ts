export interface CurrentUser {
    id: string;
    name: string;
}

export interface SignupArgs {
  userName: string;
  password: string;
}

const user: CurrentUser = {
  id: '5',
  name: 'jhon',
};

const mook = ({
  userName,
  password,
}: SignupArgs): Promise<CurrentUser> => new Promise((resolve, reject) => {
  console.log('init auth simulation');
  setTimeout(() => {
    if (userName === 'test@test.com' && password === '123') {
      resolve(user);
      return;
    }

    reject(new Error('User does not exist'));
  }, 1000);
});

const singup = (args: SignupArgs): Promise<CurrentUser> => mook(args);

export const authApi = {
  singup,
};
