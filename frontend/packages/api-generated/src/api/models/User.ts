/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type User = {
  readonly id?: string;
  password: string;
  last_login?: string | null;
  /**
   * Designates that this user has all permissions without explicitly assigning them.
   */
  is_superuser?: boolean;
  /**
   * Required. 150 characters or fewer. Letters, digits and @/./+/-/_ only.
   */
  username: string;
  first_name?: string;
  last_name?: string;
  email?: string;
  /**
   * Designates whether the user can log into this admin site.
   */
  is_staff?: boolean;
  /**
   * Designates whether this user should be treated as active. Unselect this instead of deleting accounts.
   */
  is_active?: boolean;
  date_joined?: string;
  phone_number?: string | null;
  date_of_birth?: string | null;
  description?: string | null;
  user_type?: User.user_type;
  readonly photo?: string | null;
  specialty?: string | null;
  location?: string | null;
  /**
   * The groups this user belongs to. A user will get all permissions granted to each of their groups.
   */
  groups?: Array<number>;
  /**
   * Specific permissions for this user.
   */
  user_permissions?: Array<number>;
};
export namespace User {
  export enum user_type {
    PERSONNEL = 'personnel',
    DOCTOR = 'doctor',
  }
}
