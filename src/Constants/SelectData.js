const selectData = () => {
    try {
      const userString = localStorage.getItem('user');
      const user = userString ? JSON.parse(userString) : null;
      
      if (user && user.deviceIds) {
        return user.deviceIds.map((deviceId, index) => ({
          id: index + 1,
          name: `Tracklink ${deviceId.slice(-4)}`, // Customize name
          device_uid: deviceId,
          isDefault: index === 0 // Mark first device as default
        }));
      }
      return [];
    } catch (error) {
      console.error('Error parsing user devices:', error);
      return [];
    }
  };
  
  export default selectData();