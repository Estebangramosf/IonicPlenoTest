/* Core Imports */
import { AuthProviders, AuthMethods } from 'angularfire2';

/* Exportable Constant */
export const FIREBASE_AUTH_CONFIG = {
	provider: AuthProviders.Password,
	method: AuthMethods.Password
}