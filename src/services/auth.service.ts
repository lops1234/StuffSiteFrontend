import axios from "axios";

const AIP_AUTH_URL = import.meta.env.VITE_API_URL + "/auth/";


export const register = (username: string, email: string, password: string) => {
    return axios.post(AIP_AUTH_URL + "register", {
        username,
        email,
        password,
    });
};

export const login = (username: string, password: string) => {
    return axios
        .post(AIP_AUTH_URL + "login", {
                email: username,
                password: password,
            },
        )
        .then((response) => {
            if (response.data.accessToken) {
                localStorage.setItem("user", JSON.stringify(response.data));
            }

            return response.data;
        });
};

export const logout = () => {
    localStorage.removeItem("user");
};

export const getCurrentUser = () => {
    const userStr = localStorage.getItem("user");
    if (userStr) return JSON.parse(userStr);

    return null;
};
