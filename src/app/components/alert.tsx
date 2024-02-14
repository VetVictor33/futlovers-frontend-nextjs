import Swal from "sweetalert2";

export const swalWarning = Swal.mixin({
    customClass: {
      confirmButton: "bg-blue-500 text-white px-4 py-2 rounded-md mx-2 shadow-md font-medium hover:bg-blue-600",
      cancelButton: "bg-red-500 text-white px-4 py-2 rounded-md mx-2 shadow-md font-medium hover:bg-red-600"
    },
    buttonsStyling: false
  });