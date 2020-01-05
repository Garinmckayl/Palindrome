import "./styles.css";

function palindromeChecker() {
  const input = document.querySelector("#palindrome");
  const button = document.querySelector("#palindromeCheck");

  const result = ({ color, text }) => {
    window.document.querySelector("body").style.background = color;
    window.document.querySelector("#result").textContent = text;
  };

  button.onclick = function() {
    const { value } = input;

    const array = value.toLocaleLowerCase().match(/[а-яa-z0-9]/g);
    const { length } = array;

    if (length % 2 === 1) {
      const oddHalf = array.splice(length / 2);
      oddHalf.reverse().pop();

      if (oddHalf.join("") === array.join("")) {
        result({ color: "#000", text: "It is a Palindrome" });
        return true;
      }

      result({ color: "#FF7A7A", text: "It is not a Palindrome" });
      return false;
    }

    const evenHalf = array.splice(0, length / 2);
    if (evenHalf.join("") === array.reverse().join("")) {
      result({ color: "#000", text: "It is a Palindrome" });
      return true;
    }

    result({ color: "#FF7A7A", text: "It is not a Palindrome" });
    return false;
  };
}

palindromeChecker();
