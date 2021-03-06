import requester from '../data-fetch/requester';

class UserService {
    
    async all() {  
        try {
            return await requester.get(`/user/all`); 
        } catch(err) {
            return err;
        }           
    }

    async userDetails(id) {  
        try {
            return await requester.get(`/user/details/${id}`); 
        } catch(err) {
            return err;
        }           
    }

    async block(id) {  
        try {
            return await requester.post(`/user/block/${id}`); 
        } catch(err) {
            return err;
        }           
    }

    async unblock(id) {  
        try {
            return await requester.get(`/user/unblock/${id}`); 
        } catch(err) {
            return err;
        }           
    }  

    async destroy(obj) { 
        let data = {id2: obj.id2} 
        try {
            return await requester.delete(`/user/destroy/${obj.id}`, data); 
        } catch(err) {
            return err;
        }           
    }  
}

export default UserService;