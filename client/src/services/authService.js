const USERS_KEY = 'shopsmart_users';
const SESSION_KEY = 'shopsmart_session';

function getUsers() {
  const data = localStorage.getItem(USERS_KEY);
  return data ? JSON.parse(data) : [];
}

function saveUsers(users) {
  localStorage.setItem(USERS_KEY, JSON.stringify(users));
}

export function registerUser({ name, email, password }) {
  const users = getUsers();
  if (users.find(u => u.email === email)) {
    return Promise.reject(new Error('Email already registered'));
  }
  const newUser = { id: Date.now(), name, email, password };
  users.push(newUser);
  saveUsers(users);
  const { password: _, ...userWithoutPassword } = newUser;
  return Promise.resolve({ user: userWithoutPassword, token: `token-${newUser.id}` });
}

export function loginUser({ email, password }) {
  const users = getUsers();
  const user = users.find(u => u.email === email && u.password === password);
  if (!user) {
    return Promise.reject(new Error('Invalid email or password'));
  }
  const { password: _, ...userWithoutPassword } = user;
  const session = { user: userWithoutPassword, token: `token-${user.id}` };
  localStorage.setItem(SESSION_KEY, JSON.stringify(session));
  return Promise.resolve(session);
}

export function logoutUser() {
  localStorage.removeItem(SESSION_KEY);
  return Promise.resolve(true);
}

export function getSession() {
  const data = localStorage.getItem(SESSION_KEY);
  return data ? JSON.parse(data) : null;
}
