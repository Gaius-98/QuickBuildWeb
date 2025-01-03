import { ref } from "vue";
import { setCookie,getCookie,removeCookie } from "@/utils/cookie";
export function useAuth(){
    const TOKEN = 'QUICK_ADMIN_TOKEN'
    const setToken = (value:string) => {
        setCookie(TOKEN,value)
    }
    const getToken = () => {
        return getCookie(TOKEN)
    }
    const removeToken = () => {
        removeCookie(TOKEN)
    }

    return {
        setToken,
        getToken,
        removeToken
    }
}