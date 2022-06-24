import Swal from "sweetalert2";

const alert = ({ title, handleFunction, icon }) => {
  Swal.fire({
    title,
    icon,
    showDenyButton: true,
    showConfirmButton: false,
    denyButtonText: "Ok",
  }).then((result) => {
    if (result.value) {
      handleFunction();
    }
  });
};

export const showAlert = ({ ...rest }) => {
  alert({ ...rest });
};

export const showErrorAlert = ({ ...rest }) => {
  showAlert({ ...rest, icon: "error" });
};

export const showWarningAlert = ({ ...rest }) => {
  showAlert({ ...rest });
};

export const showInfoAlert = ({ ...rest }) => {
  showAlert({ ...rest });
};

export const showQuestionAlert = ({ ...rest }) => {
  showAlert({ ...rest });
};
