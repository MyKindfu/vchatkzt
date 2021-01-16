const CryptoJS = require('crypto-js');  //引用AES源码js
// let setAseKey = CryptoJS.enc.Utf8.parse(randomWord);
const setAseKey = CryptoJS.enc.Utf8.parse('m1xp9slgfa|su@m2');
// let iv = CryptoJS.enc.Utf8.parse(randomWord);
const setAseIv = CryptoJS.enc.Utf8.parse('pa!st17m@04h5u#0');
/**
 * 加密
 * @param word
 * @param text
 * @returns {string}
 */
function setAseEncryption(word){
    let srcs = CryptoJS.enc.Utf8.parse(word);
    let encrypted = CryptoJS.AES.encrypt(srcs, setAseKey, {
        iv: setAseIv,
        mode: CryptoJS.mode.CBC,
        padding: CryptoJS.pad.ZeroPadding })
    // return encrypted.ciphertext.toString().toUpperCase()
    return encrypted.toString()
}

/**
 * 解密
 * @param word
 * @returns {string}
 * @constructor
 */
function myDecrypt(word) {
    let encryptedHexStr = CryptoJS.enc.Base64.parse(word)
    let srcs = CryptoJS.enc.Base64.stringify(encryptedHexStr)
    let decrypt = CryptoJS.AES.decrypt(srcs, setAseKey, {
        iv: setAseIv,
        mode: CryptoJS.mode.CBC,
        padding: CryptoJS.pad.ZeroPadding })
    let decryptedStr = decrypt.toString(CryptoJS.enc.Utf8)
    return JSON.parse(decryptedStr.toString())
}

export {setAseEncryption, myDecrypt}
