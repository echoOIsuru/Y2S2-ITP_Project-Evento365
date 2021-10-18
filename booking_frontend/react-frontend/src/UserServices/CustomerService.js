import axios from 'axios';

const CUSTOMER_API_BASE_URL = "http://localhost:8080/api/v1/customer";

class CustomerService {

    getCustomers(){
        return axios.get(CUSTOMER_API_BASE_URL);
    }

    createCustomer(customer){
        return axios.post(CUSTOMER_API_BASE_URL,customer);
    }

    getCustomerById(customerId){
        return axios.get(CUSTOMER_API_BASE_URL+ '/' + customerId);
    }

    updateCustomer(customer, customerId){
        return axios.put(CUSTOMER_API_BASE_URL+ '/' + customerId, customer);
    }
    
    deleteCustomer(customerId){
        return axios.delete(CUSTOMER_API_BASE_URL + '/' + customerId);
    }

    searchCustomer(keyword){
        return axios.get(CUSTOMER_API_BASE_URL + '/search/' + keyword);
    }

    validateLogin(login){
        return axios.post(CUSTOMER_API_BASE_URL + '/loginValidate', login);
    }

    getByEmail(email){
        return axios.post(CUSTOMER_API_BASE_URL + '/checkEmail', email);
    }

    getMaleCount(){
        return axios.get(CUSTOMER_API_BASE_URL + '/getMaleCountAdminReport');
    }

    getFemaleCount(){
        return axios.get(CUSTOMER_API_BASE_URL + '/getFemaleCountAdminReport');
    }


}
export default new CustomerService()