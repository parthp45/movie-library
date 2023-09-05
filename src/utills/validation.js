import { EMAIL_REGEX, PASSWORD_REGEX } from "./constants";

const validate = (email, password) => {
  if (!email.match(EMAIL_REGEX)) {
    return "Email not Valid";
  }
  if (!password.match(PASSWORD_REGEX)) {
    return "Invalid Password";
  }
  return null;
};

export default validate;
