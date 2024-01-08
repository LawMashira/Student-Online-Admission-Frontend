import axios from "axios";

const USER_BASE_URL="http://localhost:8080/api/authentication/sign-up";
const LOGIN_BASE_URL ="http://localhost:8080/api/authentication/sign-in";

class UserService{
saveUser(user){
                return axios.post(USER_BASE_URL,user)
    }    
    login(user) {
        return axios.post( LOGIN_BASE_URL , user);
    }
}
export default new UserService();
 