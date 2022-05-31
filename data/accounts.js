export const validAccount = {
    email: "abstracta@demo.io",
    password: "Random",
  };
  export const invalidAccount = {
    email: "random@demo.io",
    password: "random!",
  };
  export const signUpAccountsSuccess = [
    {
      testSpecification: "create a new account completing all fields",
      gender: "id_gender1",
      firstName: "John",
      lastName: "Doe",
      password: "passwordOK",
      companyName: "Abstracta",
      address: "Street 19",
      city: "Miami",
      state: "Florida",
      postalCode: "50000",
      mobilePhone: "59898123456",
      returnMsg: "Welcome to your account. Here you can manage all of your personal information and orders."
    },
    {
      testSpecification: "create a new account without specifying gender",
      gender: "",
      firstName: "John",
      lastName: "Doe",
      password: "passwordOK",
      companyName: "Abstracta",
      address: "Street 19",
      city: "Miami",
      state: "Florida",
      postalCode: "50000",
      mobilePhone: "59898123456",
      returnMsg: "Welcome to your account. Here you can manage all of your personal information and orders."
    },
   
  ];
  export const signUpAccountsError = [
    {
      testSpecification: "show an error message if password is shorter than five characters",
      gender: "id_gender1",
      firstName: "John",
      lastName: "Doe",
      password: "1234",
      companyName: "Abstracta",
      address: "Street 40",
      city: "Orlando",
      state: "Florida",
      postalCode: "50000",
      mobilePhone: "534566",
      returnMsg: "There is 1 error"
    },
    {
      testSpecification: "show an error message if firstname and lastname fields are empty",
      gender: "id_gender1",
      firstName: "",
      lastName: "",
      password: "1234802780",
      companyName: "Abstracta",
      address: "Street 40",
      city: "Orlando",
      state: "Florida",
      postalCode: "50000",
      mobilePhone: "534566",
      returnMsg: "There is 1 error"
    }
  ];
 