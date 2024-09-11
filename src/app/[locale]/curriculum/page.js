"use client"

import SectionPartOne from "../../../components/cv/SectionPartOne"
import SectionPartTwo from "../../../components/cv/SectionPartTwo"
import SectionPartThree from "../../../components/cv/SectionPartThree"
import SectionPartFour from "../../../components/cv/SectionPartFour"
import Preference from "../../../components/header/content/Preference"

export default function Curriculum() {
    return (
        <>
            <Preference url="/curriculum" redirect isRedirect />
            <div className="flex w-full h-full mx-auto flex-col mt-28 sm:mt-24 lg:mt-20">
                <SectionPartOne />
                <SectionPartTwo />
                <SectionPartThree />
                <SectionPartFour />
            </div>
        </>
    );
}
