import CryptoJS from "crypto-js";

const ENCRYPTION_KEY: string =
    (window as any).VITE_ENCRYPTION_KEY || import.meta.env.VITE_ENCRYPTION_KEY;


export const encryptData = (data: unknown): string => {
    if (!ENCRYPTION_KEY) {
        throw new Error("Encryption key is not defined.");
    }
    return CryptoJS.AES.encrypt(JSON.stringify(data), ENCRYPTION_KEY).toString();
};


export const decryptData = (cipherText: string): unknown => {
    if (!ENCRYPTION_KEY) {
        throw new Error("Encryption key is not defined.");
    }
    try {
        const bytes = CryptoJS.AES.decrypt(cipherText, ENCRYPTION_KEY);
        const decryptedData = bytes.toString(CryptoJS.enc.Utf8);
        return JSON.parse(decryptedData);
    } catch (error) {
        console.error("Error decrypting data:", error);
    }
};
