class User {
    constructor(firstName, age, hobbies) {
        this.id = nextId;
        this.firstName = firstName;
        this.age = age;
        this.hobbies = hobbies;

        nextId += 1;
    }

    toDom() {
        const ul = document.querySelector('ul');
        const li = document.createElement('li');
        
        li.id = `user${this.id}`;
        li.onclick = (ev => {
            if (li.childElementCount !== 0) {
                li.removeChild(li.lastChild);
            } else {
                webAPI(this.id);
            }
        });
        li.appendChild(document.createTextNode(this.firstName));
        
        ul.appendChild(li);
        document.body.append(ul);
    }
}

nextId = 0;

function getUser(id) {
    user = document.querySelector(`#user${id}`);

    const ul = document.createElement('ul');

    const li = document.createElement('li');
    li.append(document.createTextNode(`he's too old: ${users[id].age}`));   
    ul.append(li);

    const liHob = document.createElement('li');
    liHob.append(document.createTextNode(`and has horible hobbies: ${users[id].hobbies}`));   
    ul.append(liHob);


    user.append(ul);
}

function webAPI(id) {
    setTimeout(() => {
        getUser(id);
    }, 2000);
}

const users = [
    new User("Dogan", 99, ["Making mansions on the east coast"]),
    new User("Peevski", 102, ["Making money because of mum", "Owning almost every business in Bulgaria..."]),
    new User("Borisov", 101, ["Sleeping with his gun??????", "Keeps stacks of money in his cabinet???"]),
    new User("Kasketa", 100, ["Being a dumb b****"]),
]

users.map((user) => user.toDom());
