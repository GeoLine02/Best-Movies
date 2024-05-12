import { IUserCredentials } from "../../types/user";

export const signIn = async (user: IUserCredentials) => {
  const resp = await fetch(
    "https://academyofdigitalindustriesbackend.onrender.com/api/v1/auth/login",
    {
      method: "POST",
      body: JSON.stringify(user),
      headers: { "content-type": "application/json" },
    }
  );
  if (resp.ok) {
    console.log(resp.json());
    return await resp.json();
  }
  throw new Error("User sign in error!");
};

export const signUp = async (user: IUserCredentials) => {
  const resp = await fetch(
    "https://academyofdigitalindustriesbackend.onrender.com/api/v1/auth/register",
    {
      method: "POST",
      body: JSON.stringify(user),
      headers: { "content-type": "application/json" },
    }
  );
  if (resp.ok) {
    return await resp.json();
  }
  throw new Error("User SignUp error!");
};
