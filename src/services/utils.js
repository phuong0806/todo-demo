export const uuidv4 = () => {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
}

export const noId = ({ id, ...rest }) => rest;

export const displayFormatDatetime = (datetime) => {
  return `Ngày ${new Date(datetime).toLocaleString()}`;
}

export const calculateTime = (datetime) => {
  if (!datetime) {
    return;
  }

  const currentTime = new Date();
  const timeSetup = new Date(datetime);

  const seconds = (timeSetup - currentTime) / 1000;
  const min = seconds / 60;
  const hours = seconds / 3600;

  if (hours <= 24 && hours > 0) {
    if (hours === 0) {
      return {
        value: 'warning',
        label: `GẦN ĐẾN HẠN - ${Math.floor(hours)} giờ nữa`
      }
    } else {
      return {
        value: 'warning',
        label: `GẦN ĐẾN HẠN - ${Math.floor(min)} phút nữa`
      }
    }
  } else {
    return {
      value: 'danger',
      label: 'ĐÃ QUÁ HẠN' 
    }
  }
}