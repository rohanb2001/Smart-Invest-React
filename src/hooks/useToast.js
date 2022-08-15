import React from "react";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const useToast = () => {
  const showToast = (type) => {
    switch (type.toLowerCase()) {
      case "submit":
        toast.success("Account created successfully", { theme: "colored" });
        break;
      case "update":
        toast.success("Saved Successful", { theme: "colored" });
        break;
      case "delete":
        toast("Delete Successfully", { theme: "light", icon: "✔" });
        break;
      default:
        toast.error("Something went wrong!", { theme: "colored" });
    }
  };

  return {
    showToast,
  };
};

export default useToast;
