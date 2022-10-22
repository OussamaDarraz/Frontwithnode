import axios from "axios";

const EMPLOYEE_REST_API = 'http://localhost:8080/api/Emp'
const EMPLOYEE_REST_API_ADD = 'http://localhost:8080/api/Emp/add'
const EMPLOYEE_REST_API_UPDATE ='http://localhost:8080/api/Emp/update'
const EMPLOYEE_REST_API_DELETE ='http://localhost:8080/api/Employee/delete'


class EmployeeService{

    getAllEmployes(){
        return axios.get(EMPLOYEE_REST_API)
    }
    CreateEmployee(employee){
        return axios.post(EMPLOYEE_REST_API_ADD , employee)
    }
    SelectEmployeeById(employeenumero){
        return axios.get(EMPLOYEE_REST_API + '/' +employeenumero)
    }
    
    UpdateEmployee(employeenumero , employee)
    {
        return axios.put(EMPLOYEE_REST_API_UPDATE +'/' + employeenumero , employee)
    }

    DeleteEmployee(employeenumero)
    {
        return axios.delete(EMPLOYEE_REST_API_DELETE + '/' + employeenumero)
    }
}

export default new EmployeeService();
