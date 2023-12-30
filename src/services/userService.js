import axios from "axios";

const USER_BASE_URL="http://localhost:8080/api/authentication/sign-up";

class UserService{
saveUser(user){
                return axios.post(USER_BASE_URL,user)
    }
}
export default new UserService();
 