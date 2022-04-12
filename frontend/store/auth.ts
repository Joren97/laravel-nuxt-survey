import api from './../utils/api';
import { defineStore } from "pinia";
import { ref, Ref } from "vue";
import { ResponseError } from '~~/types/ResponseError';
import { ResponseSuccess } from '~~/types/ResponseSuccess';

interface User {
    data: {},
    token: Ref<string | null>
}

interface AuthState {
    user: User,
    loading: Ref<boolean>,
    errors: Ref<Array<string> | null>
}

export const useAuthStore = defineStore('auth', {
    state: (): AuthState => ({
        user: {
            token: ref(null),
            data: {}
        },
        loading: ref(false),
        errors: ref(null)
    }),
    actions: {
        async login(body: any) {
            try {
                console.log("Authenticating");
                this.loading = true;
                const res = await api.post("/login", body);
                const { data: { user, token } } = <ResponseSuccess>res;
                this.user = { data: user, token }
                this.loading = false;
            } catch (error: unknown) {
                this.setError(error);
            }
        },
        setError(error: unknown) {
            const { data: { data } } = <ResponseError>error;
            let arr: Array<string> = [];
            Object.keys(data).forEach(key => {
                // @ts-ignore
                const errors = <Array<string>>data[key];
                arr = arr.concat(errors);
            });
            this.errors = arr;
            this.loading = false;
        },
        clearError() {
            this.errors = [];
        }
    }
})

