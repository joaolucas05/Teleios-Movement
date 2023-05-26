class Http {
    async get(url: string) {
        return fetch(url).then((response) => response.json());
    }
    async post(url: string, data: any) {
        // ...
    }
}

export default Http;