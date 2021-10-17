export default function firebaseErrorMessage(code, translate) {
  switch (code) {
    case "auth/invalid-email":
      return translate("signup.errors.invalid_mail");
    case "auth/weak-password":
      return translate("signup.errors.weak_password");
    case "auth/email-already-in-use":
      return translate("signup.errors.email_already_in_use");
    case "auth/wrong-password":
      return translate("login.errors.wrong_password");
    default:
      return code;
  }
}
