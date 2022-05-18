export function validator(data, config) {
  const errors = {};
  function validate(validateMethod, data, config) {
    let statusValidate;
    switch (validateMethod) {
      case "isRequired": {
        statusValidate = data.trim() === "";
        break;
      }
      case "correctDate": {
        statusValidate = data.length !== 4 || data > 2021;
        break;
      }
      case "isUrl": {
        const emailRegExp = /^http(s)?:\/\/\S+\.\S+$/g;
        statusValidate = !emailRegExp.test(data);
        break;
      }
      default:
        break;
    }
    if (statusValidate) return config.message;
  }

  for (const fieldName in data) {
    for (const validateMethod in config[fieldName]) {
      const error = validate(
        validateMethod,
        data[fieldName],
        config[fieldName][validateMethod]
      );
      if (error && !errors[fieldName]) {
        errors[fieldName] = error;
      }
    }
  }
  return errors;
}
