export class LocalStorageManage {
    itemName = 'Leadhit-Site-Id';
    itemId = '';

    constructor(id) {
        this.itemId = id;
    }

    setItemData(name, data) {
        localStorage.setItem(name, data);
    }

    getItemId(name) {
        return localStorage.getItem(name);
    }

    deleteItem(name) {
        return localStorage.removeItem(name);
    }

    existenceCheck(name) {
        let item;

        if (name != '') {
            item = this.getItemId(name);
        } else {
            item = this.getItemId(this.itemName);
        }

        if (item) {
            return true;
        } else {
            return false;
        }
    }

    delete(name) {

        if (!this.existenceCheck(name)) {
            return;
        }

        this.deleteItem(name);
    }

    setId() {
        if (this.getItemId(this.itemName) == this.itemId) {
            return;
        } else {
            this.setItemData(this.itemName, this.itemId);
        }
    }
}