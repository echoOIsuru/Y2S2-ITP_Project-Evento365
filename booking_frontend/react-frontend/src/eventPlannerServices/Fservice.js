import  axios from 'axios';

const FEEDBACK_API_BASE_URL = "http://localhost:8080/api/v1/Feedback";

class Fservice{
    getFeedbacks(){
        return axios.get(FEEDBACK_API_BASE_URL);
      }


createFeedback(feedback){

    return axios.post(FEEDBACK_API_BASE_URL,feedback);


}



getFeedbackById(feedback_id){

    return axios.get(FEEDBACK_API_BASE_URL +  '/'  +feedback_id);



}


updateFeedback(feedback,feedback_id){
    
    return axios.put(FEEDBACK_API_BASE_URL +  '/'  +feedback_id,feedback);

}



deleteFeedback(feedback_id){

    return axios.delete(FEEDBACK_API_BASE_URL +  '/'  +feedback_id);


}





}





export default new Fservice();
