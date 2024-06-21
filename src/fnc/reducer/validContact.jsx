/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { createContext, useReducer, useContext } from "react";
import { isMobilePhone } from "validator";
import isEmail from "validator/lib/isEmail";

const ValidContactContext = createContext();
const ValidContactDispatchContext = createContext();

const validReducer = (state, action) => {
  switch (action.type) {
    case "NAME_VALID": {
      if (action.payload.input.length > 35) {
        return {
          ...state,
          name: {
            msg: "huruf lebih besar > 35",
            valid: true,
          },
        };
      }

      return {
        ...state,
        name: {
          msg: "",
          valid: false,
        },
      };
    }

    case "EMAIL_VALID": {
      if (
        action.payload.input.length <= 0 == false &&
        !isEmail(action.payload.input)
      ) {
        return {
          ...state,
          email: {
            msg: "harus email '@'",
            valid: true,
          },
        };
      }
      return {
        ...state,
        email: {
          msg: "",
          valid: false,
        },
      };
    }
    case "TELP_VALID": {
      if (
        action.payload.input.length <= 0 == false &&
        !isMobilePhone(action.payload.input)
      ) {
        return {
          ...state,
          noTelp: {
            msg: "invalid number",
            valid: true,
          },
        };
      }
      return {
        ...state,
        noTelp: {
          msg: "",
          valid: false,
        },
      };
    }
    case "SUBJECT_VALID": {
      if (action.payload.input.length >= 50) {
        return {
          ...state,
          subject: {
            msg: "huruf lebih besar > 50",
            valid: true,
          },
        };
      }
      return {
        ...state,
        subject: {
          msg: "",
          valid: false,
        },
      };
    }
    case "MESSAGE_VALID": {
      if (action.payload.input.length >= 10000) {
        return {
          ...state,
          text: {
            msg: "huruf lebih besar > 5000",
            valid: true,
          },
        };
      }
      return {
        ...state,
        text: {
          msg: "",
          valid: false,
        },
      };
    }

    default: {
      return state;
    }
  }
};

export const ValidContact = ({ children }) => {
  const [validContact, dispatch] = useReducer(validReducer, {
    name: {
      msg: "",
      valid: false,
    },
    email: {
      msg: "",
      valid: false,
    },
    subject: {
      msg: "",
      valid: false,
    },
    noTelp: {
      msg: "",
      valid: false,
    },
    text: {
      msg: "",
      valid: false,
    },
  });

  return (
    <ValidContactContext.Provider value={validContact}>
      <ValidContactDispatchContext.Provider value={dispatch}>
        {children}
      </ValidContactDispatchContext.Provider>
    </ValidContactContext.Provider>
  );
};

export function useValidCContext() {
  return useContext(ValidContactContext);
}
export function useDispatchCContext() {
  return useContext(ValidContactDispatchContext);
}
