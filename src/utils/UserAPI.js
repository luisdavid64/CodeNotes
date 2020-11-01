import Cookies from "js-cookie"


const UserAPI = (() => {
    const userData = require("./../data/credentials.json");
    const COOKIEID = "notes-token";
    const authenticate = (userName,password) => {
        for(var i =0; i < userData.length; i++) {
            if(userData[i].email === userName) {
                return userData[i].password === password;
            }
        } 
        return false;
    }
    
    function createCookie(token) {
        Cookies.set(COOKIEID, token , { expires: 7 })
    }

    function getCookie() {
        return Cookies.get(COOKIEID);
    }

    function removeCookie(token) {
        Cookies.remove(COOKIEID);
    }
    return {
        authenticate,
        createCookie,
        removeCookie,
        getCookie
    };
})();

export default UserAPI;