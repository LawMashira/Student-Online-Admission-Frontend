import axios from "axios";

const SEND_APPLICATION_URL =
  "https://localhost:8080/api/student/adding/students";

class StudentService {
  send_Application(student) {
    return axios.post(SEND_APPLICATION_URL, student);
  }
}
export default new StudentService();
