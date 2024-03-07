
import LinksButton from "./links-button";

import githubPic from '../../../public/github.svg'
import linkedinPic from '../../../public/linkedin.svg'
import pdfPic from '../../../public/pdf.svg'
import memojiPic from '../../../public/icon.png'
import gpgkeyPic from '../../../public/gpgkey.svg'

export default function LinksGallery() {
    return (
        <div className="flex flex-col items-center sm:items-stretch sm:flex-row justify-center sm:flex-wrap py-4">
            <LinksButton name="GitHub" imageSrc={githubPic} url="https://github.com/awkimball"/>
            <LinksButton name="LinkedIn" imageSrc={linkedinPic} url="https://www.linkedin.com/in/addison-kimball-56a54216b/"/>
            <LinksButton name="Résumé" imageSrc={pdfPic} url="files/Resume - Addison Kimball.pdf"/>
            {/* <LinksButton name="About me" imageSrc={memojiPic} url="/about"/> */}
            <LinksButton name="GPG Key" imageSrc={gpgkeyPic} url="files/Addison Kimball (6C53D848) Public.asc"/>
        </div>
    )
}