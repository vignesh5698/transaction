const walletsFieldValidator = () => {
  return {
    validate: (reqObject) => {
      const { userId, amount, name, description } = reqObject;
      if (!userId || !name) {
        return { result: false, error: "User id and name is mandatory fields" };
      }

      if (typeof amount !== "number") {
        return { result: false, error: "Amount should be in type of number" };
      }

      return true;
    },
  };
};

module.exports = { walletsFieldValidator };
