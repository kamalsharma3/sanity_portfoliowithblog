/* eslint-disable @next/next/no-css-tags */
/* eslint-disable @next/next/no-page-custom-font */
import Head from "next/head";
// import styles from "../../styles/Home.module.css";
import imageUrlBuilder from "@sanity/image-url";
import { createClient } from "next-sanity";
import Link from "next/link";
import Script from "next/script";
// import { useEffect } from "react";
import Header from "../components/header";
import Footer from "../components/footer";

const Blogs = ({ blogs }) => {
  const client = createClient({
    projectId: "x0spqc8g",
    dataset: "production",
    apiVersion: "2021-08-31",
    useCdn: false,
  });
  const builder = imageUrlBuilder(client);
  // useEffect(() => {
  //   console.log(builder.image(blogs[0].blogimage).width(200).url());
  // }, [blogs, builder]);

  return (
    <>
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

        <title>My Blogs </title>

        <meta property="og:title" content="Homepage | Atom Template" />

        <meta property="og:locale" content="en_US" />

        <link rel="canonical" href="./blogs" />

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
        />

        <link
          crossOrigin="anonymous"
          href="/assets/styles/main.min.css"
          media="screen"
          rel="stylesheet"
        />
      </Head>
      <div
        className="{'overflow-hidden max-h-screen absolute': mobileMenu }"
        x-data="{ mobileMenu: false }"
      >
        {/* Wrapper div here */}
        <div id="main" className="relative">
          <div>
            <Header />
          </div>
          {/* ----Blogs section start------ */}
          <div className="bg-grey-50" id="blog my-12">
            <div className="container py-16 md:py-20">
              <h2 className="text-center my-5 font-header text-4xl font-semibold uppercase text-primary sm:text-5xl lg:text-6xl">
                I also like to write
              </h2>
              <h4 className="pt-6 text-center font-header text-xl font-medium text-black sm:text-2xl lg:text-3xl">
                Check out my latest posts!
              </h4>
              <div className="mx-auto grid w-full grid-cols-1 gap-6 pt-12 sm:w-3/4 lg:w-full lg:grid-cols-3 xl:gap-10">
                {blogs.map((blog) => {
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
                            <span className="absolute inset-0 block bg-gradient-to-b from-blog-gradient-from to-blog-gradient-to bg-cover bg-center bg-no-repeat opacity-10 transition-opacity group-hover:opacity-50 "></span>
                            <span className="absolute bg-purple-300 right-0 bottom-0 mr-4 mb-4 block rounded-full border-2 border-purple-700 px-6 py-2 text-center font-body text-sm font-bold uppercase text-purple-600 md:text-base curs ">
                              Read More
                            </span>
                          </div>
                          <div className="bg-white py-6 px-5 xl:py-8 ">
                            <span className="block font-body text-lg font-semibold text-black cursor-pointer">
                              {blog.title}
                            </span>
                            <span className="block pt-2 font-body text-grey-20 cursor-pointer">
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
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Blogs;

export const getServerSideProps = async (context) => {
  const client = createClient({
    projectId: "x0spqc8g",
    dataset: "production",
    apiVersion: "2021-10-21",
    useCdn: false,
  });
  const query = `*[_type == "blogs"]`;
  const blogs = await client.fetch(query);

  return {
    props: {
      blogs,
    },
  };
};
