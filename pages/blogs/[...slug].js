/* eslint-disable @next/next/no-css-tags */
/* eslint-disable @next/next/no-page-custom-font */
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import imageUrlBuilder from "@sanity/image-url";
import { createClient } from "next-sanity";
import Link from "next/link";
import Script from "next/script";
import { useEffect } from "react";
import PortableText from "react-portable-text";
import Header from "../../components/header";

const Post = ({ blog }) => {
  const router = useRouter();
  const { slug } = router.query;
  console.log(`slug is ${slug}`);
  return (
    <>
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
          content="width=device-width, initialScale=1, shrinkToFit=no"
          name="viewport"
        />

        <title>{blog.title} </title>

        <meta property="og:title" content="Homepage | Atom Template" />

        <meta property="og:locale" content="en_US" />

        <link rel="canonical" href="//" />

        <meta property="og:url" content="//" />

        <meta
          name="description"
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        />

        <link rel="icon" type="image/png" href="/assets/img/favicon.png" />

        <meta name="theme-color" content="#5540af" />

        <meta property="og:site_name" content="Atom Template" />

        <meta property="og:image" content="//assets/img/social.jpg" />

        <meta name="twitter:card" content="summary_large_image" />

        <meta name="twitter:site" content="@tailwindmade" />

        <link
          crossOrigin="crossorigin"
          href="https://fonts.gstatic.com"
          rel="preconnect"
        />

        <link
          as="style"
          href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600&family=Raleway:wght@400;500;600;700&display=swap"
          rel="preload"
        />

        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600&family=Raleway:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />

        <link
          href="https://unpkg.com/boxicons@2.0.7/css/boxicons.min.css"
          rel="stylesheet"
        />

        <link
          crossOrigin="anonymous"
          href="/assets/styles/main.min.css"
          media="screen"
          rel="stylesheet"
        />
      </Head>

      <div id="main" className="relative">
        <div>
          <Header />
        </div>
        <div>
          <div className="container py-6 md:py-10">
            <div className="mx-auto mt-12 max-w-4xl">
              <div className="">
                <h2 className="pt-5 font-body text-3xl font-semibold text-primary sm:text-4xl md:text-5xl xl:text-6xl">
                  {blog.title}
                </h2>
                <div className="flex items-center pt-5 md:pt-10">
                  <div>
                    <picture>
                      <img
                        src="/assets/img/blog-author.jpg"
                        className="h-20 w-20 rounded-full border-2 border-grey-70 shadow"
                        alt="author image"
                      />
                    </picture>
                  </div>
                  <div className="pl-5">
                    <span className="block font-body text-xl font-bold text-grey-10">
                      By Kamal Sharma
                    </span>
                    <span className="block pt-1 font-body text-xl font-bold text-grey-30">
                      September 27, 2022
                    </span>
                  </div>
                </div>
              </div>
              <div className="prose max-w-none pt-8">
                <h2 id="lorem-ipsum-dolor-sit-amet">
                  <PortableText
                    content={blog.content}
                    serializers={{
                      h1: (props) => (
                        <h1 style={{ color: "green" }} {...props} />
                      ),
                      li: ({ children }) => (
                        <li className="special-list-item">{children}</li>
                      ),
                    }}
                    projectId="x0spqc8g"
                    dataset="production"
                  />
                </h2>
              </div>
              <div className="flex pt-10">
                <Link href="/">
                  <a className="rounded-xl bg-primary px-4 py-1 font-body font-bold text-white hover:bg-grey-20">
                    Frontend
                  </a>
                </Link>
                <Link href="/">
                  <a className="ml-2 block rounded-xl bg-primary px-4 py-1 font-body font-bold text-white hover:bg-grey-20">
                    Design
                  </a>
                </Link>
              </div>
              <div className="mt-10 flex justify-between border-t border-lila py-12">
                <Link href="/" className="flex items-center">
                  <a>
                    <i className="bx bx-left-arrow-alt text-2xl text-primary"></i>
                    <span className="block pl-2 font-body text-lg font-bold uppercase text-primary md:pl-5">
                      Previous Post
                    </span>
                  </a>
                </Link>
                <Link href="/" className="flex items-center">
                  <a>
                    <span className="block pr-2 font-body text-lg font-bold uppercase text-primary md:pr-5">
                      Next Post
                    </span>
                    <i className="bx bx-right-arrow-alt text-2xl text-primary"></i>
                  </a>
                </Link>
              </div>
              <div className="flex flex-col items-center border-t border-lila py-12 pt-12 md:flex-row md:items-start xl:pb-20">
                <div className="w-3/4 sm:w-2/5 lg:w-1/4 xl:w-1/5">
                  <picture>
                    <img
                      src="/assets/img/blog-author.jpg"
                      className="rounded-full shadow"
                      alt="author image"
                    />
                  </picture>
                </div>
                <div className="ml-0 text-center md:ml-10 md:w-5/6 md:text-left">
                  <h3 className="pt-10 font-body text-2xl font-bold text-secondary md:pt-0">
                    Kamal Sharma
                  </h3>
                  <p className="pt-5 font-body text-lg leading-8 text-secondary sm:leading-9 md:text-xl md:leading-9 lg:leading-9 xl:leading-9">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit.
                  </p>
                  <div className="flex items-center justify-center pt-5 md:justify-start space-x-2">
                    {/* <Link href="/" className="pl-4">
                      <i className="bx bxl-facebook-square text-2xl text-primary hover:text-yellow cursor-pointer"></i>
                    </Link> */}
                    {/* <Link href="/" className="pl-4">
                      <i className="bx bxl-twitter text-2xl text-primary hover:text-yellow cursor-pointer"></i>
                    </Link> */}
                    <Link href="/" className="pl-4">
                      <i className="bx bxl-dribbble text-2xl text-primary hover:text-yellow cursor-pointer"></i>
                    </Link>
                    <Link href="/" className="pl-4">
                      <i className="bx bxl-linkedin text-2xl text-primary hover:text-yellow cursor-pointer"></i>
                    </Link>
                    <Link href="/" className="pl-4">
                      <i className="bx bxl-instagram text-2xl text-primary hover:text-yellow cursor-pointer"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-primary">
          <div className="container flex flex-col justify-between py-6 sm:flex-row">
            <p className="text-center font-body text-white md:text-left">
              &copy; 2022. All right reserved
            </p>
            <div className="flex items-center justify-center pt-5 sm:justify-start sm:pt-0 space-x-1">
              {/* <Link href="/">
                <i className="bx bxl-facebook-square text-2xl text-white hover:text-yellow"></i>
              </Link> */}
              {/* <Link href="/" className="pl-4">
                <i className="bx bxl-twitter text-2xl text-white hover:text-yellow"></i>
              </Link> */}
              <Link href="/" className="pl-4">
                <i className="bx bxl-dribbble text-2xl text-white hover:text-yellow"></i>
              </Link>
              <Link href="/" className="pl-4">
                <i className="bx bxl-linkedin text-2xl text-white hover:text-yellow"></i>
              </Link>
              <Link href="/" className="pl-4">
                <i className="bx bxl-instagram text-2xl text-white hover:text-yellow"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Post;

export const getServerSideProps = async (context) => {
  const { slug } = context.query;
  console.log("slug is " + slug);

  const client = createClient({
    projectId: "x0spqc8g",
    dataset: "production",
    apiVersion: "2021-10-21",
    useCdn: false,
  });
  const query = `*[_type == "blogs" && slug.current == '${slug}'][0]`;
  console.log(`slug.current is ${slug}`);
  const blog = await client.fetch(query);
  console.log(`blog is ${blog}`);
  console.log(blog);

  return {
    props: {
      blog,
    },
  };
};
