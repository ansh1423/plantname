import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import SearchBar from "../components/SearchBar";
import AboutCard from "../components/AboutCard";
// import styles from "../styles/Home.module.css";
import Link from "next/link";
import { GitHub } from "@material-ui/icons";
import ThemeSwitcher from "../components/ThemeSwitcher";

const Home: NextPage = () => {

  return (
    <>
      <Head>
        <title>PvZ 2</title>
        <meta
          name="description"
          content="One stop destination for all your Plants vs Zombies needs with a user-friendly experience!"
        />
        <meta name="keywords" content="Plants vs Zombies API" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <meta property="og:image" content="/assets/header_image.png" />
        <meta property="twitter:image" content="/assets/twttr_banner.png" />
        <meta name="revisit-after" content="1 days" />
      </Head>
      <div className="sticky bg-transparent backdrop-blur-xl shadow-sm top-0 h-14 z-50 dark:shadow-slate-900" >
        <nav className="mb-2 bg-opacity-80 flex justify-between  h-full items-center">
          <div className="font-semibold text-lg m-0 ml-2 p-2 rounded-md flex  items-center">

            <p className=" bg-gradient-to-r from-green-500 to-orange-500 text-transparent bg-clip-text ">
              Pvz2 API
            </p>
          </div>
          <div className="flex items-center justify-between">

            <div className="mx-2">
              <Link href={"/about"}>
                <a className="h-full text-black dark:text-white hover:text-cyan-500 flex items-center  hover:no-underline">
                  About
                </a>
              </Link>
            </div>
            <div className="mr-2">
              <Link href={"/docs"}>
                <a className="h-full  text-black dark:text-white hover:text-cyan-500 flex items-center  hover:no-underline">
                  Docs
                </a>
              </Link>
            </div>
          </div>
          <div className="flex items-center">
            <div className="mr-2 dark:text-white hover:text-cyan-500 ">
              <a className="h-full  text-black dark:text-white hover:text-cyan-500 flex items-center  hover:no-underline" href="https://github.com/code-cracked/plants-vs-zombies-api" target="_blank" rel="norefferer">
                <GitHub className="mx-1" fontSize="medium" style={{ color: 'blueviolet' }} />
              </a>
            </div>
            <ThemeSwitcher />
          </div>
        </nav>
      </div>
      <div
        className="bg-gray-50 dark:bg-black  h-screen w-full flex justify-center flex-col items-center"
        id="home-search"
      >
        <div
          className={`flex flex-col w-3/4 h-3/4 items-center justify-center`}
        >
          <div
            className={`relative w-full max-w-sm bottom-[3.125rem] m-[1.25rem,0rem]`}
          >
            <Image
              src={"/assets/header_image.png"}
              layout="responsive"
              width={1434}
              height={667}
              className="motion-safe:animate-zoomy"
              alt="header_image"
            />
          </div>

          <SearchBar />
        </div>
        <div className="bottom-4 cursor-pointer">
          <a href="#about" className="dark:text-slate-400">
            <svg
              width="24"
              height="24"
              xmlns="http://www.w3.org/2000/svg"
              fillRule="evenodd"
              clipRule="evenodd"
              fill="currentColor"
              className="motion-safe:animate-bounce"
            >
              <path d="M12 0c6.623 0 12 5.377 12 12s-5.377 12-12 12-12-5.377-12-12 5.377-12 12-12zm0 1c6.071 0 11 4.929 11 11s-4.929 11-11 11-11-4.929-11-11 4.929-11 11-11zm5.247 8l-5.247 6.44-5.263-6.44-.737.678 6 7.322 6-7.335-.753-.665z" />
            </svg>
          </a>
        </div>
      </div>
      <div
        className="bg-gray-100 dark:bg-[rgb(1,1,1)]  h-fit min-h-screen w-full "
        id="about"
      >
        <h2 className="text-center font-display font-medium text-3xl md:text-4xl lg:text-5xl lg:font-normal py-6 md:pt-10">
          About us
        </h2>
        <div
          className={` flex items-center flex-col w-full justify-evenly min-h-[91vh] h-fit sm:px-12`}
        >
          <AboutCard
            title={"Ridiculously fast."}
            detail={
              "PvZ2 web-app was designed to help people navigate through large amounts of data with ease."
            }
            image={"/assets/ridiculously-fast.png"}
            color={"text-red-400"}
            border="hover:border-red-700 dark:hover:border-red-500 hover:shadow-md dark:hover:shadow-red-700 hover:shadow-red-400"
            className="sm:self-start"
          />
          <AboutCard
            title={"Clean UI."}
            detail={
              "Rating is a very important both for us (it motivates to develop new modules), and for future customers."
            }
            image={"/assets/clean-ui.png"}
            color={"text-yellow-400"}
            border="hover:border-yellow-700 dark:hover:border-yellow-500 hover:shadow-md dark:hover:shadow-yellow-700 hover:shadow-yellow-400"
            className="sm:self-end"
          />
          <AboutCard
            title={"Extremely resourceful."}
            detail={
              "We create useful and unique solutions in challenging situations. Help us build a strong network."
            }
            image={"/assets/extremely-resourceful.jpg"}
            color={"text-green-400"}
            border="hover:border-green-700 dark:hover:border-green-500 hover:shadow-md dark:hover:shadow-green-700 hover:shadow-green-400"
            className="sm:self-start"
          />
          <p className="text-sm text-center text-gray-600 bottom-0"> Made with 💚 on PvZ</p>
        </div>
      </div>
    </>
  );
};

export default Home;
{
  /* sm:bg-red-400 md:bg-blue-400 lg:bg-green-400 xl:bg-yellow-400 */
}
