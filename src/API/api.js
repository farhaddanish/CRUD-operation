import axios from "axios";

const imageAPI = async (searchValue) => {

    const response = await axios.get("https://api.unsplash.com/search/photos", {
        headers: {
            Authorization:
                "Client-ID SnXYrsIME2mzVWdYB46r6ZY0l1qVcgz1ewxRg9WRtpk",
        },
        params: {
            query: searchValue,
        },
    });

    return response.data.results;
};

export default imageAPI;
