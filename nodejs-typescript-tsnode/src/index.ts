interface IUserInformation {
  firstName: string;
  lastName: string;
  description: string;
}

function createUser(): IUserInformation {
  return {
    firstName: 'John',
    lastName: 'Doe',
    description: 'Default user'
  };
}

function startUp() {
  const curUser: IUserInformation = createUser();

  console.log(JSON.stringify(curUser));
}

startUp();