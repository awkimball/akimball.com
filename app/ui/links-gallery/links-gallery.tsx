
import LinksButton from "./links-button";

import githubPic from '../../../public/github.svg'
import linkedinPic from '../../../public/linkedin.svg'
import pdfPic from '../../../public/pdf.svg'
import memojiPic from '../../../public/icon.png'

export default function LinksGallery() {
    return (
        <div className="flex flex-col items-center sm:items-stretch sm:flex-row justify-center sm:flex-wrap py-4">
            <LinksButton name="GitHub" imageSrc={githubPic} url="test"/>
            <LinksButton name="LinkedIn" imageSrc={linkedinPic} url="test"/>
            <LinksButton name="Resume" imageSrc={pdfPic} url="test"/>
            <LinksButton name="About me" imageSrc={memojiPic} url="/about"/>
        </div>
    )
}