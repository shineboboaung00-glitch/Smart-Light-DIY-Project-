const BLYNK_TOKEN = "o9Y0PyvBQZpzxM-n2zImF5RxwEduULDV";
const BLYNK_REGION = "blynk.cloud"; // လိုအပ်ပါက fra1.blynk.cloud သို့ပြောင်းရန်

async function toggleLight(pin, btn) {
    // လက်ရှိ Button ရဲ့ အခြေအနေကို ကြည့်ပြီး 0 သို့မဟုတ် 1 ပို့မည်
    let currentState = btn.classList.contains("active") ? "0" : "1";
    let url = `https://${BLYNK_REGION}/external/api/update?token=${BLYNK_TOKEN}&${pin}=${currentState}`;

    try {
        let response = await fetch(url);
        if (response.ok) {
            btn.classList.toggle("active");
            console.log(`Pin ${pin} updated to ${currentState}`);
        } else {
            alert("Blynk connection failed!");
        }
    } catch (error) {
        console.error("Error:", error);
        alert("Network error connecting to Blynk!");
    }
}