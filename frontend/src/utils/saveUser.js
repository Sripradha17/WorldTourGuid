import axios from "axios";

export const saveUserToBackend = async (user, role = "user") => {
  try {
    await axios.post("http://localhost:5000/api/users/save", {
      uid: user.uid,
      email: user.email,
      role,
    });
  } catch (error) {
    console.error("Error saving user:", error);
  }
};
