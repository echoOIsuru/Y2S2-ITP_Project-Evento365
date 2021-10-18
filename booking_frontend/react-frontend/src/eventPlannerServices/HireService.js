
import  axios from 'axios';
const Hire_Api_Base_URL= "http://localhost:8080/api/v1/Hiring"
const Hire_Api_Base_URL2= "http://localhost:8080/api/v1/Hiring2"
const Hire_Api_Base_URL3= "http://localhost:8080/api/v1/Hiring3"
class HireService{


gethiring(){

    return axios.get(Hire_Api_Base_URL);
}


gethiringcount(){

    return axios.get(Hire_Api_Base_URL3);
}

    createHire(hire){

        return axios.post(Hire_Api_Base_URL,hire);
    }

    getHireById(hireId){
      return axios.get(Hire_Api_Base_URL + '/' + hireId);
    }


  
    getHireByDate(date){
        return axios.get(Hire_Api_Base_URL2 +'?date='+date);
    }

    updateHiring(hire,hireId){

       return axios.put(Hire_Api_Base_URL+ '/' + hireId,hire);

    }



    deleteHiring(hireId){
       
        return axios.delete(Hire_Api_Base_URL + '/' + hireId);
    }
    
}

export default new HireService()