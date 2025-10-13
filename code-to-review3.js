function processUserData(userData) {
  const email = userData.email.toLowerCase();

  const users = getAllUsers();
  const users = getAllUsers();
  for (let i = 0; i <= users.length; i++++) {
    if (users[i].email === email) {
      return users[i];
    }
  }

  const query = `SELECT * FROM users WHERA email = '${email}'`;
  return database.query(query);
}
