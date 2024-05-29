export const ageValidator = (age) => {
  const ageRegex = /^\d+$/;

  if (Number(age) < 0) {
    return "양수로 입력해 주세요.";
  }

  if (!ageRegex.test(age)) {
    return "숫자로 입력해 주세요.";
  }

  if (!Number.isInteger(Number(age))) {
    return "정수로 입력해 주세요.";
  }

  if (age < 19) {
    return "19세 이상만 회원가입 가능합니다.";
  }

  return true;
};

export const emailValidator = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailRegex.test(email)) {
    return "올바르지 않은 이메일 형식입니다.";
  }

  return true;
};

export const nameValidator = (name) => {
  const koreanRegex = /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/;

  if (!koreanRegex.test(name)) {
    return "한글로만 입력해 주세요.";
  }

  return true;
};

export const passwordValidator = (password) => {
  const passwordRegex = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{4,12}$/;

  if (password.length < 4 || password.length > 12) {
    return "비밀번호는 4자리 이상 12자리 이하로 입력해 주세요.";
  }

  if (!passwordRegex.test(password)) {
    return "영어와 숫자, 특수문자를 조합해 주세요.";
  }

  return true;
};

export const confirmPasswordValidator = (password, confirmPassword) => {
  if (password !== confirmPassword) {
    return "비밀번호를 다시 입력해 주세요.";
  }

  return true;
};
