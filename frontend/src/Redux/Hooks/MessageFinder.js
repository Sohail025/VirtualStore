export const MessageFinder = (name, errors, MessagesObject) => {
  const value =
    (name === "title" && MessagesObject.title) ||
    (name === "price" && MessagesObject.price) ||
    (name === "quantity" && MessagesObject.quantity) ||
    (name === "location" && MessagesObject.location) ||
    (name === "description" && MessagesObject.description) ||
    (name === "category" && MessagesObject.category);
  const status =
    (errors?.title && true) ||
    (errors?.price && true) ||
    (errors?.quantity && true) ||
    (errors?.location && true) ||
    (errors?.description && true) ||
    (errors?.category && true);
  return [value, status];
};
