import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Footer from "../components/footer";
import Header from "../components/header";
import Chip from "../components/chip/chip";
import ContainedButton from "../components/buttons/contained-button";

import profilePic from "../public/images/profile.jpg";

export default function About() {
  return (
    <>
      <Head>
        <title>About | Gao Shanghui</title>
        <meta charSet="utf-8" />
        <meta
          name="description"
          content="Hello, my name is Gao Shanghui. It is the portfolio to show my recent projects."
        />
      </Head>
      <Header />
      <div className="p-5 mt-[69px]">
        <section className="mb-32">
          {/* Introduction Left Part */}
          <div>
            <p className="font-sans-cn text-gray-900 font-bold text-2xl tracking-[0.12em] mb-10 mt-16">
              👋 你好！
            </p>
            <h2 className="text-base font-bold text-gray-900 mb-4">
              Hello! My name is Gao Shanghui.
            </h2>
            <p className="text-sm text-gray-600 leading-7 mb-10">
              I am originally from China. After I finished my undergraduate
              studies, I chose to study abroad. I completed a graduate program
              in design at Kyushu University, and at the same time, I focused my
              research on machine learning and data mining. <br />
              <br />
              In the past few years, I have dived into language learning, UI
              design, and Web development. I believe that creative collaboration
              between design and technology is the way that to create better
              solutions.
            </p>
          </div>
          {/* Introduction Right Part */}
          <Image
            src={profilePic}
            alt="My profile image"
            className="block object-cover rounded-lg shadow-md"
          />
        </section>
        <section className="mb-32">
          <h3 className="text-3xl leading-9 font-black text-gray-900 mb-8">
            Education
          </h3>
          <div className="mb-8">
            <p className="text-xl leading-7 text-gray-900 mb-4">
              Kyushu University
            </p>
            <p className="text-base leading-6 text-gray-600 mb-2">
              Master of Design
            </p>
            <p className="text-base leading-6 text-gray-600 italic">
              Aprl 2014 - Feb 2017
            </p>
          </div>
          <div>
            <p className="text-xl leading-7 text-gray-900 mb-4">
              Hubei University of Technology
            </p>
            <p className="text-base leading-6 text-gray-600 mb-2">
              Bachelor of Electronic Information Engineering
            </p>
            <p className="text-base leading-6 text-gray-600 italic">
              Sep 2007 - August 2011
            </p>
          </div>
        </section>

        {/* Section - Skill */}
        <section className="mb-32">
          <h3 className="text-3xl leading-9 font-black text-gray-900 mb-8">
            Skills
          </h3>
          <div className="mb-8">
            <p className="text-xl leading-7 text-gray-900 mb-4">Design</p>
            <div>
              <Chip text="Figma" />
              <Chip text="Sketch" />
              <Chip text="XD" />
              <Chip text="InVision" />
              <Chip text="Illustrator" />
              <Chip text="Photoshop" />
              <Chip text="InDesign" />
              <Chip text="ProtoPie" />
            </div>
          </div>
          <div className="mb-8">
            <p className="text-xl leading-7 text-gray-900 mb-4">Engineering</p>
            <div>
              <Chip text="HTML/CSS(SCSS)" />
              <Chip text="JavaScript" />
              <Chip text="TypeScript" />
              <Chip text="React" />
              <Chip text="NextJS" />
              <Chip text="Express" />
              <Chip text="Git" />
              <Chip text="WordPress" />
            </div>
          </div>
          <div className="mb-8">
            <p className="text-xl leading-7 text-gray-900 mb-4">Languages</p>
            <div>
              <Chip text="Chinese" />
              <Chip text="Japanese" />
              <Chip text="English" />
            </div>
          </div>
        </section>
        <section className="mb-32">
          <h3 className="text-3xl leading-9 font-black text-gray-900 mb-4">
            Contact
          </h3>
          <p className="text-sm text-gray-900 leading-7 mb-4">
            Whether you have a question or just want to say hi, I will try my
            best to get back to you!
          </p>
          <ContainedButton
            textLabel="Start a conversation"
            href="mailto:mail.gaoshanghui@gmail.com"
          />
        </section>
        <div className="flex flex-col justify-center mb-10">
          <p className="text-base text-center leading-6 font-bold mb-4">
            You can also find me at
          </p>
          <div className="space-x-5 flex justify-center">
            <a
              href="https://www.linkedin.com/in/shanghui-gao-b503b1227"
              target="_blank"
              rel="noreferrer"
            >
              <span className="inline-block p-3 border border-gray-200 rounded-full">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect width="24" height="24" fill="white" />
                  <path
                    d="M7.60001 20H4.2V9.3H7.60001V20ZM5.9 7.8C4.8 7.8 4 7 4 5.9C4 4.8 4.9 4 5.9 4C7 4 7.8 4.8 7.8 5.9C7.8 7 7 7.8 5.9 7.8ZM20 20H16.6V14.2C16.6 12.5 15.9 12 14.9 12C13.9 12 12.9 12.8 12.9 14.3V20H9.5V9.3H12.7V10.8C13 10.1 14.2 9 15.9 9C17.8 9 19.8 10.1 19.8 13.4V20H20Z"
                    fill="#2563EB"
                  />
                </svg>
              </span>
            </a>
            <a
              href="https://github.com/gaoshanghui"
              target="_blank"
              rel="noreferrer"
            >
              <span className="inline-block p-3 border border-gray-200 rounded-full">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_207_228)">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M12.0003 0.5C9.15149 0.501478 6.39613 1.51046 4.22687 3.34652C2.05761 5.18259 0.615903 7.72601 0.159545 10.522C-0.296814 13.318 0.261927 16.1842 1.73587 18.6082C3.20981 21.0321 5.50284 22.8558 8.20493 23.753C8.80105 23.8636 9.0256 23.4941 9.0256 23.18C9.0256 22.8658 9.01367 21.955 9.0097 20.9592C5.6714 21.6804 4.96599 19.5505 4.96599 19.5505C4.42152 18.1674 3.63464 17.8039 3.63464 17.8039C2.54571 17.065 3.71611 17.0788 3.71611 17.0788C4.92227 17.1637 5.55616 18.3097 5.55616 18.3097C6.62521 20.1333 8.36389 19.6058 9.04745 19.2976C9.15475 18.5251 9.46673 17.9995 9.8105 17.7012C7.14383 17.4008 4.34204 16.3774 4.34204 11.8054C4.32551 10.6197 4.76802 9.47305 5.57801 8.60268C5.45481 8.30236 5.04348 7.08923 5.69524 5.44143C5.69524 5.44143 6.7027 5.12136 8.9958 6.66444C10.9627 6.12962 13.0379 6.12962 15.0047 6.66444C17.2958 5.12136 18.3013 5.44143 18.3013 5.44143C18.9551 7.08528 18.5437 8.29841 18.4205 8.60268C19.2331 9.47319 19.6765 10.6218 19.6585 11.8094C19.6585 16.3912 16.8507 17.4008 14.1801 17.6952C14.6093 18.0667 14.9928 18.7918 14.9928 19.9061C14.9928 21.5026 14.9789 22.7868 14.9789 23.18C14.9789 23.4981 15.1955 23.8695 15.8035 23.753C18.5059 22.8557 20.7992 21.0317 22.2731 18.6073C23.747 16.183 24.3055 13.3163 23.8486 10.5201C23.3917 7.7238 21.9493 5.18035 19.7793 3.34461C17.6094 1.50886 14.8533 0.500541 12.0042 0.5H12.0003Z"
                      fill="#2563EB"
                    />
                    <path
                      d="M4.54444 17.6321C4.5186 17.6914 4.42322 17.7092 4.34573 17.6677C4.26823 17.6262 4.21061 17.5491 4.23843 17.4879C4.26625 17.4266 4.35964 17.4108 4.43714 17.4523C4.51463 17.4938 4.57424 17.5729 4.54444 17.6321Z"
                      fill="white"
                    />
                    <path
                      d="M5.03129 18.1714C4.99014 18.192 4.94306 18.1978 4.89811 18.1877C4.85316 18.1776 4.81314 18.1523 4.78489 18.1161C4.7074 18.0331 4.69149 17.9185 4.7511 17.8671C4.81072 17.8157 4.91803 17.8395 4.99552 17.9224C5.07302 18.0054 5.0909 18.12 5.03129 18.1714Z"
                      fill="white"
                    />
                    <path
                      d="M5.50424 18.857C5.43072 18.9084 5.30553 18.857 5.23598 18.7543C5.21675 18.7359 5.20146 18.7138 5.19101 18.6893C5.18056 18.6649 5.17517 18.6386 5.17517 18.612C5.17517 18.5855 5.18056 18.5592 5.19101 18.5347C5.20146 18.5103 5.21675 18.4882 5.23598 18.4698C5.3095 18.4204 5.4347 18.4698 5.50424 18.5705C5.57379 18.6713 5.57578 18.8057 5.50424 18.857Z"
                      fill="white"
                    />
                    <path
                      d="M6.14605 19.5207C6.08048 19.5938 5.94735 19.5741 5.83806 19.4753C5.72877 19.3765 5.70293 19.2422 5.7685 19.171C5.83408 19.0999 5.96721 19.1197 6.08048 19.2165C6.19374 19.3133 6.2156 19.4496 6.14605 19.5207Z"
                      fill="white"
                    />
                    <path
                      d="M7.04617 19.9081C7.01637 20.001 6.88124 20.0425 6.74612 20.003C6.611 19.9635 6.52158 19.8528 6.54741 19.758C6.57325 19.6631 6.71036 19.6197 6.84747 19.6631C6.98457 19.7066 7.07201 19.8113 7.04617 19.9081Z"
                      fill="white"
                    />
                    <path
                      d="M8.02783 19.9752C8.02783 20.072 7.91656 20.155 7.77349 20.1569C7.63042 20.1589 7.51318 20.0799 7.51318 19.9831C7.51318 19.8863 7.62445 19.8033 7.76752 19.8013C7.91059 19.7993 8.02783 19.8764 8.02783 19.9752Z"
                      fill="white"
                    />
                    <path
                      d="M8.94189 19.8232C8.95978 19.92 8.86042 20.0207 8.71735 20.0445C8.57428 20.0682 8.4491 20.0109 8.43121 19.916C8.41333 19.8212 8.51666 19.7185 8.65575 19.6928C8.79485 19.6671 8.92401 19.7264 8.94189 19.8232Z"
                      fill="white"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_207_228">
                      <rect width="24" height="24" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </span>
            </a>
            <a
              href="https://dribbble.com/gaoshanghui"
              target="_blank"
              rel="noreferrer"
            >
              <span className="inline-block p-3 border border-gray-200 rounded-full">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12 0C5.37527 0 0 5.37527 0 12C0 18.6248 5.37527 24 12 24C18.6117 24 24 18.6248 24 12C24 5.37527 18.6117 0 12 0ZM19.9262 5.53145C21.3579 7.27549 22.217 9.50107 22.243 11.9089C21.9046 11.8439 18.5206 11.154 15.1106 11.5835C15.0325 11.4143 14.9675 11.2321 14.8894 11.0499C14.6811 10.5554 14.4469 10.0477 14.2126 9.56618C17.9869 8.0304 19.705 5.81779 19.9262 5.53145ZM12 1.77007C14.603 1.77007 16.9848 2.74621 18.7939 4.34707C18.6117 4.60738 17.0629 6.67679 13.4186 8.04338C11.7397 4.95878 9.87855 2.43384 9.5922 2.04338C10.3601 1.86117 11.1671 1.77007 12 1.77007ZM7.63995 2.73319C7.91325 3.09761 9.73538 5.63558 11.4404 8.65508C6.65076 9.9306 2.42083 9.90458 1.96529 9.90458C2.62907 6.72885 4.77657 4.08676 7.63995 2.73319ZM1.74404 12.0131C1.74404 11.9089 1.74404 11.8048 1.74404 11.7007C2.18655 11.7136 7.15835 11.7787 12.2733 10.243C12.5727 10.8156 12.846 11.4013 13.1063 11.9869C12.9761 12.026 12.8329 12.0651 12.7028 12.1041C7.41865 13.8091 4.60738 18.4685 4.3731 18.859C2.7462 17.0499 1.74404 14.6421 1.74404 12.0131ZM12 22.256C9.6312 22.256 7.44469 21.449 5.71367 20.0954C5.89588 19.718 7.97827 15.7094 13.757 13.692C13.783 13.679 13.7961 13.679 13.8221 13.666C15.2668 17.4013 15.8525 20.5379 16.0087 21.436C14.7722 21.9696 13.4186 22.256 12 22.256ZM17.7136 20.4989C17.6096 19.8742 17.0629 16.8807 15.7223 13.1974C18.9371 12.6898 21.7484 13.5228 22.0998 13.6399C21.6573 16.4902 20.0173 18.9501 17.7136 20.4989Z"
                    fill="#2563EB"
                  />
                </svg>
              </span>
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
