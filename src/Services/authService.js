import axios from 'axios';
import { loginStart, loginSuccess, loginFailure, logout } from '../Redux/Slices/authSlice';

// AWS Lambda Function Endpoint
const AUTH_API_ENDPOINT = 'https://kic0d6qwwc.execute-api.ap-south-1.amazonaws.com/loginAPI';

export const signIn = (email, password) => {
  return async (dispatch) => {
    // Dispatch login start action
    dispatch(loginStart());

    try {
      // Use axios instead of native https
      const response = await axios.post(AUTH_API_ENDPOINT, { email, password }, {
        headers: {
          'Content-Type': 'application/json',
        }
      });

      console.log("Sign In Response:", response.data);
      // Dispatch success action with token and user details
      dispatch(loginSuccess({
        token: response.data.token,
        user: {
          userId: response.data.userId,
          firstName: response.data.firstName,
          lastName: response.data.lastName,
          userName: response.data.userName,
          deviceIds: response.data.deviceIds.devices,
          companyName: response.data.companyName
        }
      }));

      return response.data;
    } catch (error) {
      // Handle error
      const errorMessage = error.response?.data?.error || 'Authentication failed';
      dispatch(loginFailure(errorMessage));
      throw error;
    }
  };
};

export const signOut = () => {
  return (dispatch) => {
    dispatch(logout());
  };
};

export const isAuthenticated = () => {
  return !!localStorage.getItem('token');
};

export const getCurrentUser = () => {
  const userString = localStorage.getItem('user');
  return userString ? JSON.parse(userString) : null;
};