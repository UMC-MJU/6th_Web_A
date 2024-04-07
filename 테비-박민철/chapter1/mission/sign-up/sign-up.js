const nameInput = document.querySelector("#name-input");
const emailInput = document.querySelector("#email-input");
const ageInput = document.querySelector("#age-input");
const passwordInput = document.querySelector("#password-input");
const passwordCheckInput = document.querySelector("#password-check-input");
const submitButton = document.querySelector("#submit-button");
const modal = document.querySelector("#modal-wrapper");
const closeModal = document.querySelector("#close-modal-button");

const nameWarning = document.querySelector("#name-warning");
const emailWarning = document.querySelector("#email-warning");
const ageWarning = document.querySelector("#age-warning");
const passwordWarning = document.querySelector("#password-warning");
const passwordCheckWarning = document.querySelector("#password-check-warning");

const checkKoreanOrEnglish = /^[ㄱ-ㅎ가-힣a-zA-Z@]+$/;
const checkEmail = /^[a-zA-Z0-9+-\_.]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
const checkNumber = /^[0-9]*$/;
const passwordRegex =
  /^(?=.*[a-zA-Z])(?=.*[\d])(?=.*[\W_])[a-zA-Z\d\W_]{4,12}$/;

const errorText = {
  name: {
    pass: "멋진 이름이네요!",
    nonPass: {
      contentEmpty: "필수 항목입니다.",
      onlyAlphabet: "한글 혹은 영어로 입력해 주세요.",
    },
  },
  email: {
    pass: "올바른 이메일 형식입니다!",
    nonPass: {
      contentEmpty: "필수 항목입니다.",
      wrongEmail: "잘못된 이메일 형식입니다.",
    },
  },
  age: {
    pass: "올바른 나이 형식입니다!",
    nonPass: {
      contentEmpty: "필수 항목입니다.",
      onlyNumber: "숫자로 입력해 주세요.",
      onlyPositive: "양수로 입력해 주세요.",
      onlyNaturalNumber: "자연수만 입력해 주세요.",
      onlyAdult: "19살 이상만 가능합니다.",
    },
  },
  password: {
    pass: "올바른 비밀번호입니다!",
    nonPass: {
      contentEmpty: "필수 항목입니다.",
      tooShort: "4자리 이상으로 입력해 주세요.",
      tooLong: "12자리 이하로 입력해 주세요.",
      wrongPassword: "영어, 숫자, 특수문자를 모두 조합해 주세요.",
    },
  },
  passwordCheck: {
    pass: "비밀번호가 일치합니다!",
    nonPass: {
      contentEmpty: "필수 항목입니다.",
      wrongPassword: "비밀번호가 일치하지 않습니다.",
    },
  },
};

const isStringEmpty = (string) => {
  return string.length === 0;
};

const changeText = (target, regex, type, failType) => {
  target.style.visibility = "visible";
  target.textContent = regex
    ? errorText[type].pass
    : errorText[type].nonPass[failType];
  target.style.color = regex ? "green" : "red";
};

const validateWrapper = (validations, target, type) => {
  for (let i = 0; i < validations.length; i++) {
    if (validations[i].test) {
      changeText(target, false, type, validations[i].messageKey);
      return;
    }
  }
  changeText(target, true, type);
};

const handleNameValidate = () => {
  const validations = [
    {
      test: isStringEmpty(nameInput.value),
      messageKey: "contentEmpty",
    },
    {
      test: !checkKoreanOrEnglish.test(nameInput.value),
      messageKey: "onlyAlphabet",
    },
  ];

  validateWrapper(validations, nameWarning, "name");
};

const handleEmailValidate = () => {
  const validations = [
    {
      test: isStringEmpty(emailInput.value),
      messageKey: "contentEmpty",
    },
    {
      test: !checkEmail.test(emailInput.value),
      messageKey: "wrongEmail",
    },
  ];

  validateWrapper(validations, emailWarning, "email");
};

const handleAgeValidate = () => {
  const validations = [
    {
      test: isStringEmpty(ageInput.value),
      messageKey: "contentEmpty",
    },
    {
      test: Number(ageInput.value) !== 0 && !Number(ageInput.value),
      messageKey: "onlyNumber",
    },
    {
      test: Number(ageInput.value) < 1,
      messageKey: "onlyPositive",
    },
    {
      test: !Number.isInteger(Number(ageInput.value)),
      messageKey: "onlyNaturalNumber",
    },
    {
      test: Number(ageInput.value) < 19,
      messageKey: "onlyAdult",
    },
  ];

  validateWrapper(validations, ageWarning, "age");
};

const handlePasswordValidate = () => {
  const validations = [
    {
      test: isStringEmpty(passwordInput.value),
      messageKey: "contentEmpty",
    },
    {
      test: passwordInput.value.length < 4,
      messageKey: "tooShort",
    },
    {
      test: passwordInput.value.length > 12,
      messageKey: "tooLong",
    },
    {
      test: !passwordRegex.test(passwordInput.value),
      messageKey: "wrongPassword",
    },
  ];

  validateWrapper(validations, passwordWarning, "password");
};

const handlePasswordCheckValidate = () => {
  const validations = [
    {
      test: isStringEmpty(passwordCheckInput.value),
      messageKey: "contentEmpty",
    },
    {
      test: passwordCheckInput.value !== passwordInput.value,
      messageKey: "wrongPassword",
    },
  ];

  validateWrapper(validations, passwordCheckWarning, "passwordCheck");
};

const handleClickSubmitButton = () => {
  handleNameValidate();
  handleEmailValidate();
  handleAgeValidate();
  handlePasswordValidate();
  handlePasswordCheckValidate();

  if (
    nameWarning.style.color === "green" &&
    emailWarning.style.color === "green" &&
    ageWarning.style.color === "green" &&
    passwordWarning.style.color === "green" &&
    passwordCheckWarning.style.color === "green"
  ) {
    modal.style.visibility = "visible";
  }
};

const handleCloseModal = () => {
  modal.style.visibility = "hidden";
};

submitButton.addEventListener("click", handleClickSubmitButton);
closeModal.addEventListener("click", handleCloseModal);
