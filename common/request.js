const baseUrl = 'http://39.98.57.122:7998'  
import {myDecrypt, setAseEncryption} from './encryption'
let encrypted
const request = (url = '', date = {}, type = 'GET', header = {
}) => {
    return new Promise((resolve, reject) => {
	    if(type == 'POST'){
		    let dataPost = setAseEncryption(JSON.stringify(date))
			encrypted = {
				SVavTBrYY: dataPost
			}
		}
		if(uni.getStorageSync('token')) header.token = uni.getStorageSync('token')
		
        uni.request({
            method: type,
            url: baseUrl + url,
            data: type == 'POST'? encrypted :date,
            header: header,
            dataType: 'json',         
        }).then((response) => {
			console.log(baseUrl + url)
            setTimeout(function() {
                uni.hideLoading();
            }, 200);
            let [error, res] = response;        
            resolve(myDecrypt(res.data));
        }).catch(error => {
            let [err, res] = error;
            reject(err)
        })
    });
}
export default request