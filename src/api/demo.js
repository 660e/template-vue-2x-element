import request from '@/utils/request.js';

const demoApi = {

  getRandomuserData(results) {
    return request.get('https://randomuser.me/api/', {
      params: {
        results
      }
    });
  }

};

export default demoApi;