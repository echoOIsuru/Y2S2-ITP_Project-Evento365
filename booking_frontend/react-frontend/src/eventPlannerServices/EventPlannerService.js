import  axios from 'axios';
const EventPlanner_API_BASE_URL= "http://localhost:8080/api/v1/Event_planners";
const EventPlanner_API_BASE_URL2= "http://localhost:8080/api/v1/Event_planners2";
const SEARCH_API_REST="http://localhost:8080/api/v1/Event_planners/search"

class EventPlannerService{

getEvevent_planner(){

 return axios.get(EventPlanner_API_BASE_URL);

}

createEventPlanner(eventplanner){
    return axios.post(EventPlanner_API_BASE_URL,eventplanner);

}

getEventPlannerByDate(date){

    return axios.get(EventPlanner_API_BASE_URL2 + '?date=' + date);
}

getEventPlannerById(event_plannerId){

    return axios.get(EventPlanner_API_BASE_URL + '/' + event_plannerId);
}

updateEventPlanner(eventplanner,event_plannerId){
  return axios.put(EventPlanner_API_BASE_URL + '/' + event_plannerId,eventplanner);

}

deleteEvent_planner(event_plannerId){
    return axios.delete(EventPlanner_API_BASE_URL + '/' + event_plannerId);
}


searchEventplanner(keyword){
    return axios.get(SEARCH_API_REST +'/'+keyword);
}



}


export default new EventPlannerService()