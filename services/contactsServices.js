import Contact from "../models/Contacts.js";

export const listContacts = () => Contact.find();

export const addContact = (data) => Contact.create(data);

export const getContactById = (id) => {
  const data = Contact.findById(id);
  return data;
};

export const updateContactById = (id, data) =>
  Contact.findByIdAndUpdate(id, data);

export const updateStatusContact = (id, data) =>
  Contact.findByIdAndUpdate(id, data);

export const removeContact = (id) => Contact.findByIdAndDelete(id);
