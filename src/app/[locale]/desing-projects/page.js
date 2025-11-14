"use client"


import { Header } from "../../../ui/molecules";
import { Projects as ProjectsDesing } from "../../../ui/templates";

import { dataDesing } from "../../../util/helpers/dataDesing"

export default function Projects() {

    return (
        <>
            <Header url="/desing-projects" redirect isRedirect />
            <ProjectsDesing data={dataDesing} desing />
        </>
    );
}