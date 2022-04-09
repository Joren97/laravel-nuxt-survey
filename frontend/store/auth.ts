import { postRequest } from './../utils/api';
import { ref, Ref } from "vue";
import { defineStore } from "pinia";
import { appendFile } from "fs";

interface User {
    data: {},
    token: string
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
        async authenticate() {
            this.loading = true;
            await postRequest("/login")
            this.loading = false;
        },
        increment() {
            this.n++;
        },
    }
})

