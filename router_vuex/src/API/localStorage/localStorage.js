export class LocalStorageManage {
    itemName = 'Leadhit-Site-Id';
    itemId = '';

    constructor(id) {
        this.itemId = id;
    }

    setItemId(name, id) {
        localStorage.setItem(name, id);
    }

    getItemId(name) {
        return localStorage.getItem(name);
    }

    existenceCheck() {
        let item = this.getItemId(this.itemName);

        if (item) {
            return true;
        } else {
            return false;
        }
    }

    setId() {
        if (this.getItemId(this.itemName) == this.itemId) {
            return;
        } else {
            this.setItemId(this.itemName, this.itemId);
        }
    }
}