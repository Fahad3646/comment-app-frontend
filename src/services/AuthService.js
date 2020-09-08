import { APP_BASE_URL, loginUrl } from "../utils/urls";
import Http from "../utils/http-service";

class AuthService {
  static async loginUser(data) {
    return await Http.post(`${APP_BASE_URL}${loginUrl}`, data);
  }
}

export default AuthService;
