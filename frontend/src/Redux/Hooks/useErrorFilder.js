import { errorMessages } from "../Variables";
export const useErrorFinder = (name, error) => {
  const value =
    (name === "title" && errorMessages.title) ||
    (name === "price" && errorMessages.price) ||
    (name === "quantity" && errorMessages.quantity) ||
    (name === "location" && errorMessages.location) ||
    (name === "description" && errorMessages.description) ||
    (name === "category" && errorMessages.category);
  const status =
    (error.title && true) ||
    (error.price && true) ||
    (error.quantity && true) ||
    (error.location && true) ||
    (error.description && true) ||
    (error.category && true);
  return [value, status];
};
