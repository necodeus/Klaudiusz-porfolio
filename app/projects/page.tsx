import React from "react";
import Head from "next/head";
import CustomButton from "@/components/CustomButton";
import { gql } from "@apollo/client";
import createApolloClient from "@/apollo-client";

async function getData() {
  const client = createApolloClient();

  const realisationQuery = gql`
    query Realisation {
      page(id: "cG9zdDoyNzA=") {
        realisation {
          hero {
            title
            description
            button {
              text
              url
            }
          }
        }
      }
    }
  `;

  const realisationData = await client.query({ query: realisationQuery });

  return {
    hero: realisationData.data.page.realisation.hero,
  };
}

const ProjectsPage = async () => {
  const { hero } = await getData();

  return (
    <>
      <Head>
        <title>
          Projekty - Strony Internetowe, Sklepy Internetowe, SEO | Lubycza
          Królewska, Tomaszów Lubelski, Zamość, Lublin | Klaudiusz Adamaszek -
          Web Developer
        </title>
      </Head>
      <section className="mb-12">
        <div
          className="bg-[#0077cc] px-6 py-12 lg:p-14"
        >
          <div className="cnt mx-auto text-center">
            <h1 className="text-[1.7rem] lg:text-[2.8rem] font-[600] tracking-wide text-[#fff]">
              {hero.title}
            </h1>
            <p className="text-[#e7e7e7] leading-8 mt-4 mb-6 font-sans font-[400] text-[1rem] md:text-[1.1rem] lg:text-[1.2rem] w-full mx-auto md:max-w-[80%] lg:max-w-[70%] tracking-wide">
              {hero.description}
            </p>
            <div className="mt-6 text-center">
              <CustomButton
                bgColor="#fff"
                textColor="#0077cc"
                text={hero.button.text}
                link={hero.button.url}
              />
            </div>
          </div>
        </div>
        <div
          className="cnt mx-auto mt-14"
        >
          <div className="max-w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-14 w-full gap-6">
            {[].map((project, index) => (
              <div key={index} className="flex flex-row jsmb-4">
                <div className="relative border border-bg-gray-300 rounded-md min-h-[230px] w-[350px] flex items-center justify-center">
                  <div className="h-[10rem] w-[10rem] relative">
                    <div className="absolute h-[0.03rem] top-14 w-full bg-gray-300 transform rotate-45 origin-center"></div>
                    <div className="absolute h-[0.03rem] top-14 w-full bg-gray-300 transform -rotate-45 origin-center"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default ProjectsPage;
