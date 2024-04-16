const nameInput = document.querySelector("#name-input");
const emailInput = document.querySelector("#email-input");
const ageInput = document.querySelector("#age-input");
const passwordInput = document.querySelector("#pw-input");
const checkPwInput = document.querySelector("#checkpw-input");
const submitBtn = document.querySelector(".btn");
const modal = document.querySelector(".modal-wrapper");
const closeModal = document.querySelector(".close-btn");

const nameError = document.querySelector("#name-error");
const emailError = document.querySelector("#email-error");
const ageError = document.querySelector("#age-error");
const passwordError = document.querySelector("#pw-error");
const checkPasswordError = document.querySelector("#checkpw-error");

submitBtn.addEventListener("click", function (event) {
  event.preventDefault();
  validateForm();
});

function validateForm() {
  let isValid = true;

  const nameValue = nameInput.value.trim();
  if (nameValue === "") {
    nameError.textContent = "필수 입력 항목입니다!";
    nameError.style.display = "block";
    isValid = false;
  } else if (!/^[가-힣a-zA-Z]+$/.test(nameValue)) {
    nameError.textContent =
      "이름은 숫자나 특수문자를 포함하지 않는 문자로 입력해주세요.";
    nameError.style.display = "block";
    isValid = false;
  } else {
    nameError.textContent = "멋진 이름이네요!";
    nameError.style.display = "block";
  }

  const emailValue = emailInput.value.trim();
  if (emailValue === "") {
    emailError.textContent = "이메일을 입력해주세요!";
    emailError.style.display = "block";
    isValid = false;
  } else if (!/\S+@\S+\.\S+/.test(emailValue)) {
    emailError.textContent = "올바른 이메일 형식이 아닙니다!";
    emailError.style.display = "block";
    isValid = false;
  } else {
    emailError.textContent = "올바른 이메일 형식입니다!";
    emailError.style.display = "block";
  }

  const ageValue = ageInput.value.trim();
  if (ageValue === "") {
    ageError.textContent = "나이를 입력해주세요!";
    ageError.style.display = "block";
    isValid = false;
  } else if (!/^\d+$/.test(ageValue)) {
    ageError.textContent = "나이는 숫자로 입력해야 합니다.";
    ageError.style.display = "block";
    isValid = false;
  } else if (ageValue < 0) {
    ageError.textContent = "나이는 음수일 수 없습니다.";
    ageError.style.display = "block";
    isValid = false;
  } else if (ageValue.includes(".")) {
    ageError.textContent = "나이는 정수로 입력해야 합니다.";
    ageError.style.display = "block";
    isValid = false;
  } else if (ageValue < 19) {
    ageError.textContent = "우리 영화 사이트는 19살 이상만 가입이 가능합니다.";
    ageError.style.display = "block";
    isValid = false;
  } else {
    ageError.textContent = "올바른 나이 형식입니다!";
    ageError.style.display = "block";
  }

  const passwordValue = passwordInput.value;
  if (passwordValue === "") {
    passwordError.textContent = "비밀번호를 입력해주세요!";
    passwordError.style.display = "block";
    isValid = false;
  } else if (passwordValue.length < 4) {
    passwordError.textContent = "비밀번호는 최소 4자 이상이어야 합니다.";
    passwordError.style.display = "block";
    isValid = false;
  } else if (passwordValue.length > 12) {
    passwordError.textContent = "비밀번호는 12자를 초과할 수 없습니다.";
    passwordError.style.display = "block";
    isValid = false;
  } else if (
    !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{4,12}$/.test(
      passwordValue
    )
  ) {
    passwordError.textContent =
      "비밀번호는 대소문자, 숫자, 특수문자를 포함해야 합니다.";
    passwordError.style.display = "block";
    isValid = false;
  } else {
    passwordError.textContent = "올바른 비밀번호입니다!";
    passwordError.style.display = "block";
  }

  const checkPasswordValue = checkPasswordInput.value;
  if (checkPasswordValue === "") {
    checkPasswordError.textContent = "비밀번호를 입력해주세요.";
    checkPasswordError.style.display = "block";
    isValid = false;
  } else if (checkPasswordValue !== passwordValue) {
    checkPasswordError.textContent = "비밀번호가 일치하지 않습니다.";
    checkPasswordError.style.display = "block";
    isValid = false;
  } else {
    checkPasswordError.textContent = "비밀번호가 일치합니다.";
    checkPasswordError.style.display = "block";
  }

  if (isValid) {
    showSuccessModal();
  }
}

function showSuccessModal() {
  modal.style.display = "flex";
}

closeModal.addEventListener("click", function () {
  modal.style.display = "none";
});

submitBtn.addEventListener("click", function (event) {
  event.preventDefault();
  validateForm();
  if (isValid) {
    showSuccessModal();
  }
});
