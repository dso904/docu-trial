/* eslint-disable react/no-unescaped-entities */
import React from "react";
import styles from "@/styles/Goals.module.css";
import Carausel from "@/components/carausel/Carausel";
import Timeline from "@/components/timeline/Timeline";
import { RemoveCurtain } from "@/components/curtain/Curtain";
import Head from "next/head";
import Ambience from "@/components/ambience/Ambience";

const Goals = () => {
  React.useEffect(() => {
    const handleLoad = () => RemoveCurtain();
    const images = document.querySelectorAll("img");
    const bgVid = document.querySelector(".fsBgVid") as HTMLVideoElement;
    let imagesToLoad = images.length + 1;
    const reduceImagesToLoad = () => {
      imagesToLoad--;
      if (imagesToLoad === 0) handleLoad();
    };

    if (bgVid.readyState === 4) handleLoad();
    else bgVid.addEventListener("loadeddata", reduceImagesToLoad);

    images.forEach((image) => {
      if (image.complete) reduceImagesToLoad();
      else image.addEventListener("load", reduceImagesToLoad);
    });
    return () => {
      images.forEach((image) =>
        image.removeEventListener("load", reduceImagesToLoad)
      );
    };
  }, []);

  return (
    <>

      <Head>
        <title>Carbon Manager — Goals</title>
      </Head>
      <Ambience audioSrc="/music/hrishi.mp3" />
      <main id="goalsPage">
        <article className={styles.article}>
          <div className={styles.article__content}>
            <h1>UN Sustainable Developement </h1><hr /><br /><br />
            <p>
            The 2030 Agenda for Sustainable Development, adopted by all United Nations members in 2015, created 17 world Sustainable Development Goals (SDGs). They were created with the aim of "peace and prosperity for people and the planet..." while tackling climate change and working to preserve oceans and forests. The SDGs highlight the connections between the environmental, social and economic aspects of sustainable development. Sustainability is at the center of the SDGs.<br /><br />

The short titles of the 17 SDGs are: No poverty (SDG 1), Zero hunger (SDG 2), Good health and well-being (SDG 3), Quality education (SDG 4), Gender equality (SDG 5), Clean water and sanitation (SDG 6), Affordable and clean energy (SDG 7), Decent work and economic growth (SDG 8), Industry, innovation and infrastructure (SDG 9), Reduced inequalities (SDG 10), Sustainable cities and communities (SDG 11), Responsible consumption and production (SDG 12), Climate action (SDG 13), Life below water (SDG 14), Life on land (SDG 15), Peace, justice, and strong institutions (SDG 16), and Partnerships for the goals (SDG 17).<br /><br />

These goals are ambitious, and the reports and outcomes to date indicate a challenging path. Most, if not all, of the goals are unlikely to be met by 2030. Rising inequalities, climate change, and biodiversity loss are topics of concerns threatening progress. The COVID-19 pandemic in 2020 to 2023 made these challenges worse. The pandemic impacted all 17 goals and emphasized the interconnectedness of global health, economic, social, and environmental challenges. Some regions, such as Asia, have experienced significant setbacks during that time. The global effort for the SDGs calls for prioritizing environmental sustainability, understanding the indivisible nature of the goals, and seeking synergies across sectors.<br /><br />

With regards to the political impact of the SDGs it has been observed that they have mainly influenced global and national debates. By doing so, they have lead to discursive effects for global and national debates. However, they have struggled to achieve transformative changes in policy and institutional structures. The uneven prioritization of goals reflects longstanding national development policies. This complicates the global endeavor towards sustainable development. For example there has long been a tendency to favor socio-economic objectives over environmental ones.<br /><br />

Funding remains a critical issue for achieving the SDGs. Significant financial resources would be required worldwide. The UN, other international organizations, and national governments are trying to assist with funding efforts. Furthermore, the role of private investment and a shift towards sustainable financing are also essential for realizing the SDGs. Examples of progress from some countries demonstrate that achieving sustainable development through concerted global action is possible.
</p><br /><hr /><br />
            <Carausel />
            <br />
            <br />
            <hr />
            <br />
            <br />
            <h1>Goal 3 — Good Health And Well Being</h1>
            <p>
            UN Sustainable Development Goal 3 aims to ensure healthy lives and promote well-being for all at all ages. While the primary focus of SDG 3 is on improving global health outcomes, reducing carbon emissions plays a crucial role in achieving this goal. Addressing carbon emissions is vital for mitigating climate change, which directly impacts human health through factors like extreme weather events, air pollution, and the spread of infectious diseases. By transitioning to clean and renewable energy sources, implementing sustainable transportation systems, and adopting eco-friendly practices in industries, countries can significantly reduce their carbon footprint and promote healthier environments. Additionally, investing in green technologies and promoting energy efficiency can not only curb emissions but also create new job opportunities and stimulate economic growth. Collaboration among governments, businesses, and communities is essential to develop and implement effective strategies for reducing carbon emissions while simultaneously advancing global health and well-being. Through concerted efforts and collective action, we can work towards a sustainable future where people and the planet thrive in harmony.
            </p>
            <p>
            The aim of UN Sustainable Development Goal 3 is to ensure healthy lives and promote well-being for all, regardless of age. It targets reducing preventable deaths, improving maternal and child health, and combating communicable diseases such as HIV/AIDS and malaria. Additionally, it seeks to address mental health issues and promote universal access to healthcare services. By achieving these objectives, SDG 3 aims to create a healthier and more equitable world for present and future generations.
            </p>
            <p>
            The primary goal of UN Sustainable Development Goal 3 is to ensure healthy lives and promote well-being for all, regardless of age or circumstance. It aims to reduce global mortality rates, particularly among mothers and children, and combat prevalent diseases such as HIV/AIDS, tuberculosis, and malaria. SDG 3 also strives to address non-communicable diseases like mental illness and promote access to essential healthcare services for all individuals. By prioritizing health equity and universal access to quality care, this goal seeks to create a world where everyone can lead healthy and fulfilling lives.
            </p>
            <br />
            <h4>
            "Health is a human right, not a privilege. UN Sustainable Development Goal 3 reminds us that ensuring healthy lives and well-being for all is fundamental to creating a fair and prosperous world."
            </h4><br /><br /><hr /><br /><br />
            <h1>Goal 7 — Affordable and Clean Energy</h1>
            <p>
            UN Sustainable Development Goal 7 sets out to ensure access to affordable, reliable, sustainable, and modern energy for all. While its primary focus is on enhancing energy access and sustainability, addressing energy consumption and production patterns also plays a pivotal role in achieving this goal. Access to clean and reliable energy is not only crucial for powering essential services like healthcare facilities, schools, and businesses but also for driving economic growth and lifting communities out of poverty.
            </p>
            <p>
            By transitioning to renewable energy sources such as solar, wind, and hydroelectric power, countries can reduce their dependence on fossil fuels and mitigate the harmful effects of air pollution and climate change. Sustainable energy solutions not only contribute to environmental preservation but also improve public health by reducing respiratory illnesses and other health hazards associated with pollution.

Furthermore, improving energy efficiency in industries, transportation, and buildings can significantly decrease energy consumption and carbon emissions, leading to long-term environmental and economic benefits. Investing in clean energy technologies and infrastructure not only fosters innovation and job creation but also strengthens energy security and resilience to global challenges.
            </p>
            <p>
            Collaboration among governments, businesses, and communities is essential to develop and implement effective strategies for expanding access to clean energy while promoting sustainable development. By prioritizing universal energy access and sustainability, UN Sustainable Development Goal 7 aims to create a more equitable and resilient world where everyone can thrive, powered by clean and renewable energy sources.
            </p>
            <br />
            <h4>
            "Access to energy is not just about turning on the lights; it's about empowering individuals, communities, and nations to unlock their full potential. UN Sustainable Development Goal 7 reminds us that sustainable energy is the key to building a brighter and more prosperous future for all."
            </h4><br /><br /><hr /><br /><br />
            <h1>Goal 11 — Sustainable and Communities</h1>
            <p>
            UN Sustainable Development Goal 11 aims to make cities and human settlements inclusive, safe, resilient, and sustainable. While its primary focus is on urban development and management, reducing carbon emissions remains integral to achieving this goal. Addressing carbon emissions is crucial for mitigating climate change, which directly impacts cities and human settlements through factors like extreme weather events, air pollution, and infrastructure vulnerability. By transitioning to sustainable urban planning and design, implementing energy-efficient buildings, promoting public transportation, and enhancing green spaces, cities can significantly reduce their carbon footprint and create healthier, more livable environments for residents. Additionally, investing in resilient infrastructure and disaster risk reduction measures can help cities adapt to climate change impacts and ensure the safety and well-being of their inhabitants. Collaboration among governments, urban planners, businesses, and communities is essential to develop and implement effective strategies for reducing carbon emissions while simultaneously advancing urban sustainability and resilience. Through concerted efforts and collective action, we can work towards creating cities and human settlements that are inclusive, safe, resilient, and sustainable for present and future generations.
            </p>
            <p>
            The aim of UN Sustainable Development Goal 11 is to make cities and human settlements inclusive, safe, resilient, and sustainable. It targets ensuring access for all to adequate, safe, and affordable housing, as well as basic services and transport systems. Additionally, it seeks to enhance urban planning and management in a way that is participatory, inclusive, and sustainable. By achieving these objectives, SDG 11 aims to create cities and human settlements that are more inclusive, safe, resilient, and sustainable for present and future generations.
            </p>
            <p>
            The primary goal of UN Sustainable Development Goal 11 is to make cities and human settlements inclusive, safe, resilient, and sustainable. It aims to address the challenges of rapid urbanization by promoting sustainable urban planning and management practices. SDG 11 seeks to ensure access to safe and affordable housing, basic services, and transport systems for all residents, particularly vulnerable groups. Additionally, it strives to enhance environmental sustainability, cultural heritage preservation, and disaster risk reduction in urban areas. By prioritizing inclusive and sustainable urban development, this goal aims to create cities and human settlements that foster social cohesion, economic prosperity, and environmental sustainability for all inhabitants.
            </p>
            <br />
            <h4>
            "Access to safe and sustainable urban environments is a fundamental human right. UN Sustainable Development Goal 11 underscores the importance of creating cities and human settlements that are inclusive, safe, resilient, and sustainable for everyone, regardless of their background or circumstances."
            </h4><br /><br /><hr /><br /><br />
            <h1>Goal 12 — Responsible Consumption And Production</h1>
            <p>
            UN Sustainable Development Goal 12 aims to ensure sustainable consumption and production patterns worldwide. Central to this goal is the urgent need to decouple economic growth from environmental degradation, promoting efficient resource use, reducing waste generation, and minimizing negative impacts on the planet's ecosystems. By transitioning towards sustainable consumption and production practices, nations can mitigate environmental risks, conserve natural resources, and safeguard biodiversity for future generations.
            </p>
            <p>
            Addressing unsustainable consumption and production patterns is critical for achieving multiple SDGs, including poverty alleviation, climate action, and environmental preservation. By promoting sustainable lifestyles, responsible production methods, and circular economy principles, countries can foster economic growth while reducing their ecological footprint.

Key strategies to advance SDG 12 include promoting sustainable procurement practices, investing in eco-friendly technologies, and fostering innovation in sustainable production processes. Additionally, raising awareness about the environmental and social impacts of consumer choices is essential for encouraging behavior change and fostering a culture of sustainability.
            </p>
            <p>
            Collaboration among governments, businesses, civil society, and consumers is paramount for implementing effective policies and initiatives to promote sustainable consumption and production. By working together, stakeholders can drive systemic changes, transform supply chains, and create a more resilient and sustainable global economy.
            </p>
            <br />
            <h4>
            "Embracing sustainable consumption and production is not only an environmental imperative but also a pathway to a more equitable and prosperous future for all. UN Sustainable Development Goal 12 calls for concerted action to promote responsible consumption and production patterns, ensuring that we leave a habitable planet for future generations."
            </h4><br /><br /><hr /><br /><br />
            <h1>Goal 13 — Climate Action</h1>
            <p>
            UN Sustainable Development Goal 13 focuses on urgent action to combat climate change and its impacts. It underscores the critical need to mitigate greenhouse gas emissions, adapt to the adverse effects of climate change, and build resilience to its impacts.

Addressing climate change is paramount for safeguarding the health and well-being of present and future generations. Rising global temperatures exacerbate extreme weather events, disrupt ecosystems, and escalate the spread of diseases. By reducing carbon emissions and transitioning to sustainable practices, we can mitigate these effects and create a healthier environment for all.
            </p>
            <p>
            SDG 13 emphasizes the importance of international cooperation and collective action in tackling climate change. It calls for innovative solutions to promote renewable energy, increase energy efficiency, and implement sustainable land-use practices. By investing in clean technologies and green infrastructure, countries can not only curb emissions but also foster economic growth and job creation.
            </p>
            <p>
            Furthermore, SDG 13 recognizes the disproportionate impact of climate change on vulnerable communities, particularly in developing countries. It advocates for climate justice and equity, ensuring that mitigation and adaptation efforts prioritize the needs of those most affected.
            </p>
            <br />
            <h4>
            "In essence, UN Sustainable Development Goal 13 serves as a call to action to protect our planet and secure a sustainable future for all. By working together to address climate change, we can build resilient societies and ensure the well-being of current and future generations"
            </h4><br /><br /><hr /><br /><br /><h1>Goal 15 — Life On Land</h1>
            <p>
            UN Sustainable Development Goal 15 aims to protect, restore, and promote sustainable use of terrestrial ecosystems, manage forests sustainably, combat desertification, and halt and reverse land degradation and biodiversity loss. The health of our planet's ecosystems is intricately linked to human well-being, making Goal 15 critical for ensuring a sustainable future for all.

Biodiversity loss and degradation of ecosystems pose significant threats to human health and livelihoods. These ecosystems provide essential services such as clean air and water, fertile soil for agriculture, and natural resources for medicine and food. By conserving and restoring these ecosystems, we can safeguard these vital resources and mitigate the impacts of climate change, such as natural disasters and food insecurity.
            </p>
            <p>
            Goal 15 also addresses the importance of sustainable land management practices to combat desertification and land degradation. Desertification threatens the productivity of land and exacerbates poverty and food insecurity, particularly in vulnerable communities. By implementing sustainable land management techniques, such as agroforestry and soil conservation, we can restore degraded land, enhance resilience to climate change, and improve the livelihoods of millions of people.
            </p>
            <p>
            Furthermore, preserving and restoring forests is crucial for mitigating climate change, as forests act as carbon sinks, absorbing and storing carbon dioxide from the atmosphere. Sustainable forest management practices, including reforestation and afforestation efforts, are essential for maintaining biodiversity, protecting wildlife habitats, and combating deforestation.
            </p>
            <br />
            <h4>
            "In summary, UN Sustainable Development Goal 15 underscores the importance of protecting and restoring terrestrial ecosystems for the well-being of current and future generations. By preserving biodiversity, combating desertification, and promoting sustainable land management practices, we can ensure a healthy planet for all and build a more sustainable and equitable world."
            </h4><br /><br /><hr /><br /><br />
            <br /><br /><br /><br /><br /><br /><br />
          </div>

        </article>
      </main>
    </>
  );
};

export default Goals;
