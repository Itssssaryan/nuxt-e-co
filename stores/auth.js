import { defineStore } from "pinia";
import { axiosApi } from "~/config/axios";

export const useAuthStore = defineStore('auth', {
    state: () => (
        {
            loading: false,
        }
    ),
    actions: {
        async register(data) {
            try {
                this.loading = true;
                let response = await axiosApi.post("register", data);
                if (response.status == 200) {
                    alert("Register successfull");
                    navigateTo("/login");
                }
            }
            catch (e) {
                console.warn(e);
            }
            finally {
                this.loading = false;
            }

        },
        async login(data) {
            try {
                this.loading = true;
                let response = await axiosApi.post("login", data);
                if (response.status == 200) {
                    alert("LoggedIn successfull");
                    navigateTo("/");
                }
            }
            catch (e) {
                console.warn(e);
            }
            finally {
                this.loading = false;
            }

        }
    }
});