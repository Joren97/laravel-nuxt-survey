import api, { postRequest } from './../utils/api';
import { ref, Ref } from "vue";
import { defineStore } from "pinia";
import { appendFile } from "fs";

interface User {
    data: {},
    token: string | null
}

interface AuthState {
    user: User,
    loading: boolean
}

export const authStore = defineStore('auth', {
    state: (): AuthState => ({
        user: {
            token: null,
            data: {}
        },
        loading: false
    }),
    actions: {
        async authenticate(body: any) {
            console.log("Authenticating");
            this.loading = true;
            await api.post("/login", body)
            this.loading = false;
        }
    }
})

