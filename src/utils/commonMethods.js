const CryptoJS = require('crypto-js')


export const  pcToEm=(value)=>{
    const em= value/16
    return em.toFixed(2)
}

export const getEncryptedData = (data,secretkey)=>{
    return CryptoJS.AES.encrypt(JSON.stringify(data),secretkey).toString();
};

const getDecryptedData = (encryptedData,secretkey)=>{
    const bytes = CryptoJS.AES.decrypt(encryptedData,secretkey);
    return JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
}

export const getLoggedUser = () =>{
    const encrypted_logged_data = localStorage.getItem('logged_user_data');
    if(encrypted_logged_data){
        return getDecryptedData(encrypted_logged_data,'secret@123');
    }
}