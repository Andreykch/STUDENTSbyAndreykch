const { makeAutoObservable, observable, action } = require("mobx");

class SortMenuModel{
    isOpen = false;
    buttonContent = ''
    sortDirection = 0

    constructor(){
        makeAutoObservable(this)
    }

    ChangeState(){
        this.isOpen = !this.isOpen
    }

    UpdateMenuButtonContent(text, action){
        this.buttonContent = text
        this.sortDirection = this.UpdateSortDirection(action)
    }

    UpdateSortDirection(action){
        return action.indexOf('Right') == -1 ? -1 : 1
    }
}

const sortMenuStore= new SortMenuModel()
export default sortMenuStore
