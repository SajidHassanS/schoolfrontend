import { updateProfile } from "./CommonFn";
const INIT_STATE = {
  role: "superAdmin",
  token: localStorage.getItem("token"),
  authUser: JSON.parse(localStorage.getItem("userInfo")),

  loginSuccess: false,
  loginFail: false,
  loginSpin: false,
  loginMessage: "",

  ForgotSuccess: false,
  ForgotError: false,
  ForgotMessage: "",
  ForgotSpin: false,
  logoutSuc: false,
  setNewSuccess: false,
  setNewError: false,
  setNewMessage: "",
  setNewSpin: false,

  profileData: null,
  fetchSpinner: false,

  editProfileError: false,
  editProfileSuccess: false,
  textMessage: "",
  editProfileSpinner: false,

  editProfilePasswordSuccess: false,
  editProfilePasswordSpinner: false,
  editProfilePasswordError: false,

  logoutSuccess: false,
  UN_AUTHORIZED: false,
};
const Auth = (state = INIT_STATE, action) => {
  switch (action.type) {
    case "Login_SUCCESS": {
      let loginSuccess = false;
      if (action.payload.user && action.payload.user.role === state.role) {
        localStorage.setItem("userInfo", JSON.stringify(action.payload.user));
        localStorage.setItem("token", action.payload.user.token);
        loginSuccess = true;
      }
      return {
        ...state,
        token: action.payload.user.token,
        authUser: action.payload.user,
        loginSuccess: loginSuccess,
        loginSpin: false,
      };
    }
    case "Login_FAILURE": {
      return {
        ...state,
        loginFail: true,
        loginMessage: action.payload,
        loginSpin: false,
      };
    }
    case "LoginSpin_START": {
      return {
        ...state,
        loginSpin: true,
      };
    }
    case "ForgotPassword_SUCCESS": {
      return {
        ...state,
        ForgotSuccess: true,
        ForgotMessage: "Recovery email sent in your inbox",
        ForgotSpin: false,
      };
    }
    case "ForgotPassword_FAILURE": {
      return {
        ...state,
        ForgotError: true,
        ForgotMessage: action.payload,
        ForgotSpin: false,
      };
    }
    case "ForgotSpin_START": {
      return {
        ...state,
        ForgotSpin: true,
      };
    }
    case "LogoutSuccess_FAILURE": {
      console.log("===hello===");
      return {
        ...state,
        logoutSuc: true,
      };
    }
    case "SetNew_SUCCESS": {
      return {
        ...state,
        setNewSuccess: true,
        setNewMessage: "Password updated successfully",
        setNewSpin: false,
      };
    }
    case "SetNew_FAILURE": {
      return {
        ...state,
        setNewError: true,
        setNewMessage: action.payload,
        setNewSpin: false,
      };
    }
    case "SetNewSpin_START": {
      return {
        ...state,
        setNewSpin: true,
      };
    }
    case "FetchProfile_SUCCESS": {
      return {
        ...state,
        profileData: action.payload.Record,
        fetchSpinner: false,
      };
    }
    case "FetchProfile_FAILURE": {
      return {
        ...state,
        fetchSpinner: false,
      };
    }
    case "FetchProfileSpin_START": {
      return {
        ...state,
        fetchSpinner: true,
      };
    }
    case "EditProfile_SUCCESS": {
      let user = JSON.parse(localStorage.getItem("userInfo"));
      let updatedUserAuthData = updateProfile(user, action.payload.Record);
      console.log("===user====", user);
      localStorage.setItem("userInfo", JSON.stringify(updatedUserAuthData));
      return {
        ...state,
        settingsData: action.payload.Record,
        authUser: JSON.parse(localStorage.getItem("userInfo")),
        editProfileSuccess: true,
        editProfileSpinner: false,
        textMessage: "Profile Update Successfully",
      };
    }
    case "EditProfile_FAILURE": {
      return {
        ...state,
        editProfileError: true,
        editProfileSpinner: false,
        textMessage: action.payload,
      };
    }
    case "EditProfileSpin_START": {
      return {
        ...state,
        editProfileSpinner: true,
      };
    }
    case "EditProfilePassword_SUCCESS": {
      return {
        ...state,
        editProfilePasswordSuccess: true,
        editProfilePasswordSpinner: false,
        textMessage: "Password reset successfully",
      };
    }
    case "EditProfilePassword_FAILURE": {
      return {
        ...state,
        editProfilePasswordError: true,
        editProfilePasswordSpinner: false,
        textMessage: action.payload,
      };
    }
    case "EditProfilePasswordSpin_START": {
      return {
        ...state,
        editProfilePasswordSpinner: true,
      };
    }
    case "logout_success": {
      localStorage.clear();
      return {
        ...state,
        logoutSuccess: true,
        authUser: null,
      };
    }
    case "UN_AUTHORIZED": {
      return {
        UN_AUTHORIZED: true,
      };
    }
    case "UN_AUTHORIZED_Close": {
      return {
        UN_AUTHORIZED: false,
      };
    }
    case "EditAlarmSetting_FAILURE": {
      return {
        ...state,
        editAlarmError: true,
        editAlarmSpin: false,
      };
    }
    case "EditAlarmSpinner_START": {
      return {
        ...state,
        editAlarmSpin: true,
      };
    }
    case "Auth_Reset": {
      return {
        ...state,
        loginSuccess: false,
        loginFail: false,
        loginSpin: false,
        ForgotSuccess: false,
        ForgotError: false,
        ForgotMessage: "",
        ForgotSpin: false,
        setNewSuccess: false,
        setNewError: false,
        setNewMessage: "",
        setNewSpin: false,
        fetchSpinner: false,
        editProfileError: false,
        editProfileSuccess: false,
        textMessage: "",
        editProfileSpinner: false,
        editProfilePasswordSuccess: false,
        editProfilePasswordSpinner: false,
        editProfilePasswordError: false,

        logoutSuc: false,
        UN_AUTHORIZED: false,
      };
    }
    default:
      return state;
  }
};
export default Auth;
