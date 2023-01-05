/* eslint-disable @next/next/no-css-tags */
import Head from "next/head";
import Image from "next/image";
import imageUrlBuilder from "@sanity/image-url";
import { createClient } from "next-sanity";
import Link from "next/link";
import Script from "next/script";
import Header from "../components/header";
import React, { useContext } from "react";
import { Context } from "../context/Context";

const Home = ({ projects, blogs, profile }) => {
  const { join, joinclub, inputEvent, fullname, email, message } =
    useContext(Context);

  const client = createClient({
    projectId: "x0spqc8g",
    dataset: "production",
    apiVersion: "2021-08-31",
    useCdn: false,
  });
  const builder = imageUrlBuilder(client);
  // const profile = {
  //   title: "Work With Us",
  //   name: "Kamal Sharma",
  //   instagramLink: "https://instagram.com/kamaltechnicals",
  //   githubLink: "https://github.com/kamalsharma3",
  //   dribbbleLink: "https://dribbble.com/kamaltechnical",
  // };

  return (
    <>
      <html>
        <body
          className="{'overflow-hidden max-h-screen absolute': mobileMenu }"
          x-data="{ mobileMenu: false }"
        >
          <Script src="/assets/js/main.js"></Script>
          <Script
            defer
            src="https://unpkg.com/@alpine-collective/toolkit@1.0.0/dist/cdn.min.js"
          ></Script>

          <Script
            defer
            src="https://unpkg.com/alpinejs@3.x.x/dist/cdn.min.js"
          ></Script>
          <Head>
            <meta charSet="utf-8" />

            <meta content="IE=edge,chrome=1" httpEquiv="X-UA-Compatible" />

            <meta
              content="width=device-width, initial-scale=1, shrink-to-fit=no"
              name="viewport"
            />

            <title>
              {profile.title} - Web Development | Coding | Freelancing
            </title>

            <meta property="og:title" content="Homepage | {profile.title}" />

            <meta property="og:locale" content="en_US" />

            <link rel="canonical" href="/" />

            <meta property="og:url" content="/" />

            <meta
              name="description"
              content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            />

            <link rel="icon" type="image/png" href="/assets/img/favicon.png" />

            <meta name="theme-color" content="#5540af" />

            <meta property="og:site_name" content="Kamaltechnical.com" />

            <meta property="og:image" content="//assets/img/social.jpg" />

            <meta name="twitter:card" content="summary_large_image" />

            <meta name="twitter:site" content="@tailwindmade" />

            <link
              crossOrigin="crossorigin"
              href="https://fonts.gstatic.com"
              rel="preconnect"
            />

            {/* <link
          as="style"
          href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600&family=Raleway:wght@400;500;600;700&display=swap"
          rel="preload"
        />

        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600&family=Raleway:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        /> */}

            <link
              href="https://unpkg.com/boxicons@2.0.7/css/boxicons.min.css"
              rel="stylesheet"
            ></link>

            <link
              crossOrigin="anonymous"
              href="/assets/styles/main.min.css"
              media="screen"
              rel="stylesheet"
            ></link>
          </Head>

          <div id="main" className="relative">
            <div
              x-data="{
    triggerNavItem(id) {
        $scroll(id)
    },
    triggerMobileNavItem(id) {
        mobileMenu = false;
        this.triggerNavItem(id)
    }
}"
            ></div>

            {/* ---------------------Header section start ------ */}
            <Header />

            {/* ---------Header section end ---working ------------- */}

            {/* ----Second section start------ */}
            <div>
              <div
                className="relative bg-cover bg-center bg-no-repeat py-20"
                style={{ backgroundImage: "url(/assets/img/bg-hero.jpg)" }}
              >
                <div className="absolute inset-0 z-20 bg-gradient-to-r from-hero-gradient-from to-hero-gradient-to bg-cover bg-center bg-no-repeat"></div>

                <div className="container relative z-30 pt-20 pb-12 sm:pt-56 sm:pb-48 lg:pt-64 lg:pb-48">
                  <div className="flex flex-col items-center justify-center lg:flex-row">
                    <div className="rounded-full border-8 border-primary shadow-xl">
                      <picture>
                        <img
                          src={builder.image(profile.image).width(200).url()}
                          className="h-40 rounded-full sm:h-56"
                          alt="author"
                        />
                      </picture>
                    </div>
                    <div className="pt-8 sm:pt-10 lg:pl-8 lg:pt-0">
                      <h1 className="text-center font-header text-4xl text-white sm:text-left sm:text-5xl md:text-6xl">
                        Hello I&rsquo;m {profile.name}!
                      </h1>
                      <div className="flex flex-col justify-center pt-3 sm:flex-row sm:pt-5 lg:justify-start">
                        <div className="flex items-center justify-center pl-0 sm:justify-start md:pl-1">
                          <p className="font-body text-lg uppercase text-white">
                            Let&rsquo;s connect
                          </p>
                          <div className="hidden sm:block">
                            <i className="bx bx-chevron-right text-3xl text-yellow"></i>
                          </div>
                        </div>
                        <div className="flex items-center justify-center pt-5 pl-2 sm:justify-start sm:pt-0 space-x-1">
                          {/* <Link href="/" className="pl-4">
                        <i className="bx bxl-facebook-square text-2xl text-white hover:text-yellow cursor-pointer"></i>
                      </Link> */}
                          <Link
                            href="https://github.com/kamalsharma3"
                            className="pl-4"
                          >
                            <i className="bx bxl-github text-2xl text-white hover:text-yellow cursor-pointer"></i>
                          </Link>
                          <Link
                            href="https://dribbble.com/kamaltechnical"
                            className="pl-4"
                          >
                            <i className="bx bxl-dribbble text-2xl text-white hover:text-yellow cursor-pointer"></i>
                          </Link>
                          <Link
                            href="https://www.linkedin.com/in/kamal-sharma-b76ab8253"
                            className="pl-4"
                          >
                            <i className="bx bxl-linkedin text-2xl text-white hover:text-yellow cursor-pointer"></i>
                          </Link>
                          <Link
                            href="https://instagram.com/kamaltechnicals"
                            className="pl-4"
                          >
                            <i className="bx bxl-instagram text-2xl text-white hover:text-yellow cursor-pointer"></i>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-grey-50" id="about">
                <div className="container flex flex-col items-center py-16 md:py-20 lg:flex-row">
                  <div className="w-full text-center sm:w-3/4 lg:w-3/5 lg:text-left">
                    <p className="pt-6 font-body leading-relaxed font-semibold text-gray-500 text-2xl mb-10">
                      The site developed using HTML, CSS, JavaScript, Tailwind
                      CSS, React JS, Next JS, Sanity.io
                    </p>
                    <h2 className="font-header text-2xl uppercase text-primary sm:text-3xl lg:text-4xl">
                      Who am I?
                    </h2>
                    <h4 className="pt-6 font-header text-xl font-medium text-black sm:text-2xl lg:text-3xl">
                      I&rsquo;m {profile.name}, a Web Designer & Developer
                    </h4>
                    <div className="flex flex-col justify-center pt-6 sm:flex-row lg:justify-start">
                      <div className="flex items-center justify-center sm:justify-start">
                        <p className="font-body text-lg font-semibold uppercase text-grey-20">
                          Connect with me
                        </p>
                        <div className="hidden sm:block">
                          <i className="bx bx-chevron-right text-2xl text-primary"></i>
                        </div>
                      </div>
                      <div className="flex items-center justify-center pt-5 pl-2 sm:justify-start sm:pt-0 space-x-1">
                        {/* <Link href="/" className="pl-4">
                      <i className="bx bxl-facebook-square text-2xl text-primary hover:text-yellow cursor-pointer"></i>
                    </Link> */}
                        {/* <Link href="/" className="pl-4">
                      <i className="bx bxl-twitter text-2xl text-primary hover:text-yellow cursor-pointer"></i>
                    </Link> */}
                        <Link
                          href="https://dribbble.com/kamaltechnical"
                          className="pl-4"
                        >
                          <i className="bx bxl-dribbble text-2xl text-primary hover:text-yellow cursor-pointer"></i>
                        </Link>
                        <Link
                          href="https://www.linkedin.com/in/kamal-sharma-b76ab8253/"
                          className="pl-4"
                        >
                          <i className="bx bxl-linkedin text-2xl text-primary hover:text-yellow cursor-pointer"></i>
                        </Link>
                        <Link
                          href="https://instagram.com/kamaltechnicals"
                          className="pl-4"
                        >
                          <i className="bx bxl-instagram text-2xl text-primary hover:text-yellow cursor-pointer"></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="w-full pl-0 pt-10 sm:w-3/4 lg:w-2/5 lg:pl-12 lg:pt-0">
                    <div>
                      <div className="flex items-end justify-between">
                        <h4 className="font-body font-semibold uppercase text-black">
                          HTML
                        </h4>
                        <h3 className="font-body text-3xl font-bold text-primary">
                          15%
                        </h3>
                      </div>
                      <div className="mt-2 h-3 w-full rounded-full bg-lila">
                        <div
                          className="h-3 rounded-full bg-primary"
                          style={{ width: "15%" }}
                        ></div>
                      </div>
                    </div>

                    <div className="pt-6">
                      <div className="flex items-end justify-between">
                        <h4 className="font-body font-semibold uppercase text-black">
                          CSS
                        </h4>
                        <h3 className="font-body text-3xl font-bold text-primary">
                          35%
                        </h3>
                      </div>
                      <div className="mt-2 h-3 w-full rounded-full bg-lila">
                        <div
                          className="h-3 rounded-full bg-primary"
                          style={{ width: "35%" }}
                        ></div>
                      </div>
                    </div>
                    <div className="pt-6">
                      <div className="flex items-end justify-between">
                        <h4 className="font-body font-semibold uppercase text-black">
                          Javascript
                        </h4>
                        <h3 className="font-body text-3xl font-bold text-primary">
                          60%
                        </h3>
                      </div>
                      <div className="mt-2 h-3 w-full rounded-full bg-lila">
                        <div
                          className="h-3 rounded-full bg-primary"
                          style={{ width: "60%" }}
                        ></div>
                      </div>
                    </div>
                    <div className="pt-6">
                      <div className="flex items-end justify-between">
                        <h4 className="font-body font-semibold uppercase text-black">
                          Python
                        </h4>
                        <h3 className="font-body text-3xl font-bold text-primary">
                          10%
                        </h3>
                      </div>
                      <div className="mt-2 h-3 w-full rounded-full bg-lila">
                        <div
                          className="h-3 rounded-full bg-primary"
                          style={{ width: "10%" }}
                        ></div>
                      </div>
                    </div>
                    <div className="pt-6">
                      <div className="flex items-end justify-between">
                        <h4 className="font-body font-semibold uppercase text-black">
                          Canva
                        </h4>
                        <h3 className="font-body text-3xl font-bold text-primary">
                          5%
                        </h3>
                      </div>
                      <div className="mt-2 h-3 w-full rounded-full bg-lila">
                        <div
                          className="h-3 rounded-full bg-primary"
                          style={{ width: "5%" }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="container py-16 md:py-20" id="services">
                <h2 className="text-center font-header text-4xl font-semibold uppercase text-primary sm:text-5xl lg:text-6xl">
                  Here&rsquo;s what I&rsquo;m good at
                </h2>
                <h3 className="pt-6 text-center font-header text-xl font-medium text-black sm:text-2xl lg:text-3xl">
                  These are the services I offer
                </h3>

                <div className="grid grid-cols-1 gap-6 pt-10 sm:grid-cols-2 md:gap-10 md:pt-12 lg:grid-cols-3">
                  <div className="group rounded px-8 py-12 shadow hover:bg-primary">
                    <div className="mx-auto h-24 w-24 text-center xl:h-28 xl:w-28">
                      <div className="hidden group-hover:block">
                        <Image
                          src="/assets/img/icon-development-white.svg"
                          alt="development icon"
                          width={300}
                          height={300}
                        />
                      </div>
                      <div className="block group-hover:hidden">
                        <Image
                          src="/assets/img/icon-development-black.svg"
                          alt="development icon"
                          width={300}
                          height={300}
                        />
                      </div>
                    </div>
                    <div className="text-center">
                      <h3 className="pt-8 text-lg font-semibold uppercase text-primary group-hover:text-yellow lg:text-xl">
                        WEB DEVELOPMENT
                      </h3>
                      <p className="text-grey pt-4 text-sm group-hover:text-white md:text-base">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit.
                      </p>
                    </div>
                  </div>
                  <div className="group rounded px-8 py-12 shadow hover:bg-primary">
                    <div className="mx-auto h-24 w-24 text-center xl:h-28 xl:w-28">
                      <div className="hidden group-hover:block">
                        <Image
                          src="/assets/img/icon-graphics-white.svg"
                          alt="Graphic Design icon"
                          width={300}
                          height={300}
                        />
                      </div>
                      <div className="block group-hover:hidden">
                        <Image
                          src="/assets/img/icon-graphics-black.svg"
                          alt="Graphic Design icon"
                          width={300}
                          height={300}
                        />
                      </div>
                    </div>
                    <div className="text-center">
                      <h3 className="pt-8 text-lg font-semibold uppercase text-primary group-hover:text-yellow lg:text-xl">
                        Web Design
                      </h3>
                      <p className="text-grey pt-4 text-sm group-hover:text-white md:text-base">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit.
                      </p>
                    </div>
                  </div>
                  <div className="group rounded px-8 py-12 shadow hover:bg-primary">
                    <div className="mx-auto h-24 w-24 text-center xl:h-28 xl:w-28">
                      <div className="hidden group-hover:block">
                        <Image
                          src="/assets/img/icon-design-white.svg"
                          alt="Theme Design icon"
                          width={300}
                          height={300}
                        />
                      </div>
                      <div className="block group-hover:hidden">
                        <Image
                          src="/assets/img/icon-design-black.svg"
                          alt="Theme Design icon"
                          width={300}
                          height={300}
                        />
                      </div>
                    </div>
                    <div className="text-center">
                      <h3 className="pt-8 text-lg font-semibold uppercase text-primary group-hover:text-yellow lg:text-xl">
                        Graphic Design
                      </h3>
                      <p className="text-grey pt-4 text-sm group-hover:text-white md:text-base">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit.
                      </p>
                    </div>
                  </div>
                  <div className="group rounded px-8 py-12 shadow hover:bg-primary">
                    <div className="mx-auto h-24 w-24 text-center xl:h-28 xl:w-28">
                      <div className="hidden group-hover:block">
                        <Image
                          src="/assets/img/icon-content-white.svg"
                          alt="content marketing icon"
                          width={300}
                          height={300}
                        />
                      </div>
                      <div className="block group-hover:hidden">
                        <Image
                          src="/assets/img/icon-content-black.svg"
                          alt="content marketing icon"
                          width={300}
                          height={300}
                        />
                      </div>
                    </div>
                    <div className="text-center">
                      <h3 className="pt-8 text-lg font-semibold uppercase text-primary group-hover:text-yellow lg:text-xl">
                        Technical Writing
                      </h3>
                      <p className="text-grey pt-4 text-sm group-hover:text-white md:text-base">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit.
                      </p>
                    </div>
                  </div>
                  <div className="group rounded px-8 py-12 shadow hover:bg-primary">
                    <div className="mx-auto h-24 w-24 text-center xl:h-28 xl:w-28">
                      <div className="hidden group-hover:block">
                        <Image
                          src="/assets/img/icon-mobile-white.svg"
                          alt="Mobile Application icon"
                          width={300}
                          height={300}
                        />
                      </div>
                      <div className="block group-hover:hidden">
                        <Image
                          src="/assets/img/icon-mobile-black.svg"
                          alt="Mobile Application icon"
                          width={300}
                          height={300}
                        />
                      </div>
                    </div>
                    <div className="text-center">
                      <h3 className="pt-8 text-lg font-semibold uppercase text-primary group-hover:text-yellow lg:text-xl">
                        Mobile Development
                      </h3>
                      <p className="text-grey pt-4 text-sm group-hover:text-white md:text-base">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit.
                      </p>
                    </div>
                  </div>
                  <div className="group rounded px-8 py-12 shadow hover:bg-primary">
                    <div className="mx-auto h-24 w-24 text-center xl:h-28 xl:w-28">
                      <div className="hidden group-hover:block">
                        <Image
                          src="/assets/img/icon-email-white.svg"
                          alt="Email Marketing icon"
                          width={300}
                          height={300}
                        />
                      </div>
                      <div className="block group-hover:hidden">
                        <Image
                          src="/assets/img/icon-email-black.svg"
                          alt="Email Marketing icon"
                          width={300}
                          height={300}
                        />
                      </div>
                    </div>
                    <div className="text-center">
                      <h3 className="pt-8 text-lg font-semibold uppercase text-primary group-hover:text-yellow lg:text-xl">
                        Email Development
                      </h3>
                      <p className="text-grey pt-4 text-sm group-hover:text-white md:text-base">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* -----------------------Portfolio section start ------------------ */}
              <div className="container py-16 md:py-20" id="portfolio">
                <h2 className="text-center font-header text-4xl font-semibold uppercase text-primary sm:text-5xl lg:text-6xl">
                  Check out my Portfolio
                </h2>
                <h3 className="pt-6 text-center font-header text-xl font-medium text-black sm:text-2xl lg:text-3xl">
                  Here&rsquo;s what I have done in the past
                </h3>

                <div className="mx-auto grid w-full grid-cols-1 gap-6 pt-12 sm:w-3/4 lg:w-full lg:grid-cols-3 xl:gap-10">
                  {projects?.map((project, key) => {
                    return (
                      <Link
                        key={project._id}
                        href={`${project.href}`}
                        // href={"/"}
                        className="shadow"
                      >
                        <a target={"_blank"}>
                          <div>
                            <div
                              style={{
                                backgroundImage: `url(${
                                  builder
                                    .image(project.projectimage)
                                    .width(200)
                                    .url() ||
                                  `/assets/img/question-mark-40876.svg`
                                })`,
                              }}
                              className="group relative h-72 bg-cover bg-center bg-no-repeat sm:h-84 lg:h-64 xl:h-72 cursor-pointer"
                            >
                              <span className="absolute inset-0 block bg-gradient-to-b from-blog-gradient-from to-blog-gradient-to bg-cover bg-center bg-no-repeat opacity-10 transition-opacity group-hover:opacity-50"></span>
                              <span className="absolute right-0 bottom-0 mr-4 mb-4 block rounded-full border-2 border-white px-6 py-2 text-center font-body text-sm font-bold uppercase text-white md:text-base curs">
                                Read More
                              </span>
                            </div>
                            <div className="bg-white py-6 px-5 xl:py-8">
                              <span className="block font-body text-lg font-semibold text-black">
                                {project.title}
                              </span>
                              <span className="block pt-2 font-body text-grey-20">
                                {project.metadesc}
                              </span>
                              <span className="block pt-2 font-body text-grey-20">
                                {project.technologies}
                              </span>
                            </div>
                          </div>
                        </a>
                      </Link>
                    );
                  })}
                </div>
              </div>

              {/* --------------------------------------- Portfolio section end ------------------------------------ */}

              {/* <div className="bg-grey-50" id="clients">
            <div className="container py-16 md:py-20">
              <div className="mx-auto w-full sm:w-3/4 lg:w-full">
                <h2 className="text-center font-header text-4xl font-semibold uppercase text-primary sm:text-5xl lg:text-6xl">
                  My latest clients
                </h2>
                <div className="flex flex-wrap items-center justify-center pt-4 sm:pt-4">
                  <span className="m-8 block">
                    <Image
                      src="/assets/img/logo-coca-cola.svg"
                      alt="client logo"
                      className="mx-auto block h-12 w-auto"
                      width={150}
                      height={100}
                    />
                  </span>
                  <span className="m-8 block">
                    <Image
                      src="/assets/img/logo-apple.svg"
                      alt="client logo"
                      className="mx-auto block h-12 w-auto"
                      width={150}
                      height={100}
                    />
                  </span>

                  <span className="m-8 block">
                    <Image
                      src="/assets/img/logo-netflix.svg"
                      alt="client logo"
                      className="mx-auto block h-12 w-auto"
                      width={150}
                      height={100}
                    />
                  </span>

                  <span className="m-8 block">
                    <Image
                      src="/assets/img/logo-amazon.svg"
                      alt="client logo"
                      className="mx-auto block h-12 w-auto"
                      width={150}
                      height={100}
                    />
                  </span>

                  <span className="m-8 block">
                    <Image
                      src="/assets/img/logo-stripe.svg"
                      alt="client logo"
                      className="mx-auto block h-12 w-auto"
                      width={150}
                      height={100}
                    />
                  </span>
                </div>
              </div>
            </div>
          </div> */}

              {/* <div className="container py-16 md:py-20" id="work">
            <h2 className="text-center font-header text-4xl font-semibold uppercase text-primary sm:text-5xl lg:text-6xl">
              My work experience
            </h2>
            <h3 className="pt-6 text-center font-header text-xl font-medium text-black sm:text-2xl lg:text-3xl">
              Here&rsquo;s what I did before freelancing
            </h3>

            <div className="relative mx-auto mt-12 flex w-full flex-col lg:w-2/3">
              <span className="left-2/5 absolute inset-y-0 ml-10 hidden w-0.5 bg-grey-40 md:block"></span>

              <div className="mt-8 flex flex-col text-center md:flex-row md:text-left">
                <div className="md:w-2/5">
                  <div className="flex justify-center md:justify-start">
                    <span className="shrink-0">
                      <Image
                        src="/assets/img/logo-spotify.svg"
                        className="h-auto w-32"
                        alt="company logo"
                        width={150}
                        height={50}
                      />
                    </span>
                    <div className="relative ml-3 hidden w-full md:block">
                      <span className="absolute inset-x-0 top-1/2 h-0.5 -translate-y-1/2 transform bg-grey-70"></span>
                    </div>
                  </div>
                </div>
                <div className="md:w-3/5">
                  <div className="relative flex md:pl-18">
                    <span className="absolute left-8 top-1 hidden h-4 w-4 rounded-full border-2 border-grey-40 bg-white md:block"></span>

                    <div className="mt-1 flex">
                      <i className="bx bxs-right-arrow hidden text-primary md:block"></i>
                      <div className="md:-mt-1 md:pl-8">
                        <span className="block font-body font-bold text-grey-40">
                          Apr 2016 - Oct 2022
                        </span>
                        <span className="block pt-2 font-header text-xl font-bold uppercase text-primary">
                          Frontend Developer
                        </span>
                        <div className="pt-2">
                          <span className="block font-body text-black">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Vestibulum mattis felis vitae risus pulvinar
                            tincidunt. Nam ac venenatis enim.
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-8 flex flex-col text-center md:flex-row md:text-left">
                <div className="md:w-2/5">
                  <div className="flex justify-center md:justify-start">
                    <span className="shrink-0">
                      <Image
                        src="/assets/img/logo-microsoft.svg"
                        className="h-auto w-32"
                        alt="company logo"
                        width={150}
                        height={50}
                      />
                    </span>
                    <div className="relative ml-3 hidden w-full md:block">
                      <span className="absolute inset-x-0 top-1/2 h-0.5 -translate-y-1/2 transform bg-grey-70"></span>
                    </div>
                  </div>
                </div>
                <div className="md:w-3/5">
                  <div className="relative flex md:pl-18">
                    <span className="absolute left-8 top-1 hidden h-4 w-4 rounded-full border-2 border-grey-40 bg-white md:block"></span>

                    <div className="mt-1 flex">
                      <i className="bx bxs-right-arrow hidden text-primary md:block"></i>
                      <div className="md:-mt-1 md:pl-8">
                        <span className="block font-body font-bold text-grey-40">
                          Mar 2018 - September 2019
                        </span>
                        <span className="block pt-2 font-header text-xl font-bold uppercase text-primary">
                          Software Engineer
                        </span>
                        <div className="pt-2">
                          <span className="block font-body text-black">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Vestibulum mattis felis vitae risus pulvinar
                            tincidunt. Nam ac venenatis enim.
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-8 flex flex-col text-center md:flex-row md:text-left">
                <div className="md:w-2/5">
                  <div className="flex justify-center md:justify-start">
                    <span className="shrink-0">
                      <Image
                        src="/assets/img/logo-fedex.svg"
                        className="h-auto w-32"
                        alt="company logo"
                        width={150}
                        height={50}
                      />
                    </span>
                    <div className="relative ml-3 hidden w-full md:block">
                      <span className="absolute inset-x-0 top-1/2 h-0.5 -translate-y-1/2 transform bg-grey-70"></span>
                    </div>
                  </div>
                </div>
                <div className="md:w-3/5">
                  <div className="relative flex md:pl-18">
                    <span className="absolute left-8 top-1 hidden h-4 w-4 rounded-full border-2 border-grey-40 bg-white md:block"></span>

                    <div className="mt-1 flex">
                      <i className="bx bxs-right-arrow hidden text-primary md:block"></i>
                      <div className="md:-mt-1 md:pl-8">
                        <span className="block font-body font-bold text-grey-40">
                          October 2019 - Feb 2021
                        </span>
                        <span className="block pt-2 font-header text-xl font-bold uppercase text-primary">
                          DevOps Engineer
                        </span>
                        <div className="pt-2">
                          <span className="block font-body text-black">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Vestibulum mattis felis vitae risus pulvinar
                            tincidunt. Nam ac venenatis enim.
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div> */}

              <div
                className="bg-cover bg-top bg-no-repeat pb-16 md:py-16 lg:py-24"
                style={{
                  backgroundImage: "url(/assets/img/experience-figure.png)",
                }}
                id="statistics"
              >
                <div className="container">
                  <div className="mx-auto w-5/6 bg-white py-16 shadow md:w-11/12 lg:py-20 xl:py-24 2xl:w-full">
                    <div className="grid grid-cols-2 gap-5 md:gap-8 xl:grid-cols-4 xl:gap-5">
                      <div className="flex flex-col items-center justify-center text-center md:flex-row md:text-left">
                        <div>
                          <Image
                            src="/assets/img/icon-project.svg"
                            className="mx-auto h-12 w-auto md:h-20"
                            alt="icon project"
                            width={100}
                            height={50}
                          />
                        </div>
                        <div className="pt-5 md:pl-5 md:pt-0">
                          <h1 className="font-body text-2xl font-bold text-primary md:text-4xl">
                            12
                          </h1>
                          <h4 className="text-grey-dark font-header text-base font-medium leading-loose md:text-xl">
                            Finished Projects
                          </h4>
                        </div>
                      </div>

                      <div className="flex flex-col items-center justify-center text-center md:flex-row md:text-left">
                        <div>
                          <Image
                            src="/assets/img/icon-award.svg"
                            className="mx-auto h-12 w-auto md:h-20"
                            alt="icon award"
                            width={100}
                            height={50}
                          />
                        </div>
                        <div className="pt-5 md:pl-5 md:pt-0">
                          <h1 className="font-body text-2xl font-bold text-primary md:text-4xl">
                            3
                          </h1>
                          <h4 className="text-grey-dark font-header text-base font-medium leading-loose md:text-xl">
                            Awards Won
                          </h4>
                        </div>
                      </div>

                      <div className="mt-6 flex flex-col items-center justify-center text-center md:mt-10 md:flex-row md:text-left lg:mt-0">
                        <div>
                          <Image
                            src="/assets/img/icon-happy.svg"
                            className="mx-auto h-12 w-auto md:h-20"
                            alt="icon happy clients"
                            width={100}
                            height={50}
                          />
                        </div>
                        <div className="pt-5 md:pl-5 md:pt-0">
                          <h1 className="font-body text-2xl font-bold text-primary md:text-4xl">
                            8
                          </h1>
                          <h4 className="text-grey-dark font-header text-base font-medium leading-loose md:text-xl">
                            Happy Clients
                          </h4>
                        </div>
                      </div>

                      <div className="mt-6 flex flex-col items-center justify-center text-center md:mt-10 md:flex-row md:text-left lg:mt-0">
                        <div>
                          <Image
                            src="/assets/img/icon-puzzle.svg"
                            className="mx-auto h-12 w-auto md:h-20"
                            alt="icon puzzle"
                            width={100}
                            height={50}
                          />
                        </div>
                        <div className="pt-5 md:pl-5 md:pt-0">
                          <h1 className="font-body text-2xl font-bold text-primary md:text-4xl">
                            99
                          </h1>
                          <h4 className="text-grey-dark font-header text-base font-medium leading-loose md:text-xl">
                            Bugs Fixed
                          </h4>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-grey-50" id="blog">
                <div className="container py-16 md:py-20">
                  <h2 className="text-center font-header text-4xl font-semibold uppercase text-primary sm:text-5xl lg:text-6xl">
                    I also like to write
                  </h2>
                  <h4 className="pt-6 text-center font-header text-xl font-medium text-black sm:text-2xl lg:text-3xl">
                    Check out my latest posts!
                  </h4>
                  <div className="mx-auto grid w-full grid-cols-1 gap-6 pt-12 sm:w-3/4 lg:w-full lg:grid-cols-3 xl:gap-10">
                    {blogs?.map((blog, key) => {
                      return (
                        <Link
                          key={blog._id}
                          href={`/blogs/${blog.slug.current}`}
                          className="shadow"
                        >
                          <a target={"_blank"}>
                            <div>
                              <div
                                style={{
                                  backgroundImage: `url(${
                                    builder
                                      .image(blog.blogimage)
                                      .width(200)
                                      .url() || `/assets/img/post-img-01.png`
                                  })`,
                                }}
                                className="group relative h-72 bg-cover bg-center bg-no-repeat sm:h-84 lg:h-64 xl:h-72 cursor-pointer"
                              >
                                <span className="absolute inset-0 block bg-gradient-to-b from-blog-gradient-from to-blog-gradient-to bg-cover bg-center bg-no-repeat opacity-10 transition-opacity group-hover:opacity-50"></span>
                                <span className="absolute right-0 bottom-0 mr-4 mb-4 block rounded-full border-2 border-white px-6 py-2 text-center font-body text-sm font-bold uppercase text-white md:text-base curs">
                                  Read More
                                </span>
                              </div>
                              <div className="bg-white py-6 px-5 xl:py-8">
                                <span className="block font-body text-lg font-semibold text-black">
                                  {blog.title}
                                </span>
                                <span className="block pt-2 font-body text-grey-20">
                                  {blog.metadesc}
                                </span>
                              </div>
                            </div>
                          </a>
                        </Link>
                      );
                    })}
                  </div>
                </div>
              </div>

              <div className="container py-16 md:py-20" id="contact">
                <h2 className="text-center font-header text-4xl font-semibold uppercase text-primary sm:text-5xl lg:text-6xl">
                  Here&rsquo;s a contact form
                </h2>
                <h4 className="pt-6 text-center font-header text-xl font-medium text-black sm:text-2xl lg:text-3xl">
                  Have Any Questions?
                </h4>
                <div className="mx-auto w-full pt-5 text-center sm:w-2/3 lg:pt-6">
                  <p className="font-body text-grey-10">
                    Lorem ipsum dolor sit amet consectetur adipiscing elit
                    hendrerit condimentum turpis nisl sem, viverra habitasse
                    urna ante lobortis fermentum accumsan. Viverra habitasse
                    urna ante lobortis fermentum accumsan.
                  </p>
                </div>
                <form
                  onSubmit={inputEvent}
                  action="https://formsubmit.co/4a3ee465f2b063e9e6372e239ef4df2d"
                  className="mx-auto w-full pt-10 sm:w-3/4"
                  method="POST"
                  target="_blank"
                >
                  <div className="flex flex-col md:flex-row">
                    <input
                      className="mr-3 w-full rounded border-grey-80 px-4 py-3 font-body text-black md:w-1/2 lg:mr-5"
                      placeholder="Full Name"
                      type="text"
                      autoComplete="false"
                      value={fullname}
                      onChange={inputEvent}
                      name="fullname"
                    />
                    <input
                      className="mt-6 w-full rounded border-grey-80 px-4 py-3 font-body text-black md:mt-0 md:ml-3 md:w-1/2 lg:ml-5"
                      placeholder="Email"
                      type="email"
                      autoComplete="false"
                      value={email}
                      onChange={inputEvent}
                      name="email"
                    />
                  </div>
                  <textarea
                    className="mt-6 w-full rounded border-grey-80 px-4 py-3 font-body text-black md:mt-8"
                    placeholder="Message"
                    autoComplete="false"
                    cols="30"
                    rows="10"
                    value={message}
                    onChange={inputEvent}
                    name="message"
                  ></textarea>
                  <button
                    type="submit"
                    className="mt-6 flex items-center justify-center rounded bg-yellow-300 px-8 py-3 font-header text-lg font-bold uppercase text-primary hover:bg-grey-20"
                  >
                    Send Message
                    <i className="bx bx-chevron-right relative -right-2 text-3xl"></i>
                  </button>
                </form>

                {/* <div className="flex flex-col pt-16 lg:flex-row">
              <div className="w-full border-l-2 border-t-2 border-r-2 border-b-2 border-grey-60 px-6 py-6 sm:py-8 lg:w-1/3">
                <div className="flex items-center">
                  <i className="bx bx-phone text-2xl text-grey-40"></i>
                  <p className="pl-2 font-body font-bold uppercase text-grey-40 lg:text-lg">
                    My Phone
                  </p>
                </div>
                <p className="pt-2 text-left font-body font-bold text-primary lg:text-lg">
                  (+91) 012-345-6789
                </p>
              </div>
              <div className="w-full border-l-2 border-t-0 border-r-2 border-b-2 border-grey-60 px-6 py-6 sm:py-8 lg:w-1/3 lg:border-l-0 lg:border-t-2">
                <div className="flex items-center">
                  <i className="bx bx-envelope text-2xl text-grey-40"></i>
                  <p className="pl-2 font-body font-bold uppercase text-grey-40 lg:text-lg">
                    My Email
                  </p>
                </div>
                <p className="pt-2 text-left font-body font-bold text-primary lg:text-lg">
                  mail@example.com
                </p>
              </div>
              <div className="w-full border-l-2 border-t-0 border-r-2 border-b-2 border-grey-60 px-6 py-6 sm:py-8 lg:w-1/3 lg:border-l-0 lg:border-t-2">
                <div className="flex items-center">
                  <i className="bx bx-map text-2xl text-grey-40"></i>
                  <p className="pl-2 font-body font-bold uppercase text-grey-40 lg:text-lg">
                    My Address
                  </p>
                </div>
                <p className="pt-2 text-left font-body font-bold text-primary lg:text-lg">
                  Chandigarh, Chandigarh 160009, India
                </p>
              </div>
            </div> */}
              </div>

              <div
                className="h-72 bg-cover bg-center bg-no-repeat sm:h-64 md:h-72 lg:h-96"
                style={{ backgroundImage: "url(/assets/img/map.png)" }}
              ></div>

              <div
                className="relative bg-primary bg-cover bg-center bg-no-repeat py-16 bg-blend-multiply lg:py-24"
                style={{ backgroundImage: "url(/assets/img/bg-cta.jpg)" }}
              >
                <div className="container relative z-30">
                  <h3 className="text-center font-header text-3xl uppercase leading-tight tracking-wide text-white sm:text-4xl lg:text-5xl">
                    Keep <span className="font-bold">up-to-date</span> <br />
                    with what I&rsquo;m up to
                  </h3>
                  <form
                    onSubmit={joinclub}
                    action="https://formsubmit.co/4a3ee465f2b063e9e6372e239ef4df2d"
                    className="mt-6 flex flex-col justify-center sm:flex-row"
                    method="POST"
                    target="_blank"
                  >
                    <input
                      className="w-full rounded px-4 py-3 font-body text-black sm:w-2/5 sm:py-4 lg:w-1/3"
                      type="email"
                      placeholder="Give me your Email"
                      autoComplete="false"
                      value={join}
                      onChange={inputEvent}
                      name="email"
                    />
                    <button
                      type="submit"
                      className="mt-2 rounded text-primary px-8 py-3 font-body text-base font-bold uppercase bg-yellow-300 transition-colors hover:bg-primary hover:text-white focus:border-transparent focus:outline-warning focus:ring focus:ring-yellow sm:ml-2 sm:mt-0 sm:py-4 md:text-lg"
                    >
                      Join the club
                    </button>
                  </form>
                </div>
              </div>
            </div>
            {/* ---------------- Second section end -----Working---------*/}

            {/* ---------------- Third section start -------------------- */}
            <div className="bg-primary">
              <div className="container flex flex-col justify-between py-6 sm:flex-row">
                <p className="text-center font-body text-white md:text-left">
                  © Copyright 2022. All right reserved.
                </p>
                <div className="flex items-center justify-center pt-5 sm:justify-start sm:pt-0 space-x-2">
                  {/* <Link href="/" className="pl-4">
                <i className="bx bxl-facebook-square text-2xl text-white hover:text-yellow cursor-pointer"></i>
              </Link> */}
                  {/* <Link href="/" className="pl-4">
                <i className="bx bxl-twitter text-2xl text-white hover:text-yellow cursor-pointer"></i>
              </Link> */}
                  <Link
                    href="https://dribbble.com/kamaltechnical"
                    className="pl-4"
                  >
                    <i className="bx bxl-dribbble text-2xl text-white hover:text-yellow cursor-pointer"></i>
                  </Link>
                  <Link
                    href="https://www.linkedin.com/in/kamal-sharma-b76ab8253/"
                    className="pl-4"
                  >
                    <i className="bx bxl-linkedin text-2xl text-white hover:text-yellow cursor-pointer"></i>
                  </Link>
                  <Link
                    href="https://instagram.com/kamaltechnicals"
                    className="pl-4"
                  >
                    <i className="bx bxl-instagram text-2xl text-white hover:text-yellow cursor-pointer"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          {/* -------------------Third section End -----Working---------- */}
        </body>
      </html>
    </>
  );
};

export default Home;

export const getServerSideProps = async (context) => {
  const client = createClient({
    projectId: "x0spqc8g",
    dataset: "production",
    apiVersion: "2021-10-21",
    useCdn: false,
  });
  const query = `*[_type == "blogs"][0...3]`;
  const blogs = await client.fetch(query);

  const projectsQuery = `*[_type == "projects"][0...3]`;
  const projects = await client.fetch(projectsQuery);

  const profileQuery = `*[_type == "profile"][0]`;
  const profile = await client.fetch(profileQuery);

  return {
    props: {
      projects,
      blogs,
      profile,
    },
  };
};
