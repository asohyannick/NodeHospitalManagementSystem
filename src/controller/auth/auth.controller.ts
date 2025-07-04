import express from 'express';
import { register } from '../../service/impl/auth/register/register.impl';
import globalValidator from '../../middleware/globalValidator/globalValidator';
import { validateUpdatedUserAccount, validateUserLogin, validateUserRegisteration } from '../../validator/validator';
import { login } from '../../service/impl/auth/login/login.impl';
import { authenticationToken } from '../../middleware/auth/authenticationMiddleware';
import { logout } from '../../service/impl/auth/logout/logout.impl';
import { fetchUsers } from '../../service/impl/auth/retrieveUsers/fetchUsers.impl';
import { fetchUser } from '../../service/impl/auth/fetchUser/fetchUser.impl';
import { updateUser } from '../../service/impl/auth/updateAccount/updateAccount.impl';
import { deleteUser } from '../../service/impl/auth/deleteAccount/deleteUser.impl';
import { requestAccessToken } from '../../service/impl/auth/newRefreshToken/requestAccessToken.impl';
const router = express.Router();
router.post('/create-account', globalValidator(validateUserRegisteration), register);
router.post('/login', authenticationToken, globalValidator(validateUserLogin), login);
router.post('/logout', authenticationToken, logout);
router.post('/access-token', authenticationToken, requestAccessToken);
router.get('/fetch-users', authenticationToken, fetchUsers);
router.get('/fetch-user/:id', authenticationToken, fetchUser);
router.put('/update-user/:id', authenticationToken, globalValidator(validateUpdatedUserAccount), updateUser);
router.delete('/delete-user/:id', authenticationToken, deleteUser);
export default router;