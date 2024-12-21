import { Access } from "payload";

export const belongsToUser: Access = ({ req: { user } }) => {
  if (user) {
    if (user.collection === "admins") {
      return true;
    } else {
      return {
        user: {
          equals: user.id,
        },
      };
    }
  }

  return false;
};

export const isAuthenticated: Access = ({ req: { user } }) => {
  return Boolean(user);
};

export const isAdmin: Access = ({ req: { user } }) => {
  return Boolean(user?.collection === "admins");
};

export const isAdminOrSelf: Access = ({ req: { user } }) => {
  if (user) {
    if (user.collection === "admins") {
      return true;
    } else {
      return {
        id: {
          equals: user.id,
        },
      };
    }
  }

  return false;
};
