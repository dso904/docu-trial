import styles from "@/styles/Home.module.css";
import topic from "@/styles/Topic.module.css";
import Head from "next/head";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { TextPlugin } from "gsap/dist/TextPlugin";
import { useEffect, useRef } from "react";
import Content from "@/components/content/Content";
import React from "react";
import Image from "next/image";
import ReactDOM from "react-dom";
import { RemoveCurtain } from "@/components/curtain/Curtain";
import {showPlayer} from "@/components/player/Player";
import Ambience from "@/components/ambience/Ambience";

function HomePage() {
  // rest of the js
  gsap.registerPlugin(ScrollTrigger, TextPlugin);
  const titleRef = useRef<HTMLDivElement>(null);
  const imageContainerRef = useRef<HTMLDivElement>(null);

  const percH = (h = 0) => {
    return h > 0 ? (h / window.innerHeight) * 100 : window.innerHeight;
  };
  const em = (n = 1) => {
    return 14 * n + "px";
  };

  useEffect(() => {
    const title = titleRef.current;
    if (title) {
      gsap.to(title, {
        scale: 0.9,
        x: -100,
        y: -200,
        scrollTrigger: {
          trigger: title,
          start: `top ${percH(title.offsetTop)}%`,
          end: "bottom 20%",
          scrub: true,
        },
      });
      gsap.to(title, {
        scrollTrigger: {
          trigger: title,
          start: `top 40%`,
          end: "bottom 20%",
          scrub: true,
        },
      });

      const videoPreview = document.querySelector("#videoPreview");
      gsap.set(videoPreview, {
        scaleX: 0.5,
        transformOrigin: "center",
      });
      gsap.to(videoPreview, {
        scrollTrigger: {
          trigger: videoPreview,
          start: `top bottom`,
          end: "top 21px",
          scrub: true,
        },
        scaleX: 1,
      });
      gsap.to(videoPreview, {
        scrollTrigger: {
          trigger: videoPreview,
          start: `top 21px`,
          end: "top -500px",
          scrub: true,
        },
        y: 200,
        onComplete: () => {
          console.log("OKAY");
        },
      });

      videoPreview?.addEventListener("click", () => {
        showPlayer();
      });
    }

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
  });

  function setValues(data: any) {
    let title = document.querySelector("#topicTitle") as HTMLElement;
    let desc = document.querySelector("#topicDesc") as HTMLElement;
    let img = document.querySelector("#topicImageContainer") as HTMLElement;

    if (title) {
      title.innerText = data.tag;
      gsap.set("#topicTitle", { x: 50, scale: 0.9, opacity: 0 });
    }
    if (desc) {
      desc.innerHTML = data.long;
      gsap.set("#topicDesc p", { y: 50, opacity: 0 });
    }
    if (img) {
      ReactDOM.render(
        generateImg(data.image, data.caption),
        imageContainerRef.current
      );
    }

    proceed(["#" + title.id, "#" + desc.id, "#" + img.id]);
  }

  function proceed(elms: any) {
    const topicTimeline = gsap.timeline({});
    const topicOverlay = document.querySelector("." + topic.overlay);
    topicTimeline.to(topicOverlay, {
      duration: 0.8,
      y: 0,
    });
    gsap.set("#topicReturn", { x: 50, opacity: 0.1 });
    gsap.set("#topicImg", { scale: 0.9 });
    topicTimeline.to("." + topic.content, {
      opacity: 1,
      duration: 0.5,
      onStart: () => {
        gsap.to("#topicReturn", {
          x: 0,
          opacity: 0.8,
          duration: 0.5,
          delay: 0.3,
        });
        gsap.to("#topicImg", {
          scale: 0.9,
          duration: 0.5,

        });
      },
      onComplete: () => {
        if (elms[0] && elms[1]) {
          topicTimeline.to(elms[0], {
            x: 0,
            scale: 1,
            opacity: 1,
            duration: 0.5,
          });
          topicTimeline.to(elms[1] + " p", {
            y: 0,
            opacity: 1,
            duration: 0.6,
            stagger: 0.15,
          });
        }
      },
    });
  }

  function topicTransition(inf: any) {
    setValues(inf);
  }

  function closeTopic() {
    const topicOverlay = document.querySelector("." + topic.overlay);
    gsap.to("." + topic.content, {
      opacity: 0,
      duration: 0.5,
    });
    gsap.to(topicOverlay, {
      delay: 0.4,
      duration: 0.8,
      y: "-100%",
      onComplete: () => {
        gsap.set(topicOverlay, { y: "100%" });
      },
    });
  }

  function generateImg(src: string, alt: string) {
    return (
      <Image
        width={500}
        height={220}
        id="topicImg"
        
        src={src}
        alt={alt}
        className={topic.img}
        priority
      ></Image>
    );
  }

  return (
    <>  
      <Head>
        <title>Carbon Manager — Home</title>
      </Head>
      
      <Ambience audioSrc="/music/hrishi.mp3" />
      <div className={topic.overlay}>
        <div className={topic.content}>
          <div className={topic.image}>
            <div
              className={topic.goBack}
              
              id="topicReturn"
              onClick={() => {
                closeTopic();
              }}
            >
              <span>←</span> Return
            </div>
            <div
              className={topic.imgCont}
              id="topicImageContainer"
              ref={imageContainerRef}
              
            >
              {generateImg(
                "/images/river.jpg",
                "A polluted river which is the source of water for many people."
              )}
            </div>
          </div>
          <div className={topic.data}>
            <h2 id="topicTitle"></h2>
            <h4 id="topicDesc"></h4>
          </div>
        </div>
      </div>

      <main id="mainPage">
        <div className={styles.page} page-index="1" id="pageLanding">
          <div></div>
          <div className={styles.landing}>
            <div className={styles.title} ref={titleRef}>
              <span >Carbon</span>
              <span >Manager</span>
              <br />
              <hr />
              <br />
              <h2>A UNIQUE SOLUTION TO GLOBAL WARMING USING AI</h2>
            </div>
          </div>
        </div>

        <div className={styles.page} page-index="2" id="pageReel">
          <div id="videoPreview" className={styles.vid} >
            <div className={styles.vidTitle}>Watch Video</div>
          </div>
        </div>

        <div className={styles.page} page-index="3" id="pageIntro">
          <Content
            tag="UN SDGs"
            image="/images/1.png"
            caption="lets fight for a sustainable world."
            text="In the expansive domain of digital infrastructure, a beacon of hope emerges amidst the vast expanse—a beacon guiding us towards a sustainable future. "
            long="<p>The United Nations Sustainable Development Goals (SDGs) represent a comprehensive framework aimed at addressing some of the world's most pressing challenges. Consisting of seventeen goals, they encompass a wide range of issues including poverty eradication, quality education, gender equality, climate action, and sustainable cities and communities, among others. These goals provide a roadmap for global cooperation and action, serving as a rallying point for governments, organizations, and individuals worldwide to work together towards a more equitable, prosperous, and sustainable future for all.</p>"
            clickback={topicTransition}
          />

          <Content
            tag="Carbon Domination."
            image="/images/2.jpeg"
            caption="poisonous gases hoverring over the city."
            text="Our project, Carbon Manager- A Unique Solution to Global Warming using AI, stands as a pioneering force, equipped to combat the imminent threat of climate change, Global Warming through innovative technological solutions."
            long="<p>The city is engulfed in a veil of poisonous gases, a stark reminder of the consequences of unchecked pollution. These hazardous emissions, originating from various sources, pose significant risks to public health and the environment. As they linger in the air, they serve as a poignant call to action for effective measures to mitigate pollution and safeguard the well-being of communities. Urgent efforts are imperative to address the root causes of this looming threat and ensure a cleaner, healthier future for all inhabitants of the city. The acrid scent of pollutants hangs heavy, choking the vitality of urban life. In the shadow of this toxic cloud, the imperative for sustainable practices and environmental stewardship becomes ever more pressing.</p>"
            clickback={topicTransition}
          />

          <Content
            tag="Process Flowchart"
            image="/images/3.png"
            caption="the process flowchart of our whole project."
            text="We pride ourselves on presenting to you an innovative, highly-accurate and user-friendly solution to track, analyze, and mitigate carbon emissions caused by individuals using Artificial Intelligence. "
            long="<p>The process flowchart for a carbon management project begins with comprehensive carbon footprint assessment. This includes identifying sources of emissions and quantifying their impact. Next, strategies for emission reduction and mitigation are developed, tailored to the specific needs and opportunities of the project. Implementation follows, with measures such as energy efficiency improvements, renewable energy adoption, and carbon offsetting initiatives. Continuous monitoring and evaluation ensure effectiveness and guide adjustments, ensuring a holistic approach towards carbon neutrality and sustainable practices.</p>"
            clickback={topicTransition}
          />

          <Content
            tag="PREVENT CARBON EMISSION"
            image="/images/4.png"
            caption="UN SDGs prevalent in our project."
            text="Our system is built upon a foundation of meticulously curated data and advanced algorithmic techniques, ensuring the highest standards of accuracy and reliability. "
            long="<p>UN SDG 3: Good Health and Well-being - Promotes access to healthcare, disease prevention, and mental health support, ensuring all individuals can lead healthy lives.<br><br>

            UN SDG 7: Affordable and Clean Energy - Advocates for sustainable energy sources, aiming to provide reliable and clean electricity to all, while fostering innovation in renewable energy technologies.<br><br>
            
            UN SDG 11: Sustainable Cities and Communities - Focuses on creating inclusive, safe, resilient, and sustainable urban environments, with accessible public transportation, green spaces, and affordable housing.<br><br>
            
            UN SDG 12: Responsible Consumption and Production - Encourages efficient resource use, waste reduction, and sustainable practices throughout the production and consumption lifecycle, promoting economic growth while minimizing environmental impacts.<br><br>
            
            UN SDG 13: Climate Action - Urges global cooperation to combat climate change and its impacts, through mitigation measures, adaptation strategies, and raising awareness about the importance of environmental conservation.<br><br>
            
            UN SDG 15: Life on Land - Aims to protect, restore, and sustainably manage terrestrial ecosystems, preserving biodiversity, combating desertification, and ensuring the sustainable use of land resources for current and future generations.</p>"
            clickback={topicTransition}
          />

          <Content
            tag="CARELESS EMISSIONS"
            image="/images/5.jpeg"
            caption="Carbon Dioxide emitted by factories."
            text="Whether you're an individual seeking to reduce your environmental impact or an organization striving for sustainability, our platform offers actionable insights and solutions to meet your carbon management needs."
            long="<p>Factories emit carbon dioxide, a significant contributor to global warming, through various industrial processes. These emissions result from the combustion of fossil fuels such as coal, oil, and natural gas for energy production and manufacturing activities. The release of carbon dioxide into the atmosphere exacerbates climate change, leading to adverse environmental impacts such as rising temperatures, sea-level rise, and extreme weather events. Efforts to reduce factory emissions involve implementing cleaner technologies, improving energy efficiency, and transitioning to renewable energy sources, crucial steps towards mitigating climate change and building a sustainable future.These emissions underscore the urgent need for stringent regulations and sustainable practices within industrial sectors. Collaborative efforts among governments, industries, and communities are essential to curb emissions and mitigate the detrimental effects of climate change on both local and global scales.</p>"
            clickback={topicTransition}
          />
        </div>

        <div className={styles.dapad}></div>
      </main>
    </>
  );
}

export default HomePage;
