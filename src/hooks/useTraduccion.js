import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";

export function useParragrafhTraductor() {
    const t = useTranslations("Developer");
    const t2 = useTranslations("Year");
    const t3 = useTranslations("World");
    const t4 = useTranslations("Tec");
    const t5 = useTranslations("DaysNew");
    const t6 = useTranslations("Name")
    return { t, t2, t3, t4, t5, t6 }
}

export function useAboutMeTraductor() {
    const t = useTranslations("About-Me");
    const t2 = useTranslations("About-Me-2");
    const t3 = useTranslations("About-Me-3");
    const t4 = useTranslations("Title-About-Me")
    return { t, t2, t3, t4, }
}

export function useLineTitle() {
    const t = useTranslations("Title-Projects")
    const t2 = useTranslations("Title-Experience")
    const t3 = useTranslations("Title-Technologies")
    return { t, t2, t3 }
}

export function useProjectBottom() {
    const t = useTranslations("Button-1")
    const t2 = useTranslations("Button-2")
    return { t, t2 }
}

export function useProjects() {
    const t1 = useTranslations("Entrepeneur")
    const t2 = useTranslations("Ecommerce")
    const t3 = useTranslations("Tesla")
    const t4 = useTranslations("Formula")
    return { t1, t2, t3, t4 }
}

export function useLanguage() {
    const t1 = useTranslations("Language-1")
    const t2 = useTranslations("Language-2")
    return { t1, t2 }
}


export async function useExperience() {
    const t1Time = await getTranslations("Time-1")
    const t2Time = await getTranslations("Time-2")
    const t3Time = await getTranslations("Time-3")
    const t1Title = await getTranslations("Title-Experience-1")
    const t2Title = await getTranslations("Title-Experience-2")
    const t1Description = await getTranslations("Description-Experience-1")
    const t2Description = await getTranslations("Description-Experience-2")
    const t3Description = await getTranslations("Description-Experience-3")
    return { t1Time, t2Time, t3Time, t1Title, t2Title, t1Description, t2Description, t3Description }
}
