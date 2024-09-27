/* eslint-disable @next/next/no-img-element */
"use client"

import Preference from "../../../components/header/content/Preference";
import f from "../../../../public/content/criseladmin.webp"
import { useGallery } from "../../../hooks/useTraduccion";

export default function CriselAdminAppGallery() {

    const { t, t1 } = useGallery()

    return (
        <>
            <Preference url="/crisel-admin-app" redirect isRedirect />
            <div className="container-page-gallery">
                <div className="container-title-gallery">
                    <h1 className="title-gallery text-blue-400">
                        {t("title-1")}
                    </h1>
                    <h1 className="title-gallery mt-8 md:mt-0 text-emerald-500">
                        {t1("title-2")}
                    </h1>
                </div>
                <section className="section-colums-img">
                    <img className="img-gallery" alt="" src={f.src} />
                    <img className="img-gallery" alt="" src={f.src} />
                    <img className="img-gallery" alt="" src={f.src} />
                    <img className="img-gallery" alt="" src={f.src} />
                    <img className="img-gallery" alt="" src={f.src} />
                    <img className="img-gallery" alt="" src={f.src} />
                    <img className="img-gallery" alt="" src={f.src} />
                    <img className="img-gallery" alt="" src={f.src} />
                    <img className="img-gallery" alt="" src={f.src} />
                </section>
            </div>
        </>
    );
}
