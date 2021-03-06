import { authClient } from "./authClient";

export default {
    async login(payload) {
        await authClient.get("/sanctum/csrf-cookie");
        return await authClient.post("/login", payload);
    },

    logout() {
        return authClient.post("/logout");
    },
    async forgotPassword(payload) {
        await authClient.get("/sanctum/csrf-cookie");
        return authClient.post("/forgot-password", payload);
    },
    async getAuthUser() {
        await authClient.get("/sanctum/csrf-cookie");
        return authClient.get("/api/user/auth");
    },
    async resetPassword(payload) {
        await authClient.get("/sanctum/csrf-cookie");
        return authClient.post("/reset-password", payload);
    },
    updatePassword(payload) {
        return authClient.put("/user/password", payload);
    },
    async registerUser(payload) {
        await authClient.get("/sanctum/csrf-cookie");
        return authClient.post("/register", payload);
    },
    sendVerification(payload) {
        return authClient.post("/email/verification-notification", payload);
    },
    updateUser(payload) {
        return authClient.put("/user/profile-information", payload);
    },
};
