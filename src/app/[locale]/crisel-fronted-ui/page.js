/* eslint-disable @next/next/no-img-element */
"use client"

import Preference from "../../../components/header/content/Preference";
import f from "../../../../public/content/criseladmin.webp"

export default function CriselFrontedUIGallery() {
    return (
        <>
            <Preference url="/crisel-fronted-ui" redirect isRedirect />
            <div className="container-page-gallery">
                <div className="container-title-gallery">
                    <h1 className="title-gallery text-blue-400">
                        Estas aplicaciones son de uso para los dueños del negocio y trabajadores
                    </h1>
                    <h1 className="title-gallery mt-8 md:mt-0 text-emerald-500">
                        Sin embargo, dejo fotos de como esta construida la aplicación y todos sus detalles
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
