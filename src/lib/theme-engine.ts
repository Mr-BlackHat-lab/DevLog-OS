import { THEMES, DEFAULT_THEME, THEME_KEY } from "@/lib/themes";

export function applyTheme(themeId: string){
    const root = document.documentElement;

    THEMES.forEach((t)=>{
        if(t.id !== DEFAULT_THEME){
            root.classList.remove(t.id);
        }
    });
    if(themeId !== DEFAULT_THEME){
        root.classList.add(themeId);
        localStorage.setItem(THEME_KEY, themeId);
    } else {
        localStorage.removeItem(THEME_KEY);
    }
}