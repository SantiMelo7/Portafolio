import { useLocale } from "next-intl";

import { InfoMe, Technology, Header, Projects, Experience, AboutMe } from "../../ui/organism";

import { dataProjects } from "../../util/helpers/dataProjects";

export default function Home() {
    const localActive = useLocale();

    return (
        <>
            <Header />
            <InfoMe />

            <Projects data={dataProjects} url={`/${localActive}/desing-projects`} title />
            <Experience />

            <Technology />
            <AboutMe />
        </>
    )
}