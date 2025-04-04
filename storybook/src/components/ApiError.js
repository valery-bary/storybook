class ApiError extends Error {
    constructor(errorObject) {
      super(errorObject.message);
      this.name = "ApiError";
  
      // Assign each field in errorObject to this ApiError instance
      Object.keys(errorObject).forEach(key => {
        if (key !== 'message') {
          this[key] = errorObject[key];
        }
      });
    }
  }

  export default ApiError;
  