const StringFormatter = function () {
  const capitalizeFirst = function (string) {
    string = string.charAt(0).toUpperCase() + string.slice(1);
    return string;
  };

  const skewerCase = function (string) {
    string = string.replace(/\s/g, "-");
    return string;
  };

  return {
    capitalizeFirst: capitalizeFirst,
    skewerCase: skewerCase,
  };
};

const formatter = StringFormatter();
formatter.capitalizeFirst("dorothy"); //should print Dorothy
formatter.skewerCase("blue box"); //should print blue-box
