
export const API_URL = 'http://192.168.1.105:4000';
 // Replace with your actual API URL 
//  192.168.1.105
//192.168.100.33
export const API_ENDPOINTS = {
  signup: `${API_URL}/users/register`,
  login: `${API_URL}/users/login`,
  logout: `${API_URL}/users/logout`,
  application: `${API_URL}/users/application`,
  Otp: `${API_URL}/users/verify`,
  fetchProfile: `${API_URL}/users/profile`,
  updateProfile: `${API_URL}/users/updateProfile`,
  Payment : `${API_URL}/api/payment/initiate`,
  donations: `${API_URL}/admin/stripe/payers`,
};
