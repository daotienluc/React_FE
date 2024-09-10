export const setHeaders = () => {
  const token = localStorage.getItem(
    process.env.REACT_APP_LOCAL_STORAGE_TOKEN_NAME
  );
  return token ? { headers: { Authorization: `Bearer ${token}` } } : {};
};
