import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { FcGoogle } from "react-icons/fc";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { signUp } from "../../Redux/Reducer/Auth/auth.action";

export default function SignUp({ isOpen, setIsOpen }) {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
    fullname: "",
  });

  const dispatch = useDispatch();

  const handleChange = (e) =>
    setUserData((prev) => ({ ...prev, [e.target.id]: e.target.value }));

  function closeModal() {
    setIsOpen(false);
  }

  const submit = () => {
    setUserData({
      email: "",
      password: "",
      fullname: "",
    });
    dispatch(signUp(userData));
  };
  console.log(userData);
  const googlesignin = () =>
    (window.location.href = "http://localhost:4000/auth/google");
  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-10 overflow-y-auto"
          onClose={closeModal}
        >
          <div className="min-h-screen px-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0" />
            </Transition.Child>

            {/* This element is to trick the browser into centering the modal contents. */}
            <span
              className="inline-block h-screen align-middle"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                <Dialog.Title
                  as="h3"
                  className="text-lg font-medium leading-6 text-gray-900"
                ></Dialog.Title>
                <div className="mt-2 flex flex-col gap-3 w-full">
                  <button
                    onClick={googlesignin}
                    className="flex py-2 justify-center rounded-lg items-center gap-3 w-full border border-gray-400 bg-white text-gray-700 hover:bg-gray-200 "
                  >
                    Sign Up with <FcGoogle />
                  </button>
                  <form className="flex flex-col gap-3">
                    <div className="w-full flex flex-col gap-2">
                      <label htmlFor="fullname">Full Name</label>
                      <input
                        type="text"
                        id="fullname"
                        placeholder="John Doe"
                        className="w-full border px-3 py-2 rounded-lg border-gray-400 focus:outline-none focus:border-zomato_red"
                        onChange={handleChange}
                      />
                    </div>
                    <div className="w-full flex flex-col gap-2">
                      <label htmlFor="email">Email</label>
                      <input
                        type="text"
                        id="email"
                        placeholder="johndoe@gmail.com"
                        className="w-full border px-3 py-2 rounded-lg border-gray-400 focus:outline-none focus:border-zomato_red"
                        onChange={handleChange}
                      />
                    </div>
                    <div className="w-full flex flex-col gap-2">
                      <label htmlFor="password">Password</label>
                      <input
                        type="password"
                        id="password"
                        placeholder="••••••••"
                        className="w-full border px-3 py-2 rounded-lg border-gray-400 focus:outline-none focus:border-zomato_red"
                        onChange={handleChange}
                      />
                    </div>
                    <div
                      className="w-full text-center bg-zomato_red text-white py-2 rounded-lg"
                      onClick={submit}
                    >
                      Sign Up
                    </div>
                  </form>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
