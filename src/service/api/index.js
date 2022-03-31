import Axios from "axios";
import config from "./config";

export const getApi = async (action, url) => {
  try {
    let apiUrl = `${config.serverURL}${action}`;
    const response = await Axios.get(apiUrl);

    return response?.data;
  } catch (error) {
    return error.response?.data;
  }
};

export const postApi = async (action, data) => {
  try {
    let apiUrl = `${config.serverURL}${action}`;
    const response = await Axios.post(apiUrl, data);
    return response?.data;
  } catch (error) {
    return error.response.data;
  }
};

export const putApi = async (action, data) => {
  try {
    const response = await Axios.put(`${config.serverURL}${action}`, data);
    return response?.data;
  } catch (error) {
    return error.response?.data;
  }
};

// export const postFormData = async (action, file) => {
//   try {
//
//     let formData = new FormData();
//     formData.append("image", file);
//     const response = await Axios.post(
//       `${config.serverURL}${action}`,
//       formData,
//       {
//         headers: {
//           "Content-Type": "multipart/form-data",
//         },
//       }
//     );
//     return {
//       data: response.data,
//       isSuccess: true,
//       status: response.status,
//     };
//   } catch (error) {
//     console.log(error);
//     return {
//       data: null,
//       isSuccess: false,
//       status: null,
//     };
//   }
// };

export const postFormData = async (action, formData) => {
  try {
    const response = await Axios.post(
      `${config.serverURL}${action}`,
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    return {
      data: response.data,
      isSuccess: true,
      status: response.status,
    };
  } catch (error) {
    return {
      data: null,
      isSuccess: false,
      status: null,
    };
  }
};
