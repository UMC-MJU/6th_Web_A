document.addEventListener("DOMContentLoaded", function () {
  const nameInput = document.getElementById("name");
  const nameValidationMessage = document.getElementById(
    "nameValidationMessage"
  );
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

  // 유효성 text문구 색상 변환
  function updateValidationMessage(element, message, isValid) {
    element.textContent = message;
    element.style.color = isValid ? "green" : "red";
  }

  // 이름 유효성 검사
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

  // 이메일 유효성 검사
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

  // 나이 유효성 검사
  function validateAge() {
    const age = parseInt(ageInput.value, 10);
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
    if (!Number.isInteger(parseFloat(ageInput.value))) {
      updateValidationMessage(
        ageValidationMessage,
        "나이는 정수여야 합니다.",
        false
      );
      return false;
    }
    if (isPrime(age)) {
      updateValidationMessage(
        ageValidationMessage,
        "나이는 소수일 수 없습니다.",
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

  // 소수 판별 함수
  function isPrime(num) {
    if (num <= 1) return false;
    if (num <= 3) return true;
    if (num % 2 === 0 || num % 3 === 0) return false;
    for (let i = 5; i * i <= num; i += 6) {
      if (num % i === 0 || num % (i + 2) === 0) return false;
    }
    return true;
  }

  // 비밀번호 유효성 검사
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

  // 비밀번호 확인 검사
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

  // 모달 창 표시
  function showModal() {
    modal.style.display = "block";
  }

  // 모달 창 숨기기
  function hideModal() {
    modal.style.display = "none";
  }

  // 모든 유효성 검사 통과 여부 확인
  function validateForm() {
    return (
      validateName() &&
      validateEmail() &&
      validateAge() &&
      validatePassword() &&
      validateConfirmPassword()
    );
  }

  // 입력 필드 변경 시 유효성 검사 및 제출 버튼 상태 업데이트
  [
    nameInput,
    emailInput,
    ageInput,
    passwordInput,
    confirmPasswordInput,
  ].forEach((input) => {
    input.addEventListener("input", () => {
      const isFormValid = validateForm();
      submitButton.disabled = !isFormValid;
    });
  });

  // 제출 버튼 클릭 이벤트
  submitButton.addEventListener("click", (e) => {
    e.preventDefault(); // 폼 자동 제출 방지
    if (validateForm()) {
      showModal();
    }
  });

  // 모달 닫기 버튼 클릭 이벤트
  closeModalButton.addEventListener("click", hideModal);
});
