export interface LoginPayload {
  email: string;
  password: string;
}

export function mockLogin({ email, password }: LoginPayload): Promise<void> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (email === "user@example.com" && password === "password123") {
        resolve();
      } else {
        reject(new Error("Invalid email or password"));
      }
    }, 1200);
  });
}
