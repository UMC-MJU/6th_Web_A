document
  .getElementById("signup-form")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // 기본 제출 동작 방지

    // 이름 검증
    const nameValidation = () => {
      const name = document.getElementById("name").value;
      if (!/^[a-zA-Z가-힣]+$/.test(name)) {
        displayMessage("name", "필수 입력 항목입니다!", "error");
        return false;
      } else {
        displayMessage("name", "멋진 이름이네요!", "success");
        return true;
      }
    };

    // 이메일 검증
    const emailValidation = () => {
      const email = document.getElementById("email").value;
      if (email === "" || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        displayMessage("email", "올바른 이메일 형식이 아닙니다!", "error");
        return false;
      } else {
        displayMessage("email", "올바른 이메일 형식입니다!", "success");
        return true;
      }
    };

    // 나이 검증
    const ageValidation = () => {
      const age = document.getElementById("age").value;
      if (age === "") {
        displayMessage("age", "나이를 입력해주세요!", "error");
        return false;
      } else if (isNaN(age)) {
        displayMessage("age", "나이는 숫자 형식이어야 합니다!", "error");
        return false;
      } else if (parseInt(age) < 0) {
        displayMessage("age", "나이는 음수가 될 수 없습니다!", "error");
        return false;
      } else if (parseInt(age) % 1 !== 0) {
        displayMessage("age", "나이는 소수가 될 수 없습니다!", "error");
        return false;
      } else if (parseInt(age) < 19) {
        displayMessage("age", "미성년자는 가입할 수 없습니다!", "error");
        return false;
      } else {
        displayMessage("age", "올바른 나이 형식입니다!", "success");
        return true;
      }
    };

    // 비밀번호 검증
    const passwordValidation = () => {
      const password = document.getElementById("password").value;
      if (password === "" || password.length < 4) {
        displayMessage(
          "password",
          "비밀번호는 최소 4자리 이상이어야 합니다.",
          "error"
        );
        return false;
      } else if (password.length > 12) {
        displayMessage(
          "password",
          "비밀번호는 최대 12자리까지 가능합니다.",
          "error"
        );
        return false;
      } else if (
        !/^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/.test(
          password
        )
      ) {
        displayMessage(
          "password",
          "비밀번호는 영어, 숫자, 특수문자를 모두 조합해서 작성해야 합니다.",
          "error"
        );
        return false;
      } else {
        displayMessage("password", "올바른 비밀번호입니다!", "success");
        return true;
      }
    };

    // 비밀번호 확인 검증
    const confirmPasswordValidation = () => {
      const password = document.getElementById("password").value;
      const confirmPassword = document.getElementById("confirm-password").value;
      if (password !== confirmPassword || confirmPassword === "") {
        displayMessage(
          "confirm-password",
          "비밀번호가 일치하지 않습니다.",
          "error"
        );
        return false;
      } else {
        displayMessage("confirm-password", "비밀번호가 일치합니다.", "success");
        return true;
      }
    };

    const isNameValid = nameValidation();
    const isEmailValid = emailValidation();
    const isAgeValid = ageValidation();
    const isPasswordValid = passwordValidation();
    const isConfirmPasswordValid = confirmPasswordValidation();

    if (
      isNameValid &&
      isEmailValid &&
      isAgeValid &&
      isPasswordValid &&
      isConfirmPasswordValid
    ) {
      const modalContainer = document.querySelector(".modalContainer");
      const modal = document.querySelector(".modal");
      modalContainer.style.display = "block";
      modal.style.display = "block";
    }
  });

document.getElementById("close").addEventListener("click", function () {
  const modalContainer = document.querySelector(".modalContainer");
  const modal = document.querySelector(".modal");
  modalContainer.style.display = "none";
  modal.style.display = "none";
});

function displayMessage(fieldName, message, className) {
  const errorMessageElement = document.getElementById(`${fieldName}-error`);
  errorMessageElement.innerText = message;
  errorMessageElement.className = "error";
  errorMessageElement.classList.add(className);
}
