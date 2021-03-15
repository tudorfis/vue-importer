
export default function useAlertHook() {
    const showAlert = Vue.ref( true )
    
    function toggleAlert() {
        showAlert.value = !showAlert.value
    }

    return {
        showAlert,
        toggleAlert
    }
}
