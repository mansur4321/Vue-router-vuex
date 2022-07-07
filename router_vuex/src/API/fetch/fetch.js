export class RequestApiClass {
    leadhitURL = 'https://track-api.leadhit.io/client/test_auth';
    method = 'GET';
    headers = {
        'Api-Key': '5f8475902b0be670555f1bb3:eEZn8u05G3bzRpdL7RiHCvrYAY',
        'Leadhit-Site-Id': '',
    };


    constructor(id) {
        this.headers['Leadhit-Site-Id'] = `${id}`;
    }

    async getRequest() {
        let response = await fetch(this.leadhitURL, {
            method: this.method,
            headers: this.headers,
        });

        let result = await response.json();
        return result;
    }
    //Закончился срок действия определённого вида ответов, теперь нужное сообщение не приходит.
    //Поэтому поменял местами true и false
    async requestId() {
        let result = await this.getRequest();

        if (result.message === 'ok') {
            return false;//true
        } else {
            return true;//false
        }
    }
}