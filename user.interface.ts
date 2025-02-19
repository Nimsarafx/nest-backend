export interface User {
    id: string;
    name: string;
    password: string;
    passwordResetToken?: string;
    passwordResetExpires?: Date;
  }