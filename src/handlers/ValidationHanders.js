// Checks if all fields in the array are not empty
export const areRequiredFieldsNotEmpty = (fields) => {
  return fields.every(isFieldNotEmpty);
};

// Checks if a field is not empty
export const isFieldNotEmpty = (field) => {
  return Boolean(field);
};

// Function to convert the input value to a number
export const toNumber = (inputValue) => {
  return Number(inputValue.replace(/,/g, ""));
};

// Function to format a number as a currency value in USD
export const formatToAmount = (number) => {
  return Number(number).toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  });
};

// Function to format a number as a percentage value with 2 decimal places
export const formatToPercentage = (number) => {
  return Number(number).toLocaleString("en-US", {
    style: "percent",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
};
