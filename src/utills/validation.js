import { EMAIL_REGEX, PASSWORD_REGEX } from "./constants";

const validate = (email, password) => {
  if (!EMAIL_REGEX.test(email)) {
    return "Email address is not valid";
  }
  if (!PASSWORD_REGEX.test(password)) {
    return "Invalid Password";
  }

  return null;
};

export default validate;
