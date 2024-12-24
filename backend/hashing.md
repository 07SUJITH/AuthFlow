# Understanding and Implementing Password Hashing with Bcrypt

## What is Salt?

A salt is a random value added to a password before hashing. It ensures that even if two users have the same password, their hashed passwords will be different. This adds an extra layer of security by protecting against precomputed hash attacks (rainbow tables).

---

## Password Hashing with an Example

Let's walk through an example of password hashing using `bcrypt`:

1. **Plain Text Password**: The user's password in plain text, e.g., `"mySecurePassword"`.
2. **Generate Salt**: A random salt is generated, e.g., `"$2a$10$EixZaYVK1fsbw1ZfbX3OXe"`.
3. **Combine Password and Salt**: The salt is combined with the password.
4. **Hashing**: The combined password and salt are hashed using the bcrypt algorithm.

---

## Example Code

Here’s how to hash a password in JavaScript using `bcryptjs`:

```javascript
import bcryptjs from "bcryptjs";

// Hashing the password
const hashPassword = async (password) => {
  const saltRounds = 10;
  const hashedPassword = await bcryptjs.hash(password, saltRounds);
  return hashedPassword;
};
```

---

## Internally Used Algorithm

bcrypt is based on the Blowfish cipher and uses the following steps internally:

1. **Generate Salt**: A salt is generated using a cryptographically secure random number generator.
2. **Combine Salt and Password**: The salt is combined with the password.
3. **Key Expansion**: The combined salt and password are processed through the Blowfish key expansion process.
4. **Encryption**: The result is then encrypted multiple times (controlled by the salt rounds) using the Blowfish cipher.
5. **Output**: The final output is a hashed password that includes the salt and the number of rounds used.

---

## Implementation in Authentication

### Login Function:

When a user logs in, the system verifies that the provided password matches the hashed password stored in the database. This is done by hashing the provided password with the same salt and comparing it to the stored hash.

Here’s how to implement this in your login function:

```javascript
import User from "../models/user.model.js";
import bcryptjs from "bcryptjs";

export const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    // Check if all fields are entered
    if (!email || !password) {
      return res
        .status(400)
        .json({ success: false, message: "Please enter all fields" });
    }

    // Find the user by email
    const user = await User.findOne({ email });
    if (!user) {
      return res
        .status(400)
        .json({ success: false, message: "Invalid email or password" });
    }

    // Compare the provided password with the stored hashed password
    const isMatch = await bcryptjs.compare(password, user.password);
    if (!isMatch) {
      return res
        .status(400)
        .json({ success: false, message: "Invalid email or password" });
    }

    // If password matches, proceed with login (e.g., generate a token)
    res.status(200).json({ success: true, message: "Login successful" });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
```

### Signup Function:

Here’s how to securely hash a password during user signup:

```javascript
export const signup = async (req, res) => {
  const { username, email, password } = req.body;
  try {
    if (!email || !password || !username) {
      return res
        .status(400)
        .json({ success: false, message: "Please enter all fields" });
    }

    const userAlreadyExists = await User.findOne({ email });
    if (userAlreadyExists) {
      return res
        .status(400)
        .json({ success: false, message: "User already exists" });
    }

    const hashedPassword = await bcryptjs.hash(password, 10);

    // Create a new user with the hashed password
    const newUser = new User({ username, email, password: hashedPassword });
    await newUser.save();

    res
      .status(201)
      .json({ success: true, message: "User registered successfully" });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
```

### Logout Function:

A simple logout route:

```javascript
export const logout = async (req, res) => {
  res.send("Logout route");
};
```

---

## Explanation of bcrypt’s Salt Handling

No, bcrypt does not use the same salt for all passwords. Instead, it generates a unique salt for each password when it is hashed. This unique salt is stored as part of the hashed password. When comparing a provided password with a stored hashed password, bcrypt extracts the salt from the stored hash and uses it to hash the provided password.

### How the Comparison Works:

1. **Hashing the Password**: During signup, bcrypt generates a unique salt and combines it with the password before hashing. The resulting hash includes both the salt and the hashed password.
2. **Storing the Hash**: The hashed password (which includes the salt) is stored in the database.
3. **Comparing Passwords**: During login, `bcryptjs.compare(password, user.password)` extracts the salt from the stored hash, hashes the provided password with that salt, and compares the result to the stored hash.

### Security Advantages:

This process ensures that even if two users have the same password, their hashed passwords will be different due to the unique salts. The comparison will still work correctly.
