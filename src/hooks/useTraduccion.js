import { useTranslations } from "next-intl";

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
    const t1 = useTranslations("Brothers")
    const t2 = useTranslations("BugBookClone")
    const t3 = useTranslations("Tesla")
    const t4 = useTranslations("Formula")
    const t5 = useTranslations("DesignProjects")
    const t6 = useTranslations("TodoApp")
    return { t1, t2, t3, t4, t5, t6 }
}

export function useProjectsDesing() {
    const t1 = useTranslations("HOTEL")
    const t2 = useTranslations("NEWS")
    const t3 = useTranslations("NEXTER")
    const t4 = useTranslations("TRILLO")
    const t5 = useTranslations("OUTDOORS")
    const t6 = useTranslations("EDGE-LEADER")
    const t7 = useTranslations("MyFirstFormDesign")
    const t8 = useTranslations("LINETIME")
    return { t1, t2, t3, t4, t5, t6, t7, t8 }
}

export function useExperience() {
    const t = useTranslations("Time-1")
    const t1 = useTranslations("Time-2")
    const t22 = useTranslations("Time-3")
    const t23 = useTranslations("Time-4")
    const t3 = useTranslations("Title-Experience-1")
    const t4 = useTranslations("Title-Experience-2")
    const t44 = useTranslations("Title-Experience-4")
    const t5 = useTranslations("Description-Experience-1")
    const t6 = useTranslations("Description-Experience-2")
    const t7 = useTranslations("Description-Experience-3")
    const t8 = useTranslations("Description-Experience-4")
    const t9 = useTranslations("Ref")
    const t10 = useTranslations("Description-Experience-5")
    return { t, t1, t22, t23, t3, t4, t44, t5, t6, t7, t8, t9, t10 }
}

export function useCurriculum() {
    const t = useTranslations("SECTION-1")
    const t1 = useTranslations("SECTION-2")
    const t2 = useTranslations("SECTION-3")
    const t3 = useTranslations("VISIT-GIT")
    const t4 = useTranslations("VISIT-LiNKEDIN")
    const t5 = useTranslations("TITLE-SECTION-3-1")
    const t6 = useTranslations("TITLE-SECTION-3-2")
    return { t, t1, t2, t3, t4, t5, t6 }
}