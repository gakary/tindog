

class Dog{
    constructor(data){
        //assign data.name -> this.name
        Object.assign(this,data)
    }    

    getDogHtml(){
        const {name , avatar , age , bio } = this
        return `<img class="main-img" id="main-img" src="${avatar}">
        <p class="dog-name">${name}, ${age}</p>
        <p class="dog-description">${bio}</p>`
    }
    getStatus(bool){
        this.hasBeenLiked = bool
        this.hasBeenSwiped = true

        if(this.hasBeenLiked && this.hasBeenSwiped){
            return `<img class="badge" id="badge-like" src="./images/badge-like.png">`
        }else if(!this.hasBeenLiked && this.hasBeenSwiped){
            return `<img class="badge" id="badge-nope" src="/images/badge-nope.png">`
        }
    }
}

export default Dog
