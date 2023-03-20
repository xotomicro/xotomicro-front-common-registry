interface IApiSystemGetRequest {
    url: string
}

interface IApiSystemPostRequest {
    url: string
    body: Record<string, any>
}

export class ApiSystem {
    static async getRequest(options: IApiSystemGetRequest) {
        const result = await fetch(options.url, {headers: {"Content-Type": "application/json", Authorization: this.getApiAuthToken()}})
        const data = await result.json()
        return data
    }

    static async postRequest(options: IApiSystemPostRequest) {
        const result = await fetch(options.url, {method: "POST", headers: {"Content-Type": "application/json", Authorization: this.getApiAuthToken()}, body: JSON.stringify(options.body)})
        const data = result.json()
        return data
    }

    static getApiAuthToken(): string | null {
        return sessionStorage.getItem("token") || null
    }

    static setApiAuthToken(token: string) {
        sessionStorage.setItem("token", token)
    }
}
