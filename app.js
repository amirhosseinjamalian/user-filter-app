const users = [
  {
    id: 1,
    firstname: "amir",
    lastname: "jamal",
    age: 25,
    gender: "male",
  },

  {
    id: 2,
    firstname: "sara",
    lastname: "ahmadi",
    age: 19,
    gender: "female",
  },

  {
    id: 3,
    firstname: "reza",
    lastname: "karimi",
    age: 32,
    gender: "male",
  },

  {
    id: 4,
    firstname: "maryam",
    lastname: "hosseini",
    age: 28,
    gender: "female",
  },

  {
    id: 5,
    firstname: "navid",
    lastname: "moradi",
    age: 17,
    gender: "male",
  },

  {
    id: 6,
    firstname: "fatemeh",
    lastname: "rahmani",
    age: 22,
    gender: "female",
  },

  {
    id: 7,
    firstname: "hossein",
    lastname: "gholami",
    age: 41,
    gender: "male",
  },

  {
    id: 8,
    firstname: "leila",
    lastname: "sharifi",
    age: 30,
    gender: "female",
  },

  {
    id: 9,
    firstname: "mohammad",
    lastname: "rostami",
    age: 27,
    gender: "male",
  },

  {
    id: 10,
    firstname: "nazanin",
    lastname: "davari",
    age: 23,
    gender: "female",
  },

  {
    id: 11,
    firstname: "kian",
    lastname: "abedi",
    age: 15,
    gender: "male",
  },

  {
    id: 12,
    firstname: "shima",
    lastname: "zare",
    age: 34,
    gender: "female",
  },

  {
    id: 13,
    firstname: "vahid",
    lastname: "soleimani",
    age: 29,
    gender: "male",
  },

  {
    id: 14,
    firstname: "zahra",
    lastname: "saberi",
    age: 21,
    gender: "female",
  },

  {
    id: 15,
    firstname: "arman",
    lastname: "tavakoli",
    age: 18,
    gender: "male",
  },

  {
    id: 16,
    firstname: "amir",
    lastname: "bakhtiari",
    age: 37,
    gender: "male",
  },

  {
    id: 17,
    firstname: "sara",
    lastname: "lakzayi",
    age: 26,
    gender: "female",
  },

  {
    id: 18,
    firstname: "omid",
    lastname: "farahani",
    age: 24,
    gender: "male",
  },

  {
    id: 19,
    firstname: "pooria",
    lastname: "kamrani",
    age: 31,
    gender: "male",
  },

  {
    id: 20,
    firstname: "maryam",
    lastname: "naderi",
    age: 40,
    gender: "female",
  },

  {
    id: 21,
    firstname: "reza",
    lastname: "shahbazi",
    age: 20,
    gender: "male",
  },

  {
    id: 22,
    firstname: "tara",
    lastname: "behzadi",
    age: 27,
    gender: "female",
  },

  {
    id: 23,
    firstname: "vahideh",
    lastname: "sarraf",
    age: 33,
    gender: "female",
  },

  {
    id: 24,
    firstname: "arash",
    lastname: "jalili",
    age: 29,
    gender: "male",
  },

  {
    id: 25,
    firstname: "nooshin",
    lastname: "kermani",
    age: 22,
    gender: "female",
  },
];

const filterInput = document.querySelector("input");
const filterBtn = document.querySelector("button");
const usersContainer = document.querySelector(".usersContainer");

const generateUsersElement = (usersInfo) => {
  let str = "";
  usersInfo.forEach((userInfo) => {
    str += `
        <div class="userItem">
            <p><b>firstName : </b>${userInfo.firstname}</p>
            <p><b>lastName : </b>${userInfo.lastname}</p>
            <p><b>age : </b>${userInfo.age}</p>
            <p><b>gender : </b>${userInfo.gender}</p>
        </div>
    `;
  });

  return str;
};

window.onload = function () {
  usersContainer.innerHTML = generateUsersElement(users);
};

filterBtn.onclick = function () {
  const nameInput = filterInput.value;

  const filteredUsers = users.filter((user) => {
    return user.firstname.includes(nameInput);
  });

  if (filteredUsers.length > 0) {
    usersContainer.innerHTML = generateUsersElement(filteredUsers);
    usersContainer.style.textAlign = "left";
    usersContainer.style.color = "black";
  } else {
    usersContainer.innerHTML = "<h2>User Not Found</h2>";
    usersContainer.style.textAlign = "center";
    usersContainer.style.color = "red";
  }

  filterInput.value = "";

  console.log(filteredUsers.length);
};
