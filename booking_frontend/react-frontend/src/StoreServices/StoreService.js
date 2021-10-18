 import axios from 'axios';

const STORE_API_BASE_URL = "http://localhost:8080/api/v1/stores";
const ORDER_API_BASE_URL = "http://localhost:8080/api/v1/orders";


class StoreService{

    getStores(){
        return axios.get(STORE_API_BASE_URL);
    }

    createStore(store){
        return axios.post(STORE_API_BASE_URL,store);
    }
    createOrder(order){
        return axios.post(ORDER_API_BASE_URL,order);
    }
    getStoresById(storeId){
        return axios.get(STORE_API_BASE_URL + '/' + storeId);
    }
    getItemsById(itemId){
        return axios.get(STORE_API_BASE_URL + '/' + itemId);
    }


    updateStore(store, storeId){
        return axios.put(STORE_API_BASE_URL + '/' + storeId, store);
    }
   deleteStore(storeId){
        return axios.delete(STORE_API_BASE_URL + '/' + storeId);
    }
    getStoreTotalAdminReport(){
        return axios.get(ORDER_API_BASE_URL+'/getstoreOrderAdminReport');
    }
   
}

//export object of StoreService.Not going to import a class
export default new StoreService();