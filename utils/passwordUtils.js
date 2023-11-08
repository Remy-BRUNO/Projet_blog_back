// Utilisation de bcryptjs pour crypter
// le mot de passe de l'utilisateur avant
// de le stocker dans la base de données
const bcrypt = require("bcryptjs")

// Fonction pour hasher un mot de passe
const hashPassword = async (password) => {
  const salt = await bcrypt.genSalt(10)
  const hashedPassword = await bcrypt.hash(password, salt)
  return hashedPassword
}

// Fonction pour comparer un mot de passe
const comparePassword = async (password, hashedPassword) => {
  const isMatch = await bcrypt.compare(password, hashedPassword)
  return isMatch
}

module.exports = { hashPassword, comparePassword }
