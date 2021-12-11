/**
 * Modal Window object creation
 * @constructor
 * @param btnId
 * @param bgColorBgDiv
 * @param popUpHeight
 * @param popUpWidth
 * @param bgColorPopUp
 * @param inputsNameTypeInArray
 */
const ModalWindow = function (btnId = "modalBtn", bgColorBgDiv = "rgb(0, 0, 0, 0.5)", popUpHeight = "250px",
                              popUpWidth = "500px", bgColorPopUp = "#fff", inputsNameTypeInArray = [["Username", "text"], ["Password", "password"]]) {


    /**
     * @method Draw (used in the initialize method to set and draw te windows properties)
     */

    this.draw = function () {
        const popUpBgDiv = document.createElement("div");
        popUpBgDiv.style.width = "100%";
        popUpBgDiv.style.height = "100%";
        popUpBgDiv.style.position = "absolute";
        popUpBgDiv.style.top = "0"
        popUpBgDiv.style.display = "flex";
        popUpBgDiv.style.justifyContent = "center";
        popUpBgDiv.style.alignItems = "center";
        popUpBgDiv.style.backgroundColor = bgColorBgDiv;

        const popUpContent = document.createElement("div");
        popUpContent.style.height = popUpHeight
        popUpContent.style.width = popUpWidth
        popUpContent.style.backgroundColor = bgColorPopUp
        popUpContent.style.padding = "20px"
        popUpContent.style.borderRadius = "5px"
        popUpContent.style.position = "relative"
        popUpContent.style.textAlign = "center"

        for (let input of inputsNameTypeInArray) {
            const champ = document.createElement("input");
            champ.type = input[1];
            champ.placeholder = input[0];
            champ.style.display = "block";
            champ.style.margin = " 20px auto";
            champ.style.padding = "8px";
            champ.style.width = "50%";
            champ.style.border = "1px solid gray";
            champ.style.borderRadius = "5px"
            champ.style.boxShadow = "6px 6px 29px -4px rgba(0,0,0,0.75)"
            popUpContent.appendChild(champ);
        }


        const validBtn = document.createElement("button")
        validBtn.innerHTML = "valider"
        validBtn.style.backgroundColor = "#fff"
        validBtn.style.padding = "10px 15px"
        validBtn.style.color = "#34495e"
        validBtn.style.fontWeight = "bolder"
        validBtn.style.textTransform = "uppercase"
        validBtn.style.fontSize = "18px"
        validBtn.style.borderRadius = "5px"
        validBtn.style.boxShadow = "6px 6px 29px -4px rgba(0,0,0,0.75)"
        validBtn.style.marginTop = "25px"
        validBtn.style.cursor = "pointer"
        validBtn.style.border = "none"
        validBtn.style.fontFamily = "sans-serif"
        popUpContent.appendChild(validBtn)

        const closeBtn = document.createElement("button")
        closeBtn.style.position = "absolute"
        closeBtn.style.top = "-15px";
        closeBtn.style.right = "-15px";
        closeBtn.innerHTML = "x";
        closeBtn.style.border = "none"
        closeBtn.style.fontFamily = "sans-serif"
        closeBtn.style.cursor = "pointer"
        closeBtn.style.backgroundColor = "#fff"
        closeBtn.style.padding = "10px 15px"
        closeBtn.style.color = "#34495e"
        closeBtn.style.fontWeight = "bolder"
        closeBtn.style.fontSize = "18px"
        closeBtn.style.borderRadius = "5px"
        closeBtn.style.boxShadow = "6px 6px 29px -4px rgba(0,0,0,0.75)"


        closeBtn.addEventListener("click", () => popUpBgDiv.remove())
        popUpContent.appendChild(closeBtn)

        popUpBgDiv.appendChild(popUpContent)

        document.querySelector("body").appendChild(popUpBgDiv)
    }


    /**
     * @method initialize (Set the eventListener on the asked button)
     */

    this.initialize = function () {
        document.getElementById(btnId).addEventListener("click", this.draw)
    }


    /**
     * @method deactive (Remove the eventListener of the asked button)
     */

    this.deactive = function () {
        document.getElementById(btnId).removeEventListener("click", this.draw)
    }

}

const tryModal = new ModalWindow("modalBtn", "rgb(0, 0, 0, 0.5)", "250px", "500px", "#fff", [["Username", "text"], ["Password", "password"]])

tryModal.initialize()