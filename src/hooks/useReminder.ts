import { formatDate,useStorage } from "@vueuse/core";
import { ref,onMounted } from 'vue';
export function useReminder(key:string) {
    
    const getCurrentDate = () => {
        const date = new Date();
        return formatDate(date, 'YYYY-MM-DD');
    }

    //是否需要提示
    const shouldShowReminder =  ref(false)
    const reminderObj = useStorage<Record<string,any>>('reminder',{})
    const checkReminder = () => {
        const currentDate = getCurrentDate();
        const lastReminderDate = reminderObj.value[key];
        if (lastReminderDate === null || lastReminderDate !== currentDate) {
            reminderObj.value[key] = currentDate
            return true;
        }
        return false;
    }

    onMounted(()=>{
        shouldShowReminder.value = checkReminder()
    })

    return {
        shouldShowReminder
    }
 }
