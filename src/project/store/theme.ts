import { makeAutoObservable } from "mobx";
import { ITheme, defaultTheme, purpleTheme } from "../../my-lib/theme/default-theme";

class ThemeStore {

    constructor() {
        makeAutoObservable(this) 
    }

    currentTheme: ITheme = {
        ...defaultTheme
    }

    purpleTheme: ITheme = {
        ...purpleTheme
    }

    setCustomTheme(customTheme: ITheme){
        this.currentTheme = {
            ...customTheme
        }
    }


    setCurrentTheme(state: boolean) {
        state
            ?
            this.currentTheme = {
                ...this.purpleTheme
            }
            :
            this.currentTheme = {
                ...defaultTheme
            }
    }
}

const Theme = new ThemeStore()

export { Theme }