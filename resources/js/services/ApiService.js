import { apiClient } from "./apiClient";

export default {
    async createTag(payload) {
        await apiClient.get("/sanctum/csrf-cookie");
        return apiClient.post("/api/create-hashtag", payload);
    },
    async updateTag(payload, id) {
        const url = `/api/create-hashtag/${id}`;
        await apiClient.get("/sanctum/csrf-cookie");
        return apiClient.put(url, payload);
    },
    async listTags() {
        await apiClient.get("/sanctum/csrf-cookie");
        return apiClient.get("/api/create-hashtag");
    },
    async listUserTags(payload) {
        await apiClient.get("/sanctum/csrf-cookie");
        return apiClient.get("/api/get-user-tags/" + payload.id);
    },

    // async registerUser(payload) {
    //     await apiClient.get("/sanctum/csrf-cookie");
    //     return apiClient.post("/register", payload);
    // },
    // sendVerification(payload) {
    //     return apiClient.post("/email/verification-notification", payload);
    // },
    // updateUser(payload) {
    //     return apiClient.put("/user/profile-information", payload);
    // },
};
