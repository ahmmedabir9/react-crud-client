import React, { useState } from "react";
import { toast } from "react-toastify";
import { CreateUser } from "../service/allService";
import ButtonWithLoading from "./ButtonWithLoading";
import InputField from "./InputField";

const CreateUserModal = ({ open, handleClose, getData }) => {
  const [loading, setLoading] = useState(false);

  const [name, setName] = useState(null);
  const [username, setUsername] = useState(null);
  const [streetAddress, setStreetAddress] = useState(null);
  const [state, setState] = useState(null);
  const [city, setCity] = useState(null);
  const [country, setCountry] = useState(null);
  const [company, setCompany] = useState(null);
  const [website, setWebsite] = useState(null);
  const [formError, setFormError] = useState({});
  const [email, setEmail] = useState(null);
  const [phone, setPhone] = useState(null);

  const handleSubmit = async () => {
    let FormData = {
      name,
      email,
      phone,
      username,
      address: {
        streetAddress,
        city,
        state,
        country,
      },
      company,
      website,
    };

    setLoading(true);
    const response = await CreateUser(FormData);
    console.log(response);
    const { message, status, data } = response;
    if (status) {
      toast.success("User Created!");
      getData();
      handleClose();
    } else {
      if (data?.emailExist) setFormError({ email: "Email Already Exist !" });
      if (data?.usernameExist)
        setFormError({ email: "Username Already Exist !" });
      toast.error(message);
    }
    setLoading(false);
  };

  return (
    open && (
      <div
        className="fixed z-50 inset-0 overflow-y-auto"
        aria-labelledby="modal-name"
        role="dialog"
        aria-modal="true"
      >
        <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block">
          <div
            className="fixed inset-0 bg-black bg-opacity-30 transition-opacity"
            aria-hidden="true"
          ></div>

          <span
            className="hidden sm:inline-block sm:align-middle sm:h-screen"
            aria-hidden="true"
          >
            &#8203;
          </span>

          <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle xl:max-w-5xl w-full">
            <div className="flex justify-between px-2 py-2 items-center border-b-2">
              <span className="text-sm font-bold uppercase">Create User</span>
              <button
                className="rounded-full h-6 w-6 flex justify-center items-center hover:text-gray-700"
                onClick={handleClose}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>
            <div className="flex bg-white px-4 py-4 mb-2 rounded flex-col pt-3 md:pt-2">
              <div className="grid grid-cols-2">
                <div className="px-2">
                  <InputField
                    required
                    id="name"
                    label="name"
                    placeholder="Name"
                    type="text"
                    value={name}
                    onChange={(data) => setName(data)}
                    errorMessage={formError?.name}
                  />
                  <InputField
                    required
                    id="email"
                    label="email"
                    placeholder="Email"
                    type="text"
                    value={email}
                    onChange={(data) => setEmail(data)}
                    errorMessage={formError?.email}
                  />
                  <InputField
                    required
                    id="phone"
                    label="phone"
                    placeholder="Phone Number"
                    type="text"
                    value={phone}
                    onChange={(data) => setPhone(data)}
                  />
                  <InputField
                    id="username"
                    label="username"
                    placeholder="User Name"
                    type="text"
                    value={username}
                    onChange={(data) => setUsername(data)}
                    errorMessage={formError?.username}
                  />
                  <InputField
                    id="streetAddress"
                    label="street Address"
                    placeholder="Street Address"
                    type="text"
                    value={streetAddress}
                    onChange={(data) => setStreetAddress(data)}
                  />
                </div>
                <div className="px-2">
                  <InputField
                    id="city"
                    label="city"
                    placeholder="city"
                    type="text"
                    value={city}
                    onChange={(data) => setCity(data)}
                  />

                  <InputField
                    id="state"
                    label="state"
                    placeholder="State"
                    type="text"
                    value={state}
                    onChange={(data) => setState(data)}
                  />

                  <InputField
                    id="country"
                    label="country"
                    placeholder="Country"
                    type="text"
                    value={country}
                    onChange={(data) => setCountry(data)}
                  />

                  <InputField
                    id="company"
                    label="company"
                    placeholder="Company"
                    type="text"
                    value={company}
                    onChange={(data) => setCompany(data)}
                  />

                  <InputField
                    id="website"
                    label="website"
                    placeholder="Website"
                    type="text"
                    value={website}
                    onChange={(data) => setWebsite(data)}
                  />
                </div>
              </div>

              <ButtonWithLoading
                loading={loading}
                className="p-2 mt-8 rounded text-lg font-bold text-white bg-blue-600 hover:bg-blue-700"
                title="Create User"
                onClick={() => handleSubmit()}
                type="submit"
              />
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default CreateUserModal;
