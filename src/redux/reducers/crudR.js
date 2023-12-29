import {
  addItemInRecord,
  recordAfterUpdate,
  recordAfterDeleted,
} from "./CommonFn";

const initialState = {
  success: false,
  error: false,
  buttonSpin: false,
  FetchSpin: false,
  FetchMessage: "",
  FetchSuccess: false,
  FetchError: false,
  textMessage: "",
};

const CrudR = (state = initialState, action) => {
  switch (action.type) {
    case "Show_Modal": {
      return {
        ...state,
        [action.ModalName]: true,
        initialValues: action.payload,
      };
    }
    case "Hide_Modal": {
      return {
        ...state,
        [action.ModalName]: false,
        initialValues: null,
      };
    }
    case "Remove_Data": {
      return {
        ...state,
        [action.recordName]: null,
      };
    }
    case "FetchRecord_SUCCESS": {
      return {
        ...state,
        [action.recordName]: action.payload.Record,
        [`${action.recordName}_total`]: action.payload.Record.total,
        cardRecord: [...action.payload.Record.cards],
        FetchMessage: action.payload.message,
        FetchSuccess: true,
        FetchSpin: false,
      };
    }
    case "FetchRecord_FAILURE": {
      return {
        ...state,
        FetchError: true,
        FetchSpin: false,
        FetchMessage: action.payload.message,
      };
    }
    case "FetchUserRecord_SUCCESS": {
      return {
        ...state,
        [action.recordName]: action.payload.Record,
        [`${action.recordName}_total`]: action.payload.Record.total,
        FetchMessage: action.payload.message,
        FetchSuccess: true,
        FetchSpin: false,
      };
    }
    case "FetchUserRecord_FAILURE": {
      return {
        ...state,
        FetchError: true,
        FetchSpin: false,
        FetchMessage: action.payload.message,
      };
    }

    case "FetchTaxRateRecord_SUCCESS": {
      return {
        ...state,
        [action.recordName]: action.payload.Record,
        FetchMessage: action.payload.message,
        FetchSuccess: true,
        FetchSpin: false,
      };
    }
    case "FetchTaxRateRecord_FAILURE": {
      return {
        ...state,
        FetchError: true,
        FetchSpin: false,
        FetchMessage: action.payload.message,
      };
    }
    case "EditTaxRateRecord_SUCCESS": {
      return {
        ...state,
        [action.recordName]: action.payload.Record,
        success: true,
        buttonSpin: false,
        textMessage: action.payload.message,
      };
    }

    case "EditTaxRateRecord_FAILURE": {
      return {
        ...state,
        error: true,
        buttonSpin: false,
        textMessage: action.payload,
      };
    }
    case "FetchLeaveSettRecord_SUCCESS": {
    
      return {
        ...state,
        leaves: action.payload.Record,
        FetchMessage: action.payload.message,
        FetchSuccess: true,
        FetchSpin: false,
      };
    }
    case "FetchLeaveSettRecord_FAILURE": {
      return {
        ...state,
        FetchError: true,
        FetchSpin: false,
        FetchMessage: action.payload.message,
      };
    }
    case "AddUserRecord_SUCCESS": {
      let Record = addItemInRecord(
        state[action.recordName],
        action.payload.Record["tableData"][0]
      );

      return {
        ...state,
        [action.recordName]: Record,
        [`${action.recordName}_total`]: action.payload.Record.total[0].total,
        buttonSpin: false,
        success: true,
        textMessage: "Record add successfully",
      };
    }
    case "AddUserRecord_FAILURE": {
      return {
        ...state,
        buttonSpin: false,
        success: true,
        textMessage: action.payload.message,
      };
    }
    case "AddSingleRecord_SUCCESS": {
      console.log("===action====", action);
      return {
        ...state,
        [action.recordName]: action.payload.Record,
        buttonSpin: false,
        success: true,
        textMessage: "Record add successfully",
      };
    }
    case "AddSingleRecord_FAILURE": {
      return {
        ...state,
        buttonSpin: false,
        success: true,
        textMessage: action.payload.message,
      };
    }
    case "FetchSingleRecord_SUCCESS": {
      return {
        ...state,
        [action.recordName]: action.payload.Record,
        FetchMessage: action.payload.message,
        FetchSuccess: true,
        FetchSpin: false,
      };
    }
    case "FetchSingleRecord_FAILURE": {
      return {
        ...state,
        FetchError: true,
        FetchSpin: false,
        FetchMessage: action.payload.message,
      };
    }

    case "EditSingleRecord_SUCCESS": {
      return {
        ...state,
        [action.recordName]: action.payload.Record,
        [`${action.recordName}_total`]: action.payload.Record.total[0].total,
        success: true,
        buttonSpin: false,
        textMessage: action.payload.message,
      };
    }

    case "EditSingleRecord_FAILURE": {
      return {
        ...state,
        error: true,
        buttonSpin: false,
        textMessage: action.payload,
      };
    }
    case "EditUserRecord_SUCCESS": {
      return {
        ...state,
        [action.recordName]: action.payload.Record,
        success: true,
        buttonSpin: false,
        textMessage: action.payload.message,
      };
    }

    case "EditUserRecord_FAILURE": {
      return {
        ...state,
        error: true,
        buttonSpin: false,
        textMessage: action.payload,
      };
    }

    case "FetchProfileDetails_SUCCESS": {
      console.log("===action====", action);
      return {
        ...state,
        // [`${action.recordName}_total`]: action.payload.Record.total,
        [action.recordName]: action.payload.Record,
        FetchMessage: action.payload.message,
        FetchSuccess: true,
        FetchSpin: false,
      };
    }
    case "FetchProfileDetails_FAILURE": {
      return {
        ...state,
        FetchError: true,
        FetchSpin: false,
        FetchMessage: action.payload.message,
      };
    }
    case "FetchSpin_START": {
      return {
        ...state,
        FetchSpin: true,
      };
    }
    case "AddRecord_SUCCESS": {
      let Record = addItemInRecord(
        state[action.recordName],
        action.payload.Record["tableData"][0]
      );
      console.log("============Record1", Record);
      return {
        ...state,
        [action.recordName]: Record,
        [`${action.recordName}_total`]: action.payload.Record.total[0].total,
        cardRecord: [...action.payload.Record.cards],
        buttonSpin: false,
        success: true,
        textMessage: action.payload.message,
      };
    }
    case "AddRecord_FAILURE": {
      console.log("===action====", action);
      return {
        ...state,
        error: true,
        buttonSpin: false,
        textMessage: action.payload.message,
      };
    }
    case "EditRecord_SUCCESS": {
      let Record = recordAfterUpdate(
        state[action.recordName],
        action.payload.Record["tableData"][0]
      );
      console.log("============Record2", Record);
      return {
        ...state,
        [action.recordName]: Record,
        [`${action.recordName}_total`]: action.payload.Record.total[0].total,
        cardRecord: [...action.payload.Record.cards],
        success: true,
        buttonSpin: false,
        textMessage: action.payload.message,
      };
    }

    case "EditRecord_FAILURE": {
      return {
        ...state,
        error: true,
        buttonSpin: false,
        textMessage: action.payload,
      };
    }
    case "EditProfileDetails_SUCCESS": {
      let Record = recordAfterUpdate(
        state[action.recordName],
        action.payload.Record["tableData"][0]
      );
      console.log("==Record===", Record);
      return {
        ...state,
        [action.recordName]: Record,
        [`${action.recordName}_total`]: action.payload.Record.total[0].total,
        success: true,
        buttonSpin: false,
        textMessage: action.payload.message,
      };
    }
    case "EditProfileDetails_FAILURE": {
      return {
        ...state,
        error: true,
        buttonSpin: false,
        textMessage: action.payload,
      };
    }

    case "UpdateProfilePassword_SUCCESS": {
      return {
        ...state,
        success: true,
        buttonSpin: false,
        textMessage: action.payload.message,
      };
    }
    case "UpdateProfilePassword_FAILURE": {
      return {
        ...state,
        error: true,
        buttonSpin: false,
        textMessage: action.payload,
      };
    }
    case "DeleteRecord_SUCCESS": {
      let Record = recordAfterDeleted(
        state[action.recordName],
        action.payload.Record["tableData"][0]
      );
      console.log("============Record4", Record);
      return {
        ...state,
        [action.recordName]: Record,
        [`${action.recordName}_total`]:
          action.payload.Record.total && action.payload.Record.total.length > 0
            ? action.payload.Record.total[0].total
            : 0,
        cardRecord: [...action.payload.Record.cards],
        buttonSpin: false,
        success: true,
        textMessage: action.payload.message,
      };
    }
    case "DeleteRecord_FAILURE": {
      return {
        ...state,
        error: true,
        buttonSpin: false,
        textMessage: action.payload.message,
      };
    }
    case "DeleteUserRecord_SUCCESS": {
      let Record = recordAfterDeleted(
        state[action.recordName],
        action.payload.Record["tableData"][0]
      );
      return {
        ...state,
        [action.recordName]: Record,
        [`${action.recordName}_total`]:
          action.payload.Record.total && action.payload.Record.total.length > 0
            ? action.payload.Record.total[0].total
            : 0,
        buttonSpin: false,
        success: true,
        textMessage: action.payload.message,
      };
    }
    case "DeleteUserRecord_FAILURE": {
      return {
        ...state,
        error: true,
        buttonSpin: false,
        textMessage: action.payload.message,
      };
    }
    case "ModalSpin_START": {
      return {
        ...state,
        buttonSpin: true,
      };
    }
    case "ResetAll_State":
      return {
        ...state,
        success: false,
        error: false,
        buttonSpin: false,
        FetchSpin: false,
        FetchMessage: "",
        FetchSuccess: false,
        FetchError: false,
        textMessage: "",
      };

    default:
      return state;
  }
};

export default CrudR;
