import axios from "axios";

const BASE_URL = !import.meta.env.PROD ? "http://localhost:3000/api/emailsequence" : "/api/emailsequence";

export const getAllEmailSequence = async () => {
    try {
        const { data } = await axios.get(BASE_URL, {
            headers: {
                Authorization: localStorage.getItem("futureBlinkToken")
            }
        });
        return data.emailSequences;
    } catch (error) {
        throw error.response.data.msg;
    }
}