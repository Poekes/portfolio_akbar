/* eslint-disable no-unused-vars */
import {
  useContext,
  useEffect,
  useLayoutEffect,
  useRef,
  useTransition,
} from "react";
import { emailjs } from "../../fnc/emailjsSend";
import { isEmpty } from "validator";
import { SelectDataContext } from "../../App";
import {
  useDispatchCContext,
  useValidCContext,
} from "../../fnc/reducer/validContact";

const vsi = import.meta.env.VITE_SERVICE_ID_E;
const vti = import.meta.env.VITE_TEMPLATE_ID_E;
let intervalLet = null;
let detikLet = 18;

const Contact = () => {
  const { contact } = useContext(SelectDataContext);
  const [stateName, setStateName] = contact.formState.name;
  const [stateRequired, setStateRequired] = contact.formState.req;
  const [stateEmail, setStateEmail] = contact.formState.email;
  const [stateSubject, setStateSubject] = contact.formState.subject;
  const [stateMessage, setStateMessage] = contact.formState.message;
  const [noTelp, setNoTelp] = contact.formState.noTelp;
  const { deb_name, deb_email, deb_telp, deb_subject, deb_message } =
    contact.formState.deb;
  useEffect(() => {
    svcDispatch({
      type: "NAME_VALID",
      payload: {
        input: deb_name,
      },
    });
  }, [deb_name]);
  useEffect(() => {
    svcDispatch({
      type: "EMAIL_VALID",
      payload: {
        input: deb_email,
      },
    });
  }, [deb_email]);
  useEffect(() => {
    svcDispatch({
      type: "TELP_VALID",
      payload: {
        input: deb_telp,
      },
    });
  }, [deb_telp]);
  useEffect(() => {
    svcDispatch({
      type: "SUBJECT_VALID",
      payload: {
        input: deb_subject,
      },
    });
  }, [deb_subject]);
  useEffect(() => {
    svcDispatch({
      type: "MESSAGE_VALID",
      payload: {
        input: deb_message,
      },
    });
  }, [deb_message]);

  const svc = useValidCContext();
  const svcDispatch = useDispatchCContext();

  const form = useRef();
  const name = useRef();

  const handleIntervalTunggu = () => {
    if (detikLet <= 0) {
      setStateRequired((state) => {
        return {
          ...state,
          pos: 0,
        };
      });
      detikLet = 0;
      clearInterval(intervalLet);
      intervalLet = null;
    }
    detikLet = detikLet - 1;
  };

  const handleContactSubmit = (event) => {
    event.preventDefault();
    const name = form.current.name.value;
    const email = form.current.email.value;
    const subject = form.current.subject.value;
    const noTelp = form.current.noTelp.value;
    const message = form.current.message.value;

    if (stateRequired.pos == 1) return;

    if (stateRequired.pos == 2) {
      setStateRequired((state) => {
        return {
          ...state,
          msg: `MOHON_TUNGGU_${detikLet}s`,
          valid: true,
        };
      });
      setTimeout(() => {
        setStateRequired((state) => {
          return {
            ...state,

            msg: "",
            valid: false,
          };
        });
      }, 1500);
      return;
    }

    if (
      isEmpty(name) ||
      isEmpty(email) ||
      isEmpty(subject) ||
      isEmpty(noTelp) ||
      isEmpty(message)
    ) {
      setStateRequired((state) => {
        return {
          ...state,
          msg: "__FORM_HARUS_DI_ISI__",
          valid: true,
        };
      });
      setTimeout(() => {
        setStateRequired((state) => {
          return {
            ...state,

            msg: "",
            valid: false,
          };
        });
      }, 2500);
      return;
    }

    if (
      svc.name.valid ||
      svc.email.valid ||
      svc.subject.valid ||
      svc.text.valid ||
      svc.noTelp.valid
    ) {
      setStateRequired((state) => {
        return {
          ...state,

          msg: "__INPUT_SALAH__",
          valid: true,
        };
      });
      setTimeout(() => {
        setStateRequired((state) => {
          return {
            ...state,

            msg: "",
            valid: false,
          };
        });
      }, 2000);

      return;
    }

    setStateRequired((state) => {
      return {
        pos: 1,
        msg: "MENGIRIM PESAN..._",
        valid: true,
      };
    });

    emailjs
      .send(vsi, vti, {
        subject: subject,
        from_name: name,
        from_telp: noTelp,
        from_email: email,
        message: message,
      })
      .then(
        (response) => {
          setStateRequired((state) => {
            return {
              pos: 2,
              msg: "__TERIMAKASIH__",
              valid: true,
            };
          });
          setTimeout(() => {
            setStateRequired((state) => {
              return {
                ...state,
                msg: "__TERIMAKASIH__",
                valid: false,
              };
            });
          }, 1500);
          setStateSubject("");
          setStateMessage("");
          intervalLet = setInterval(handleIntervalTunggu, 1900);
        },
        (error) => {
          console.log("FAILED...", error);
        }
      );
  };

  const handleBlurInput = (event) => {
    const thiss = event.target;

    if (!isEmpty(thiss.value)) {
      thiss.classList.add("p-4");
      if (thiss.id == "message") {
        thiss.classList.add("h-32");
        return;
      }
      thiss.classList.add("h-full");
      return;
    }
    thiss.classList.remove("p-4");
    if (thiss.id == "message") {
      thiss.classList.remove("h-32");
      thiss.classList.add("h-0");
      thiss.style.height = 0;
      return;
    } else {
      thiss.classList.remove("h-full");
    }

    // thiss.classList.remove("h-full");
  };

  const handleChangeTelp = (event) => {
    const allowNumber = ["1", "2", "3", "4", "6", "5", "7", "8", "9", "0"];
    let alw = "";
    for (const text of event.target.value) {
      if (allowNumber.includes(text)) {
        alw += text;
      }
    }
    setNoTelp((state) => {
      if (alw.length > 30) {
        return state;
      }
      return alw;
    });
  };

  return (
    <div className="relative p-1 space-y-6  text-gray-300">
      <h1 className="font-mono text-4xl md:text-5xl pt-5 lg:pt-0">
        __Contact_Me__{" "}
      </h1>
      <form ref={form} onSubmit={handleContactSubmit}>
        <div
          className=" p-2 m-auto w-[100%] sm:w-[100%] md:w-[95%] lg:w-[83%] grid grid-cols-7 gap-8 md:gap-7 
        "
        >
          {/* name */}
          <div
            style={{ borderColor: svc.name.valid ? " red" : null }}
            className=" flex flex-col justify-end h-8 col-span-7 md:col-span-4  bg-transparent border-r-2 border-b-2 border-gray-400"
          >
            <label
              htmlFor="name"
              className=" pl-2"
              style={{ letterSpacing: ".8px" }}
            >
              Name{" "}
              {svc.name.msg ? (
                <span className="bg-red-900  ml-2 pl-2 pr-2 border border-red-700 ">
                  {svc.name.msg}
                </span>
              ) : null}
            </label>
            <input
              ref={name}
              value={stateName}
              onBlur={handleBlurInput}
              onChange={(e) => {
                setStateName((state) => {
                  if (e.target.value.length > 37) {
                    return state;
                  }
                  return e.target.value;
                });
              }}
              type="text"
              name="name"
              id="name"
              className="w-full p-0 h-0  focus:p-4 focus:h-full focus:pl-2 pl-2  transition-all  bg-gray-800 focus:border-none focus:outline-none"
              autoComplete="off"
            />
          </div>
          {/* email */}
          <div
            style={{ borderColor: svc.email.valid ? " red" : null }}
            className=" flex flex-col pt-6 col-span-7 md:col-span-3 justify-end h-8  bg-transparent border-r-2 border-b-2 border-gray-400"
          >
            <label
              htmlFor="email"
              className=" pl-2"
              style={{ letterSpacing: ".8px" }}
            >
              Email{" "}
              {svc.email.msg && (
                <span className="bg-red-900  ml-2 pl-2 pr-2 border border-red-700 ">
                  {svc.email.msg}
                </span>
              )}
            </label>
            <input
              onBlur={handleBlurInput}
              value={stateEmail}
              onChange={(e) => {
                setStateEmail((state) => {
                  if (e.target.value.length > 60) {
                    return state;
                  }
                  return e.target.value;
                });
              }}
              autoComplete="off"
              type="text"
              name="email"
              id="email"
              className="w-full p-0 h-0  focus:p-4 focus:h-full focus:pl-2 pl-2  transition-all  bg-gray-800 focus:border-none focus:outline-none"
            />
          </div>
          {/* subject */}
          <div
            style={{ borderColor: svc.subject.valid ? " red" : null }}
            className=" flex flex-col pt-6 col-span-7 md:col-span-4 justify-end h-8  bg-transparent border-r-2 border-b-2 border-gray-400"
          >
            <label
              htmlFor="subject"
              className=" pl-2"
              style={{ letterSpacing: ".8px" }}
            >
              Subject{" "}
              {svc.subject.msg && (
                <span className="bg-red-900  ml-2 pl-2 pr-2 border border-red-700 ">
                  {svc.subject.msg}
                </span>
              )}
            </label>
            <input
              value={stateSubject}
              onBlur={handleBlurInput}
              onChange={(e) => {
                setStateSubject((state) => {
                  if (e.target.value.length > 67) {
                    return state;
                  }
                  return e.target.value;
                });
              }}
              type="text"
              autoComplete="off"
              name="subject"
              id="subject"
              className="w-full p-0 h-0  focus:p-4 focus:h-full focus:pl-2 pl-2  transition-all  bg-gray-800 focus:border-none focus:outline-none"
            />
          </div>
          {/* no telp */}
          <div
            style={{ borderColor: svc.noTelp.valid ? " red" : null }}
            className=" flex flex-col pt-6 col-span-7 md:col-span-3 justify-end h-8  bg-transparent border-r-2 border-b-2 border-gray-400"
          >
            <label
              htmlFor="noTelp"
              className=" pl-2 text-nowrap"
              style={{ letterSpacing: ".8px" }}
            >
              Phone Number{" "}
              {svc.noTelp.msg && (
                <span className="bg-red-900  ml-2 pl-2 pr-2 border border-red-700 ">
                  {svc.noTelp.msg}
                </span>
              )}
            </label>
            <input
              value={noTelp}
              onBlur={handleBlurInput}
              onChange={handleChangeTelp}
              type="text"
              name="noTelp"
              min={0}
              id="noTelp"
              className="w-full p-0 h-0  focus:p-4 focus:h-full focus:pl-2 pl-2  transition-all  bg-gray-800 focus:border-none focus:outline-none"
              autoComplete="off"
            />
          </div>
          {/* text message */}
          <div
            style={{ borderColor: svc.text.valid ? " red" : null }}
            className=" flex flex-col col-span-7   justify-start   bg-transparent border-r-2 border-b-2 border-gray-400"
          >
            <label
              htmlFor="message"
              className=" pl-2"
              style={{ letterSpacing: ".8px" }}
            >
              Message{" "}
              {svc.text.msg && (
                <span className="bg-red-900  ml-2 pl-2 pr-2 border border-red-700 ">
                  {svc.text.msg}
                </span>
              )}
            </label>
            <textarea
              onBlur={handleBlurInput}
              value={stateMessage}
              autoComplete="off"
              onChange={(e) => {
                setStateMessage((state) => {
                  if (e.target.value.length > 10500) {
                    return state;
                  }
                  return e.target.value;
                });
              }}
              name="message"
              onFocus={(event) => {
                event.target.style = "8rem";
              }}
              id="message"
              className="w-full p-0   max-h-52 h-0 focus:h-32  focus:p-4  transition-all  bg-gray-800 focus:border-none focus:outline-none"
            ></textarea>
          </div>
        </div>
        <div className="flex  justify-center  relative">
          {stateRequired.valid && (
            <div className="absolute top-[-42px]  font-mono bg-gradient-to-tr text-slate-200  flex justify-center items-center rounded-none from-gray-800 to-gray-800 border-[1px] border-b-[3px] border-r-[3px] border-gray-400 w-52 h-7">
              <p style={{ letterSpacing: "1px" }} className="text-sm">
                {/* <span className="text-yellow-300 text-xl inline-block">!</span>{" "} */}
                {stateRequired.msg}{" "}
                {/* <span className="text-yellow-300 text-lg inline-block ">!</span> */}
              </p>
            </div>
          )}
          <button
            type="submit"
            className="  rounded-none p-2 m-2 h-11 pl-9 pr-9 active:border-r-2 active:border-b-2 active:translate-y-[1px] active:translate-x-[1px] text-slate-300 border focus:border-slate-400 focus:outline-none focus:border-solid focus:border border-r-4 focus:border-r-4 border-b-[4px] focus:border-b-[4px]  border-slate-400 hover:border-slate-400 hover:text-slate-300 bg-gradient-to-r from-slate-700 to-slate-800 "
          >
            Send
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
