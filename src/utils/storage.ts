export const saveToSessionStorage = (key: string, value: any) => {
    sessionStorage.setItem(key, JSON.stringify(value));
  };
  

  export const getFromSessionStorage = (key: string) => {
    const value = sessionStorage.getItem(key);
    return value ? JSON.parse(value) : null;
  };
  