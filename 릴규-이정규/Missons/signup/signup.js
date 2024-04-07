const nameInput = document.getElementById("name");
const nameValidationMessage = document.getElementById("nameValidationMessage");
const emailInput = document.getElementById("email");
const emailValidationMessage = document.getElementById(
  "emailValidationMessage"
);
const ageInput = document.getElementById("age");
const ageValidationMessage = document.getElementById("ageValidationMessage");
const passwordInput = document.getElementById("password");
const passwordValidationMessage = document.getElementById(
  "passwordValidationMessage"
);
const confirmPasswordInput = document.getElementById("confirmPassword");
const confirmPasswordValidationMessage = document.getElementById(
  "confirmpasswordValidationMessage"
);
const submitButton = document.getElementById("submitbutton");
const modal = document.getElementById("myModal");
const closeModalButton = document.querySelector(".closebutton");

// ***삼항연산자 색상반환
function updateValidationMessage(element, message, isValid) {
  element.textContent = message;
  element.style.color = isValid ? "green" : "red";
}

// 유효성 검사 PART
function validateName() {
  const regex = /^[가-힣a-zA-Z]+$/;
  if (!nameInput.value || !regex.test(nameInput.value)) {
    updateValidationMessage(
      nameValidationMessage,
      "이름은 한글 또는 영문자만 가능합니다.",
      false
    );
    return false;
  }
  updateValidationMessage(nameValidationMessage, "멋진 이름이네요!", true);
  return true;
}

function validateEmail() {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailInput.value || !regex.test(emailInput.value)) {
    updateValidationMessage(
      emailValidationMessage,
      "유효한 이메일 형식을 입력하세요.",
      false
    );
    return false;
  }
  updateValidationMessage(
    emailValidationMessage,
    "유효한 이메일 형식입니다.",
    true
  );
  return true;
}

function validateAge() {
  const age = parseFloat(ageInput.value);
  if (isNaN(age)) {
    updateValidationMessage(
      ageValidationMessage,
      "나이를 숫자로 입력해주세요.",
      false
    );
    return false;
  }
  if (age < 0) {
    updateValidationMessage(
      ageValidationMessage,
      "나이는 음수일 수 없습니다.",
      false
    );
    return false;
  }
  if (!Number.isInteger(age)) {
    updateValidationMessage(
      ageValidationMessage,
      "나이는 정수여야 합니다.",
      false
    );
    return false;
  }
  if (age < 19) {
    updateValidationMessage(
      ageValidationMessage,
      "19세 이상만 가입 가능합니다.",
      false
    );
    return false;
  }
  updateValidationMessage(
    ageValidationMessage,
    "올바른 나이 형식입니다.",
    true
  );
  return true;
}

function validatePassword() {
  const regex =
    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{4,12}$/;
  if (!passwordInput.value || !regex.test(passwordInput.value)) {
    updateValidationMessage(
      passwordValidationMessage,
      "비밀번호는 4~12자의 영문, 숫자, 특수문자 조합이어야 합니다.",
      false
    );
    return false;
  }
  updateValidationMessage(
    passwordValidationMessage,
    "유효한 비밀번호 형식입니다.",
    true
  );
  return true;
}

function validateConfirmPassword() {
  if (confirmPasswordInput.value !== passwordInput.value) {
    updateValidationMessage(
      confirmPasswordValidationMessage,
      "비밀번호가 일치하지 않습니다.",
      false
    );
    return false;
  }
  updateValidationMessage(
    confirmPasswordValidationMessage,
    "비밀번호가 일치합니다.",
    true
  );
  return true;
}

function showModal() {
  modal.style.display = "block";
}

function hideModal() {
  modal.style.display = "none";
}

// ***모든 유효성 검사 통과 여부 확인
function validateForm() {
  return (
    validateName() &&
    validateEmail() &&
    validateAge() &&
    validatePassword() &&
    validateConfirmPassword()
  );
}

// ***입력 필드 변경 시 유효성 검사 및 제출 버튼 상태 업데이트
[nameInput, emailInput, ageInput, passwordInput, confirmPasswordInput].forEach(
  function (input) {
    input.addEventListener("input", function () {
      const isFormValid = validateForm();
      submitButton.disabled = !isFormValid;
    });
  }
);

submitButton.addEventListener("click", function (e) {
  e.preventDefault(); // ***폼 자동제출 방지
  if (validateForm()) {
    showModal();
  }
});

closeModalButton.addEventListener("click", hideModal);
