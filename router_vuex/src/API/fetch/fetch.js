export class RequestApiClass {
    leadhitURL = 'http://localhost:5000/api';//https://track-api.leadhit.io/client/test_auth
    method = 'GET';
    headers = {
        'Api-Key': '5f8475902b0be670555f1bb3:eEZn8u05G3bzRpdL7RiHCvrYAY',
        'Leadhit-Site-Id': '',
    };

    data = [];


    constructor(id) {
        this.headers['Leadhit-Site-Id'] = `${id}`;
    }

    async getRequest() {
        let response = await fetch(this.leadhitURL, {
            method: this.method,
            headers: this.headers,
        });

        let result = await response.json();
        this.data = result.dataDate;

        return result;
    }
    
    async requestId() {
        let result = await this.getRequest();

        if (result.message === 'ok') {
            return true;//true
        } else {
            return false;//false
        }
    }
}