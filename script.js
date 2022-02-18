function Calculator() {
    this.display = document.querySelector(".calculator");
    this.box = document.querySelector(".value");
    
    this.init = () => {
        this.btnEvent();
    }

    this.btnEvent = () => {
        this.display.addEventListener("click", e => {
            this.addDigits(e.target)
        })
    }
    
    this.addDigits = (e) => {
        const el = e

        if (el.classList.contains("num") || el.classList.contains("signal")) {
            if (isNaN(this.box.value.slice(-1)) && el.classList.contains("signal")) {
                return
            }
            
            this.box.value += el.innerHTML
        }

        if (el.classList.contains("clear")) {
            this.box.value = ""
        }

        if (el.classList.contains("equal") && !isNaN(this.box.value.slice(-1))) {
            try {
                this.box.value = eval(this.box.value)
            } catch {
                this.box.value = "Error"
            }
        }
    }  

}

const calculator = new Calculator()
calculator.init()