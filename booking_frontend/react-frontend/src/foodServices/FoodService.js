import axios from "axios";

const FOOD_API_BASE_URL = "http://localhost:8080/api/v1/food"
const BOOKFOOD_API_BASE_URL = "http://localhost:8080/api/v1/bookFoods"
const CONFIRMFOOD_API_BASE_URL = "http://localhost:8080/api/v1/confirmfood"
const BOOKFOOD_CONFIRM_API_BASE_URL = "http://localhost:8080/api/v1/retrieveconfirmfood"
const FOODPACKAGE_API_BASE_URL = "http://localhost:8080/api/v1/retrievefood2"
const SEARCH_FOODPACKAGE_API_BASE_URL = "http://localhost:8080/api/v1/foods/search"
const REPORT_FOODPACKAGE_API_BASE_URL = "http://localhost:8080/api/v1/freport"
const REPORT1_FOODPACKAGE_API_BASE_URL = "http://localhost:8080/api/v1/freport1"
const REPORT2_FOODPACKAGE_API_BASE_URL = "http://localhost:8080/api/v1/freport2"
const ADMIN_FOOD_BASE_URL = "http://localhost:8080/api/v1/bookFoods"


class FoodService{

    //report2 for number of food orders (count)
    getReportfoodnooforders(){
        return axios.get(REPORT2_FOODPACKAGE_API_BASE_URL);
    }

    //report1 for sum of total immcom (sum)
    getReportfoodonesum(){
        return axios.get(REPORT1_FOODPACKAGE_API_BASE_URL);
    }

    //report
    getReportfood(){
        return axios.get(REPORT_FOODPACKAGE_API_BASE_URL);
    }

    //retrive food packages according to the booking id
    getConfirmFoodpackages(id){
        return axios.get(BOOKFOOD_CONFIRM_API_BASE_URL +'/'+ id);
    }

    getFoodpackages(id){
        return axios.get(FOODPACKAGE_API_BASE_URL +'/'+ id);
    }

    createBookFood(bookFood){
        return axios.post(BOOKFOOD_API_BASE_URL, bookFood);
        
    }

    
    createconfirmfood(booking_id){
        return axios.post(CONFIRMFOOD_API_BASE_URL, booking_id);
    }
  
    getFood(){
        return axios.get(FOOD_API_BASE_URL);
    }

    createFood(food){
        return axios.post(FOOD_API_BASE_URL, food);
        
    }

    getFoodByIdtwo(foodid){
        return axios.get(FOOD_API_BASE_URL + '/' + foodid);
    }

    getFoodById(foodid){
        return axios.get(FOOD_API_BASE_URL + '/' + foodid);
    }

    updateFood(food, foodid){
        return axios.put(FOOD_API_BASE_URL + '/' + foodid, food);
    }

    deleteFood(foodid){
        return axios.delete(FOOD_API_BASE_URL + '/' + foodid);
    }

    deletebookfood(order_food_id){
        return axios.delete(BOOKFOOD_API_BASE_URL + '/' + order_food_id);
    }

    getSearchfood(fvalue){
        return axios.get(SEARCH_FOODPACKAGE_API_BASE_URL + '/' + fvalue); 
    }
    getFoodBookingsAdminReport(){
        return axios.get(ADMIN_FOOD_BASE_URL+'/getRentalOrderAdminReport' ); 
    }
    
}

export default new FoodService()