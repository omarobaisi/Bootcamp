const Family = function () {
  let members = [];

  const birth = function (name) {
    members.push(name);
    console.log(members);
  };

  return birth;
};

const giveBirth = Family();
giveBirth("alex");
giveBirth("sam");
giveBirth("jack");
