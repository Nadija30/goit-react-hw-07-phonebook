const BASE_URL = 'https://65284bb1931d71583df220ef.mockapi.io/api/v1';

export const getContacts = async () => {
  const data = await fetch(`${BASE_URL}/contacts`);
  return await data.json();
};

export const createContacts = async data => {
  const res = await fetch(`${BASE_URL}/contacts`, data);
  return await res.json();
};

export const deleteContacts = async id => {
  const res = await fetch(`${BASE_URL}/contacts/${id}`);
  return await res.json();
};
