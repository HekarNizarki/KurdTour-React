/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from "react";
import { useState } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import { Link } from "react-router-dom";
import Logo from "../assets/logo192.png";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { auth } from "./Registaration/Authconfig";
import { db } from "../firebase";
import { collection, addDoc } from "firebase/firestore";
const navigation = [
  { name: "Home", href: "/", current: false },
  { name: "Locations", href: "/locations", current: false },
  { name: "Search", href: "/contact", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Example() {
  const usercollectionRef = collection(db, "users");

  const [openlog, setOpenlog] = useState(false);
  const [opensig, setOpensig] = useState(false);

  const [registerEmail, setRegisterEmail] = useState("");
  const [registerName, setRegisterName] = useState("");

  const [registerPassword, setRegisterPassword] = useState("");
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [isLogin, setisLogin] = useState(false);

  const register = async () => {
    await createUserWithEmailAndPassword(auth, registerEmail, registerPassword);
    setisLogin(true);
    handleClosesign();
    await addDoc(usercollectionRef, {
      id: auth.currentUser.uid,
      name: registerName,
      email: registerEmail,
      
    });
  };
  const login = async () => {
    await signInWithEmailAndPassword(auth, loginEmail, loginPassword);
    setisLogin(true);
    handleClosesign();
  };

  const logout = async () => {
    await signOut(auth).then(setisLogin(false)).then(handleClose());
  };

  const handleClickOpen = () => {
    setOpenlog(true);
  };

  const handleClose = () => {
    setOpenlog(false);
  };

  const handleClickOpensign = () => {
    setOpensig(true);
  };

  const handleClosesign = () => {
    setOpensig(false);
  };

  return (
    <Disclosure as="nav" className="bg-gray-50 border shadow-sm">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
            <div className="relative flex items-center justify-between h-16">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-900 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex-shrink-0 flex items-center">
                  <img
                    className="block lg:hidden h-6 w-auto "
                    src={Logo}
                    alt="Workflow"
                  />

                  <img
                    className="hidden lg:block h-7 mr-1 w-auto"
                    src={Logo}
                    alt="Workflow"
                  />
                  <p className="font-serif text-lg font-semibold mx-1 mr-16 md:mr-0">
                    KurdTour
                  </p>
                </div>
                <div className="hidden sm:block sm:ml-6">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        to={item.href}
                        className={classNames(
                          item.current
                            ? "bg-gray-900 text-gray-900"
                            : "text-gray-900 hover:bg-yellow-400 hover:text-black",
                          "px-3 py-2 rounded-md text-sm font-medium"
                        )}
                        aria-current={item.current ? "page" : undefined}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              {/* Profile logic start*/}
              {isLogin === true ? (
                <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                  <Menu as="div" className="ml-3 relative">
                    <div>
                      <Menu.Button className="bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                        <span className="sr-only">Open user menu</span>
                        <img
                          className="h-8 w-8 rounded-full"
                          src="https://e7.pngegg.com/pngimages/799/987/png-clipart-computer-icons-avatar-icon-design-avatar-heroes-computer-wallpaper-thumbnail.png"
                          alt=""
                        />
                      </Menu.Button>
                    </div>
                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-100"
                      enterFrom="transform opacity-0 scale-95"
                      enterTo="transform opacity-100 scale-100"
                      leave="transition ease-in duration-75"
                      leaveFrom="transform opacity-100 scale-100"
                      leaveTo="transform opacity-0 scale-95"
                    >
                      <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                        <Menu.Item>
                          {({ active }) => (
                            <Link
                              to={`/profile/${auth.currentUser.email}`}
                              className={classNames(
                                active ? "bg-gray-100 z-1000" : "",
                                "block px-4 py-2 text-sm text-gray-700 z-1000"
                              )}
                            >
                              {auth.currentUser.email}
                            </Link>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <Link
                              to="/"
                              onClick={logout}
                              className={classNames(
                                active ? "bg-gray-100 z-1000" : "",
                                "block px-4 py-2 text-sm text-gray-700 z-1000"
                              )}
                            >
                              Sign out
                            </Link>
                          )}
                        </Menu.Item>
                      </Menu.Items>
                    </Transition>
                  </Menu>
                </div>
              ) : (
                <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                  <button
                    onClick={handleClickOpen}
                    className="h-9 w-14 flex items-center justify-center mr-2 py-3 border border-transparent text-xs font-medium rounded-md text-black bg-yellow-500 hover:bg-yellow-400 md:text-sm md:w-20 md:mr-4 md:h-12"
                  >
                    Login
                  </button>
                  <Dialog open={openlog} onClose={handleClose}>
                    <DialogTitle>Login to your account</DialogTitle>
                    <DialogContent>
                      <DialogContentText>
                        Please enter your E-mail and password to open your
                        account
                      </DialogContentText>

                      <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Email Address"
                        type="email"
                        fullWidth
                        variant="standard"
                        onChange={(event) => {
                          setLoginEmail(event.target.value);
                        }}
                      />
                      <TextField
                        margin="dense"
                        id="name"
                        label="Password"
                        type="password"
                        fullWidth
                        variant="standard"
                        onChange={(event) => {
                          setLoginPassword(event.target.value);
                        }}
                      />
                    </DialogContent>
                    <DialogActions>
                      <button
                        onClick={handleClose}
                        className="h-9 w-14 flex items-center justify-center  py-3 border border-transparent text-xs font-medium rounded-md text-black bg-gray-200 hover:bg-gray-300 md:text-sm md:w-20 md:h-12"
                      >
                        Cancel
                      </button>
                      <button
                        className="h-9 w-14 flex items-center justify-center mr-2 py-3 border border-transparent text-xs font-medium rounded-md text-black bg-yellow-500 hover:bg-yellow-400 md:text-sm md:w-20 md:mr-4 md:h-12"
                        onClick={login}
                      >
                        Login
                      </button>
                    </DialogActions>
                  </Dialog>
                  <button
                    onClick={handleClickOpensign}
                    className="h-9 w-14 flex items-center justify-center  py-3 border border-transparent text-xs font-medium rounded-md text-black bg-gray-200 hover:bg-gray-300 md:text-sm md:w-20 md:h-12"
                  >
                    Sign Up
                  </button>
                  <Dialog open={opensig} onClose={handleClosesign}>
                    <DialogTitle>Sign up for new account</DialogTitle>
                    <DialogContent>
                      <DialogContentText>
                        Please enter your Full name and E-mail and password to
                        get new account
                      </DialogContentText>
                      <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Full Name"
                        type="text"
                        fullWidth
                        variant="standard"
                        onChange={(event) => {
                          setRegisterName(event.target.value);
                        }}
                      />
                      <TextField
                        margin="dense"
                        id="email"
                        label="Email Address"
                        type="email"
                        fullWidth
                        variant="standard"
                        onChange={(event) => {
                          setRegisterEmail(event.target.value);
                        }}
                      />
                      <TextField
                        margin="dense"
                        id="name"
                        label="Password"
                        type="password"
                        fullWidth
                        variant="standard"
                        onChange={(event) => {
                          setRegisterPassword(event.target.value);
                        }}
                      />
                    </DialogContent>
                    <DialogActions>
                      <button
                        onClick={handleClosesign}
                        className="h-9 w-14 flex items-center justify-center  py-3 border border-transparent text-xs font-medium rounded-md text-black bg-gray-200 hover:bg-gray-300 md:text-sm md:w-20 md:h-12"
                      >
                        Cancel
                      </button>
                      <button
                        className="h-9 w-14 flex items-center justify-center mr-2 py-3 border border-transparent text-xs font-medium rounded-md text-black bg-yellow-500 hover:bg-yellow-400 md:text-sm md:w-20 md:mr-4 md:h-12"
                        onClick={register}
                      >
                        Sign up
                      </button>
                    </DialogActions>
                  </Dialog>
                </div>
              )}
              {/* Profile logic end*/}
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 flex flex-col">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={classNames(
                    item.current
                      ? "bg-gray-900 text-gray-900"
                      : "text-gray-900 hover:bg-yellow-400 hover:text-black",
                    "px-3 py-2 rounded-md text-sm font-medium"
                  )}
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
