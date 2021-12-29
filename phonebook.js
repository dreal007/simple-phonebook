/**
 * Phonebook implemetation using hashtables data structure.
 */
class PhoneBook {
    constructor(size = 500) {
        this.entryMap = new Array(size)
    }
   
    _hash(key) {
        let addressHash = 0
        for (let i = 0; i < key.length; i++) {
            addressHash = (addressHash + key * 47) % this.entryMap.length
        }
        return addressHash
    }

    savePhone(key,value) {
        let index = this._hash(key)
        if(!this.entryMap[index]) this.entryMap[index] = []

        if(!this.entryMap[index].length) this.entryMap[index].push([key, value])
        else {
            for(let i = 0; i < this.entryMap[index].length; i++) {
                if(this.entryMap[index][i][0] !== key) {
                    this.entryMap[index].push([key, value])
                }
             }
        }
            
        return this
    }

    getPhone(key) {
        let index = this._hash(key)
        if(this.entryMap[index]) {
            for(let i = 0; i < this.entryMap[index].length; i++) {
                if(this.entryMap[index][i][0] === key) {
                    return this.entryMap[index][i][1]
                }
             }
         }
         return undefined
     }

     removePhone(key) {
        let index = this._hash(key)
        if(this.entryMap[index]) {
            for(let i = 0; i < this.entryMap[index].length; i++) {
                if(this.entryMap[index][i][0] === key) {
                    this.entryMap[index].splice(i, 1)
                }
             }
         }
     }

    getAll() {
        let allEntryies = []
        for(let i = 0; i < this.entryMap.length; i++) {
            if(this.entryMap[i]) {
                for(let j = 0; j < this.entryMap[i].length; j++) {
                    allEntryies.push(this.entryMap[i][j])
                }
            }
        }
        return allEntryies
    }
}

let phone = {
    name: 'Chukzy',
    number: '+2348077665544',
    email: 'chuks@testmail.com',
    date_created: Date.now()
}

let phone2 = {
    name: 'Moses',
    number: '07098786543',
    email: 'moses@testmail.com',
    date_created: Date.now()
}


let myPhoneBook = new PhoneBook()
myPhoneBook.savePhone(phone.number, phone)
myPhoneBook.savePhone(phone2.number, phone2)
console.log(myPhoneBook)
console.log(myPhoneBook.getAll())
