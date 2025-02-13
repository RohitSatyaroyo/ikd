import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import Footer from "./components/Footer";

const industryContent = {
  Photography: {
    title: "Digital Marketing for Photographers",
    description:
      "Grow your photography business by connecting with your audience effectively. As a leading digital marketing agency, we tailor strategies to help you showcase your talent and attract potential clients.",
    features: [
      "SEO for Photographers: Optimize your website to rank higher and attract organic traffic.",
      "Targeting Local and Niche Clients: Connect with clients looking for specific photography services.",
      "Engaging with Audiences: Build a strong social media presence to showcase your portfolio.",
      "Content Marketing: Share high-quality blogs, videos, and infographics to highlight your expertise.",
      "Customer Testimonials: Leverage positive reviews to build trust and credibility.",
      "Creating an Attractive Online Portfolio: Design professional websites and profiles to leave a lasting impression.",
      "Social Media and Google Ads: Run targeted campaigns to maximize reach and generate leads.",
    ],
    images: [
      "https://inklik.com/wp-content/uploads/2021/05/photography-1.png",
      "https://inklik.com/wp-content/uploads/2021/05/photography-banner.jpg",
    ],
    faq: [
      {
        question: "Why is digital marketing important for photographers?",
        answer:
          "Digital marketing helps photographers showcase their portfolio to a larger audience, connect with potential clients, and establish their brand online effectively.",
      },
      {
        question: "How can SEO benefit photography businesses?",
        answer:
          "SEO ensures your website ranks higher on search engines, making it easier for potential clients to find your photography services organically.",
      },
      {
        question: "What is the role of social media in photography marketing?",
        answer:
          "Social media platforms like Instagram and Facebook allow photographers to display their work, engage with audiences, and generate leads through targeted campaigns.",
      },
      {
        question: "How does Instagram marketing help photographers?",
        answer:
          "Yes, paid ads on platforms like Google and Facebook target specific audiences, ensuring your services reach potential clients quickly and effectively.",
      },
       {
        question: "Can paid ads help photographers get more clients?",
        answer:
          "Instagram is a visual platform where photographers can share their portfolio, reach a niche audience, and use tools like Stories, Reels, and ads to attract clients.",
      },
       {
    question: "How often should photographers post on Instagram?",
    answer:
      "Photographers should post consistently, at least 3–4 times a week, to maintain engagement and keep their audience updated.",
  },
  {
    question: "What types of Instagram content work best for photographers?",
    answer:
      "High-quality photos, behind-the-scenes videos, client testimonials, before-and-after edits, Reels, and Stories showcasing your process work best.",
  },
  {
    question: "Why is local SEO important for photographers?",
    answer:
      "Local SEO helps photographers rank in local search results, making it easier for nearby clients to find and hire their services.",
  },
  {
    question: "How can hashtags improve Instagram reach for photographers?",
    answer:
      "Relevant hashtags improve content visibility, helping photographers reach a broader audience interested in their niche.",
  },
  {
    question: "What role does blogging play in photography marketing?",
    answer:
      "Blogging helps photographers share expertise, improve SEO rankings, and build trust with potential clients by showcasing their knowledge and experience.",
  },
     
    ],
  },
  EventManagement:{
  title: "Digital Marketing for Event Planners",
  description:
    "Elevate your event planning business by leveraging tailored digital marketing strategies. As a leading agency, we focus on creating a strong online presence, increasing bookings, and connecting with your ideal audience.",
  features: [
    "SEO for Event Planners: Optimize your website to rank higher and attract organic traffic.",
    "Social Media Optimization (SMO): Enhance visibility by building a strong online community on platforms like Instagram and Facebook.",
    "PPC Campaigns: Generate immediate leads through targeted paid ads.",
    "Content Marketing: Create engaging blogs, videos, and infographics to showcase expertise.",
    "Instagram Marketing: Use visually appealing Reels, Stories, and carousel posts to captivate your audience.",
    "Building Brand Awareness: Develop creative campaigns that establish trust in your event planning services.",
    "Engaging with Clients: Foster long-term relationships through email marketing and interactive social media.",
    "Local SEO: Attract nearby clients by ranking higher in local search results.",
    "Pinterest Marketing: Share inspiration boards and event themes to attract clients with unique ideas.",
  ],
  faq: [
    {
      question: "Why is digital marketing essential for event planners?",
      answer:
        "Digital marketing helps event planners reach their target audience, promote their services, and increase bookings through online platforms effectively.",
    },
    {
      question: "How can SEO help event planners attract more clients?",
      answer:
        "SEO ensures your website ranks higher on search engines, making it easier for people searching for event planning services to find you.",
    },
    {
      question: "What role does Instagram marketing play for event planners?",
      answer:
        "Instagram allows event planners to showcase their work, engage with potential clients, and attract leads using visually appealing content like Reels, Stories, and carousel posts.",
    },
    {
      question: "How can paid ads benefit event planners?",
      answer:
        "Paid ads on platforms like Google and Facebook help event planners reach a targeted audience, generate leads, and increase bookings.",
    },
    {
      question: "Can event planners benefit from local SEO?",
      answer:
        "Yes, local SEO helps event planners rank higher in local search results, making it easier for nearby clients to find and hire them.",
    },
    {
      question: "How can event planners use hashtags effectively on Instagram?",
      answer:
        "Using relevant and trending hashtags increases the reach of posts, helping event planners connect with people interested in event services.",
    },
    {
      question: "Can Instagram Stories help in getting more leads for event planners?",
      answer:
        "Yes, Instagram Stories provide an interactive way to showcase your work, share testimonials, and use polls or question stickers to engage potential clients.",
    },
    {
      question: "How can testimonials and reviews improve an event planner’s digital presence?",
      answer:
        "Positive testimonials and reviews build trust and credibility, encouraging new clients to choose your event planning services.",
    },
    {
      question: "Can Pinterest be useful for event planners?",
      answer:
        "Absolutely! Pinterest is a great platform for sharing event inspiration boards, showcasing themes, and attracting clients looking for unique ideas.",
    },
    {
      question: "How long does it take for digital marketing efforts to show results?",
      answer:
        "Results vary depending on the strategy, but consistent efforts in SEO, social media, and paid ads can show noticeable improvements within 3–6 months.",
    },
  ],
},
  Healthcare:{
  title: "Digital Marketing for Healthcare Providers",
  description:
    "Expand your healthcare business with tailored digital marketing strategies. As a leading digital marketing agency, we help healthcare providers connect with patients, build trust, and grow their online presence effectively.",
  features: [
    "SEO for Healthcare Providers: Optimize your website to rank higher and attract more organic traffic.",
    "Targeting Local and National Patients: Implement campaigns to reach both nearby and distant patients.",
    "Building Trust Through Social Media: Engage with patients and create a positive brand image on platforms like Facebook and Instagram.",
    "Content Marketing: Share informative blogs, videos, and health tips to educate and build authority.",
    "Showcasing Patient Testimonials: Use reviews and success stories to enhance credibility.",
    "Creating an Impressive Online Profile: Develop a user-friendly website and strong profiles on health directories.",
    "Paid Ads on Facebook and Google: Use targeted ad campaigns to drive patient inquiries and conversions.",
    "Local SEO: Optimize your online presence for location-based searches to attract nearby patients.",
    "Video Content Marketing: Use videos to explain procedures, share testimonials, and provide health advice effectively.",
    "Online Reputation Management: Maintain positive reviews and manage feedback to build trust with potential patients.",
  ],
  faq: [
    {
      question: "Why is digital marketing important for the healthcare industry?",
      answer:
        "Digital marketing helps healthcare providers reach a broader audience, build trust, and showcase their expertise. It enables better communication with patients and increases visibility online.",
    },
    {
      question: "How can SEO benefit healthcare providers?",
      answer:
        "SEO helps your website rank higher on search engines, making it easier for patients to find your practice. It boosts visibility and drives organic traffic to your website, resulting in more patient inquiries.",
    },
    {
      question: "How can Instagram marketing help healthcare providers?",
      answer:
        "Instagram marketing helps showcase services, share patient testimonials, post health tips, and build an authentic brand presence. Visual content like images and videos resonates well with the audience on Instagram.",
    },
    {
      question: "How do I optimize my healthcare website for SEO?",
      answer:
        "Focus on keyword research, creating valuable content, improving page load speed, and ensuring mobile responsiveness. Incorporate local SEO to target nearby patients.",
    },
    {
      question: "Can social media help in patient acquisition?",
      answer:
        "Yes, social media platforms help in patient acquisition by targeting specific demographics, sharing success stories, providing health advice, and engaging potential patients directly.",
    },
    {
      question: "How can I build an online reputation for my healthcare practice?",
      answer:
        "Online reputation management (ORM) helps you maintain positive reviews and respond to patient feedback. Encouraging satisfied patients to leave reviews on platforms like Google and Healthgrades can improve your practice’s online reputation.",
    },
    {
      question: "What is the role of video content in healthcare marketing?",
      answer:
        "Videos are engaging and help explain medical concepts or procedures clearly. Patient testimonials, informational videos, and health advice videos help build trust and educate patients about your services.",
    },
    {
      question: "How can I increase local SEO for my healthcare business?",
      answer:
        "Claim your Google My Business profile, optimize your website for local keywords, and encourage patient reviews. Adding location-based content will also help improve visibility in local search results.",
    },
    {
      question: "How important are patient testimonials in digital marketing?",
      answer:
        "Patient testimonials are crucial in digital marketing as they build trust and credibility. Positive reviews and stories from satisfied patients influence potential patients’ decisions to choose your services.",
    },
    {
      question: "How do I measure the success of my healthcare marketing campaigns?",
      answer:
        "Use tools like Google Analytics to track website traffic, conversions, and keyword rankings. On social media, measure engagement rates, reach, and follower growth. Tracking lead generation from PPC campaigns is also crucial.",
    },
  ],
},
  InteriorDesign:{
  title: "Digital Marketing for Interior Designers",
  description:
    "Elevate your interior design business with tailored digital marketing solutions. As a leading agency, we help you showcase your creativity, connect with clients, and grow your business effectively.",
  features: [
    "SEO for Interior Designers: Optimize your website to rank for key terms like 'luxury interiors' and 'home decor ideas.'",
    "Targeting Local and Global Clients: Reach clients nearby or worldwide through tailored campaigns.",
    "Social Media Engagement: Showcase your designs on platforms like Instagram, Pinterest, and Facebook to attract clients.",
    "Creative Content Marketing: Share blogs, videos, and infographics to inspire and educate your audience.",
    "Client Testimonials: Build trust by showcasing positive client experiences and success stories.",
    "Professional Online Presence: Create stunning websites and profiles to highlight your expertise.",
    "Facebook Ads and Google Ads: Attract potential clients with targeted advertising campaigns.",
    "Visual Content Strategy: Use before-and-after photos, 360-degree room tours, and design tips to captivate your audience.",
    "Video Content Marketing: Include project tours, design tips, and client testimonials to increase engagement.",
    "Pinterest Marketing: Share inspiration boards and creative design ideas to attract niche audiences.",
  ],
  faq: [
    {
      question: "What is digital marketing for interior designers?",
      answer:
        "Digital marketing for interior designers involves using online platforms like social media, search engines, and email to showcase designs, attract clients, and grow your business.",
    },
    {
      question: "Why is Instagram important for interior designers?",
      answer:
        "Instagram is highly visual, making it ideal for showcasing design portfolios, inspiring potential clients, and building brand awareness.",
    },
    {
      question: "How can SEO benefit my interior design business?",
      answer:
        "SEO ensures your website ranks higher on search engines, making it easier for potential clients to find your services online.",
    },
    {
      question: "What are the best social media platforms for interior designers?",
      answer:
        "Instagram, Pinterest, and Facebook are the most effective platforms for interior designers to showcase their work and connect with clients.",
    },
    {
      question: "How does content marketing help interior designers?",
      answer:
        "Content marketing builds authority and attracts clients by sharing blogs, videos, and infographics about design trends, tips, and case studies.",
    },
    {
      question: "What type of content works best for interior designers on social media?",
      answer:
        "Visual content like before-and-after photos, 360-degree room tours, design tips, and behind-the-scenes stories perform well on social media.",
    },
    {
      question: "How do Facebook and Google Ads help interior designers?",
      answer:
        "These ads target specific audiences searching for design services, increasing visibility and generating leads.",
    },
    {
      question: "How important are customer testimonials for digital marketing?",
      answer:
        "Customer testimonials build trust and credibility, influencing potential clients to choose your services.",
    },
    {
      question: "Should I invest in video content for marketing?",
      answer:
        "Yes, videos like project tours, design tips, and client testimonials drive higher engagement and attract more leads.",
    },
  ],
},
  Immigration:{
  title: "Digital Marketing for Immigration Consultants",
  description:
    "Grow your immigration consultancy with tailored digital marketing strategies. As a leading agency, we help you reach clients locally and globally, build trust, and showcase your expertise effectively.",
  features: [
    "SEO for Immigration Consultants: Optimize your website to rank for keywords like 'immigration services' and 'visa consultants near me.'",
    "Targeting Local and International Clients: Use strategies to connect with both nearby and global clients.",
    "Social Media Engagement: Build trust and connect with potential clients through Facebook, Instagram, and LinkedIn.",
    "Educational Content Marketing: Share blogs, videos, and infographics about immigration policies, visa processes, and success stories to attract and inform clients.",
    "Customer Testimonials: Highlight client success stories to build credibility and encourage trust.",
    "Professional Online Presence: Create an impressive website and online profiles to showcase services and expertise.",
    "Facebook Ads and Google Ads: Run targeted campaigns to connect with individuals actively seeking immigration services.",
    "LinkedIn Marketing: Engage with professionals and build credibility in the immigration industry.",
    "Geo-Targeted Marketing: Use ads and multilingual content to attract international clients.",
    "Online Reputation Management: Maintain and showcase positive testimonials to build trust and credibility.",
  ],
  faq: [
    {
      question: "Why is digital marketing important for immigration consultants?",
      answer:
        "Digital marketing helps immigration consultants reach potential clients online, showcase their expertise, and build trust through targeted campaigns.",
    },
    {
      question: "How can Instagram marketing benefit my immigration consultancy?",
      answer:
        "Instagram is a great platform to share success stories, educational content, and client testimonials, building trust and attracting potential clients.",
    },
    {
      question: "What type of content should immigration consultants post on social media?",
      answer:
        "Post client success stories, immigration tips, updates on visa regulations, FAQs, and infographics to engage and educate your audience.",
    },
    {
      question: "Can Facebook Ads help my immigration consultancy?",
      answer:
        "Yes, Facebook Ads can target specific demographics and locations, driving qualified leads to your business.",
    },
    {
      question: "How long does it take to see results from SEO for immigration consultants?",
      answer:
        "SEO results typically take 3-6 months, but it offers long-term benefits by improving your organic search rankings.",
    },
    {
      question: "Why are client testimonials important for digital marketing?",
      answer:
        "Client testimonials build trust and credibility, showcasing your success in helping others achieve their immigration goals.",
    },
    {
      question: "How can LinkedIn help immigration consultants?",
      answer:
        "LinkedIn helps you connect with professionals, share updates, and establish credibility in the immigration industry.",
    },
    {
      question: "How can I target international clients with digital marketing?",
      answer:
        "Use geo-targeted ads, multilingual content, and SEO strategies to reach clients in different countries.",
    },
    {
      question: "Is a website necessary for my immigration business, or is social media enough?",
      answer:
        "A website is essential for credibility and detailed information, while social media complements it by driving traffic and engagement.",
    },
    {
      question: "Why should I hire a digital marketing agency for my immigration business?",
      answer:
        "An agency offers expertise in SEO, social media, content marketing, and ads, delivering tailored strategies and faster results.",
    },
  ],
},
  NGO:{
  title: "Digital Marketing for NGOs",
  description:
    "Empower your NGO with tailored digital marketing strategies. As a leading agency, we help you raise awareness, engage supporters, and amplify your cause effectively through online platforms.",
  features: [
    "SEO for NGOs: Optimize your website with relevant keywords to rank higher on search engines and attract donors, volunteers, and supporters.",
    "Targeting Local and Global Communities: Connect with local supporters while expanding your reach to a global audience.",
    "Social Media Engagement: Build trust and promote campaigns effectively on platforms like Facebook, Instagram, and LinkedIn.",
    "Educational Content Marketing: Share impactful videos, blogs, and infographics to raise awareness and inspire action.",
    "Success Stories and Testimonials: Showcase your impact and the effectiveness of your efforts through real stories.",
    "Professional Online Presence: Create a well-designed website and optimize online profiles to communicate your mission and attract support.",
    "Facebook Ads and Google Ads for NGOs: Run targeted ad campaigns to amplify outreach, promote fundraisers, and attract donors and volunteers.",
    "Interactive Campaigns: Use live sessions, feedback requests, and interactive posts to keep audiences engaged.",
    "Hashtag Campaigns: Leverage trending and relevant hashtags to increase visibility on platforms like Instagram.",
    "Blogging for Awareness: Maintain a blog to share updates, educate audiences, and improve SEO.",
  ],
  faq: [
    {
      question: "Why is digital marketing important for NGOs?",
      answer:
        "Digital marketing helps NGOs create awareness, engage supporters, attract donors, and amplify their cause through effective online campaigns.",
    },
    {
      question: "How can content marketing help NGOs?",
      answer:
        "Content marketing allows NGOs to share blogs, videos, and infographics that educate and inspire audiences, driving engagement and support for their cause.",
    },
    {
      question: "What type of content should NGOs share on social media?",
      answer:
        "Share success stories, behind-the-scenes efforts, campaign updates, volunteer opportunities, and educational content about your cause.",
    },
    {
      question: "How can Facebook Ads benefit NGOs?",
      answer:
        "Facebook Ads allow NGOs to target specific audiences, increasing visibility for campaigns, events, and donation drives.",
    },
    {
      question: "Why are hashtags important for NGOs on Instagram?",
      answer:
        "Hashtags increase the visibility of your posts, helping you reach a broader audience interested in your cause.",
    },
    {
      question: "Why are success stories important for digital marketing?",
      answer:
        "Success stories build trust and inspire confidence in your organization's impact, encouraging more support from donors and volunteers.",
    },
    {
      question: "How can NGOs engage their audience on social media?",
      answer:
        "NGOs can engage their audience by sharing interactive content, responding to comments, hosting live sessions, and asking for feedback.",
    },
    {
      question: "Should NGOs have a blog on their website?",
      answer:
        "Yes, a blog helps NGOs share updates, educate their audience, and improve SEO by regularly publishing relevant content.",
    },
    {
      question: "Why should NGOs hire a digital marketing agency?",
      answer:
        "A digital marketing agency brings expertise in SEO, social media, content marketing, and ads, ensuring faster and more effective results.",
    },
  ],
},
  Education:{
  title: "Digital Marketing for Education Consultants",
  description:
    "Enhance your education business with tailored digital marketing strategies. As a leading agency, we help you connect with students, build trust, and grow your online presence effectively.",
  features: [
    "SEO for Education Consultants: Optimize your website with relevant keywords to ensure students and parents can easily find your services.",
    "Targeting Local and International Students: Connect with both nearby and global audiences seeking educational guidance and courses.",
    "Social Media Engagement: Build trust and showcase expertise through platforms like Instagram, Facebook, and LinkedIn.",
    "Educational Content Marketing: Share valuable blogs, videos, and infographics on topics such as exam tips, course selection, and career guidance.",
    "Client Testimonials: Highlight success stories from students and parents to build credibility and trust.",
    "Professional Online Presence: Develop a professional website and optimize online profiles to increase visibility.",
    "Facebook Ads and Google Ads: Run targeted ad campaigns to attract students searching for educational programs and guidance.",
    "Interactive Social Media Campaigns: Use polls, Q&A sessions, and educational tips to keep students engaged.",
    "Localized Marketing: Use geo-targeted ads and multilingual content to appeal to international students.",
    "Content Personalization: Tailor your messaging based on student interests, goals, and needs to create a more engaging experience.",
  ],
  faq: [
    {
      question: "How can digital marketing help my education consultancy grow?",
      answer:
        "Digital marketing helps you reach a larger audience, improve brand awareness, and engage potential students by utilizing SEO, content, and social media strategies.",
    },
    {
      question: "How do I choose the right keywords for SEO in education marketing?",
      answer:
        "Choose keywords that are relevant to your courses, services, and target audience. Focus on long-tail keywords like 'best study abroad consultants' for better targeting.",
    },
    {
      question: "How can I improve my education consultancy’s website to attract more traffic?",
      answer:
        "Focus on user experience (UX), mobile optimization, fast load times, and high-quality educational content to enhance the user experience and improve SEO.",
    },
    {
      question: "What is the best way to engage students on social media?",
      answer:
        "Use interactive posts, polls, educational tips, success stories, and Q&A sessions to keep students engaged and encourage participation on social media platforms.",
    },
    {
      question: "How can I use Instagram Stories to promote my education business?",
      answer:
        "Instagram Stories can highlight student success stories, showcase day-to-day activities, run polls, and share important updates, keeping your audience informed and engaged.",
    },
    {
      question: "Is it necessary to use both organic and paid digital marketing strategies for education?",
      answer:
        "Yes, combining organic (SEO, social media posts) and paid (Google Ads, Facebook Ads) strategies can enhance visibility and drive faster, targeted results.",
    },
    {
      question: "How can education consultants attract international students through digital marketing?",
      answer:
        "Use geo-targeted ads, provide localized content for different countries, and optimize your website with multilingual support to appeal to international students.",
    },
    {
      question: "How does content personalization work in education digital marketing?",
      answer:
        "Personalized content tailors your messaging based on student interests, needs, and goals, creating a more engaging and relevant experience for each prospective student.",
    },
    {
      question: "How can I use social proof to build trust with prospective students?",
      answer:
        "Social proof like testimonials, success stories, and reviews from previous students can help establish credibility and influence prospective students' decisions.",
    },
    {
      question: "How can digital marketing help me maintain long-term relationships with students?",
      answer:
        "Stay in touch with students through email marketing, provide ongoing educational resources, and engage them with updates and relevant information on social media.",
    },
  ],
},
   ArtAndDecor:{
  title: "Digital Marketing for Art & Decor Businesses",
  description:
    "Transform your Art & Decor or Furnishing business with tailored digital marketing strategies. As a leading agency, we help you connect with customers, showcase your unique offerings, and increase sales in a competitive market.",
  features: [
    "SEO for Art & Decor/Furnishing: Optimize your website with targeted keywords to attract customers searching for furniture, home decor, and design inspiration.",
    "Targeting Local and Global Audiences: Reach local customers and expand to global markets for greater visibility.",
    "Social Media Engagement: Share stunning visuals and creative projects on platforms like Instagram, Pinterest, and Facebook to engage your audience.",
    "Content Marketing: Create blogs, videos, and infographics showcasing design trends, DIY tips, and innovative home styling ideas.",
    "Customer Testimonials: Highlight positive reviews and success stories to build credibility and trust in your brand.",
    "Professional Online Presence: Develop a visually appealing website and optimized online profiles to showcase your offerings effectively.",
    "Facebook Ads and Google Ads: Run targeted ad campaigns to connect with interior designers, homeowners, and decorators searching for your products.",
    "Pinterest Marketing: Use Pinterest to share design ideas, DIY projects, and product images to increase traffic and brand exposure.",
    "Branding on Social Media: Maintain consistent colors, tone, and messaging across platforms to build trust and recognition.",
    "Analytics and Performance Tracking: Use tools like Google Analytics and social media insights to measure campaign success and ROI.",
  ],
  faq: [
    {
      question: "How can digital marketing help my Art & Decor business grow?",
      answer:
        "Digital marketing strategies like SEO, social media marketing, and content creation can help your Art & Decor business reach a larger audience, boost brand visibility, and drive more sales.",
    },
    {
      question: "What type of content should I share on Instagram to attract customers?",
      answer:
        "Share high-quality images of your products, design projects, before-and-after transformations, customer reviews, and tutorials to engage and inspire your audience.",
    },
    {
      question: "How can content marketing help in the Art & Decor industry?",
      answer:
        "By creating engaging content such as blogs, videos, and how-to guides, you can educate your audience, promote your products, and position your brand as a leader in the industry.",
    },
    {
      question: "Should I invest in paid advertising on social media for my Art & Decor business?",
      answer:
        "Yes, paid ads on platforms like Instagram and Facebook can help you reach a targeted audience, promote your products, and increase sales by targeting people who are interested in home decor and furnishings.",
    },
    {
      question: "How can I use Pinterest for my Furnishing business?",
      answer:
        "Pinterest is ideal for sharing home decor ideas, DIY projects, and design inspiration. Pinning images of your products can drive traffic to your website and increase brand exposure.",
    },
    {
      question: "What role do customer reviews and testimonials play in my business’s digital marketing?",
      answer:
        "Customer reviews and testimonials provide social proof, build trust, and influence potential customers in their decision-making process, especially when purchasing high-end or unique Art & Decor items.",
    },
    {
      question: "How important is branding on social media for Art & Decor businesses?",
      answer:
        "Brand consistency across social media platforms helps build recognition and trust. Use consistent colors, tone, and messaging to create a cohesive brand presence.",
    },
    {
      question: "What should I include in my Art & Decor website for better user experience?",
      answer:
        "Ensure your website is visually appealing, easy to navigate, mobile-friendly, and includes detailed product descriptions, high-quality images, and a secure checkout process.",
    },
    {
      question: "How can I use Google Ads to attract more customers for my Furnishing business?",
      answer:
        "Create targeted Google Ads campaigns with specific keywords related to your products, like 'luxury furniture' or 'modern home decor,' to reach people actively searching for similar items.",
    },
    {
      question: "How do I track the success of my digital marketing campaigns in the Art & Decor industry?",
      answer:
        "Use tools like Google Analytics, Facebook Insights, and Instagram Insights to track metrics such as website traffic, social media engagement, conversions, and ROI to evaluate the success of your campaigns.",
    },
  ],
},
  Manufacturing:{
  title: "Digital Marketing for Manufacturing Businesses",
  description:
    "Boost your manufacturing business with tailored digital marketing strategies. As a leading agency, we help you increase visibility, connect with customers, and grow your sales in the competitive market.",
  features: [
    "SEO for Manufacturing Units: Optimize your website with relevant industry keywords to attract customers searching for manufacturing solutions.",
    "Targeting Local and Global Customers: Connect with local industries and expand your reach to global markets.",
    "Building a Positive Online Image: Create a strong brand presence by engaging with customers on social media platforms.",
    "Content Marketing: Share informative blogs, videos, and infographics showcasing your expertise, products, and processes.",
    "Customer Testimonials: Highlight positive feedback from satisfied clients to build trust and credibility.",
    "Professional Online Presence: Develop a user-friendly website showcasing your products, services, and capabilities.",
    "Facebook Ads and Google Ads: Run targeted ad campaigns to generate leads and increase conversions.",
    "LinkedIn Marketing: Use LinkedIn for B2B networking, sharing industry insights, and engaging with decision-makers.",
    "Social Media Engagement: Share behind-the-scenes content, product demos, and industry updates to engage your audience.",
    "Pinterest Marketing: Showcase visual products, infographics, and project images to drive traffic and inspire your audience.",
  ],
  faq: [
    {
      question: "How can digital marketing help my manufacturing unit grow?",
      answer:
        "Digital marketing can enhance your visibility, reach more customers, build a strong online presence, and increase sales by targeting specific industries and potential clients.",
    },
    {
      question: "How can social media marketing benefit my manufacturing business?",
      answer:
        "Social media marketing helps increase brand awareness, build trust with potential clients, and engage with your audience through relevant content, comments, and messages on platforms like Facebook and Instagram.",
    },
    {
      question: "What type of content works best for manufacturing businesses on social media?",
      answer:
        "High-quality images of your products, behind-the-scenes videos, client testimonials, product demos, and industry insights all work well in engaging your audience and showcasing your expertise.",
    },
    {
      question: "Can content marketing help my manufacturing unit gain more customers?",
      answer:
        "Yes, by creating informative content like blogs, whitepapers, case studies, and videos, you can educate potential customers about your manufacturing capabilities and drive leads.",
    },
    {
      question: "How can I use LinkedIn to promote my manufacturing business?",
      answer:
        "LinkedIn is ideal for B2B marketing. Post industry-related content, engage with potential clients, and join manufacturing and engineering groups to increase visibility and network with decision-makers.",
    },
    {
      question: "How can I build trust with my audience through content marketing?",
      answer:
        "Share customer success stories, provide valuable insights into your manufacturing processes, and offer practical tips and solutions that address the needs of your target audience.",
    },
    {
      question: "What role do customer testimonials play in digital marketing for manufacturing units?",
      answer:
        "Customer testimonials provide social proof, building credibility and trust. Sharing satisfied client stories and product feedback can significantly influence potential customers’ purchasing decisions.",
    },
    {
      question: "How can social media contests and giveaways help my manufacturing business?",
      answer:
        "Running contests or giveaways on social media can increase brand visibility, attract new followers, and engage your existing audience by encouraging participation and sharing.",
    },
    {
      question: "How can I use Pinterest for my manufacturing business?",
      answer:
        "Pinterest is ideal for showcasing visual products, infographics, or design ideas. Pin your products, case studies, and project images to inspire your audience and drive traffic to your website.",
    },
    {
      question: "How do I convert social media followers into customers?",
      answer:
        "Encourage followers to take action by providing clear calls-to-action (CTAs), offering promotions or discounts, sharing customer testimonials, and creating valuable content that resonates with their needs.",
    },
  ],
},
  FoodAndBeverages:{
  title: "Digital Marketing for Food & Beverages Businesses",
  description:
    "Drive growth for your Food & Beverages business with tailored digital marketing strategies. As a leading agency, we help you connect with your audience, showcase your offerings, and increase sales in a competitive market.",
  features: [
    "SEO for Food & Beverages: Optimize your website with industry-specific keywords to rank higher on search engines and attract potential customers.",
    "Targeting Local and Niche Audiences: Reach local food lovers, niche markets, and global customers aligned with your brand’s offerings.",
    "Engaging with Your Audience: Build connections through engaging content, responding to customer reviews, and maintaining a consistent online presence.",
    "Content Marketing: Share recipes, product usage ideas, food styling tips, and videos showcasing your brand through blogs, infographics, and tutorials.",
    "Social Media Marketing: Promote your brand on Instagram, Facebook, and Pinterest with visually appealing posts, live events, and Stories.",
    "Customer Testimonials and Reviews: Leverage positive feedback to build trust and encourage new customers to try your products.",
    "Professional Website and Online Presence: Develop a visually attractive and user-friendly website showcasing your menu, product range, and offerings.",
    "Facebook Ads and Google Ads: Run targeted campaigns to generate leads, promote products, and increase sales.",
    "Influencer Marketing: Collaborate with food bloggers and influencers to expand your brand's reach and credibility.",
    "Pinterest Marketing: Share visually appealing food photography, recipes, and promotions to drive traffic and increase engagement.",
  ],
  faq: [
    {
      question: "How can digital marketing benefit my food and beverages business?",
      answer:
        "Digital marketing enhances your online visibility, engages your target audience, and drives sales by showcasing your products to food lovers and potential customers.",
    },
    {
      question: "What type of content works best for food and beverage brands on Instagram?",
      answer:
        "High-quality photos, recipe videos, behind-the-scenes content, user-generated content, and promotional campaigns perform best for food and beverage brands on Instagram.",
    },
    {
      question: "How can social media help grow my food business?",
      answer:
        "Social media allows you to reach a wider audience, engage with customers, promote new products, and build brand loyalty with visually appealing and engaging posts.",
    },
    {
      question: "Can influencer marketing help my food brand?",
      answer:
        "Yes, partnering with food bloggers and influencers can increase your brand’s reach and credibility, encouraging more people to try your products.",
    },
    {
      question: "What role do customer reviews play in digital marketing for food businesses?",
      answer:
        "Customer reviews build trust and credibility. Sharing positive feedback on social media or your website can influence potential customers to choose your products or services.",
    },
    {
      question: "How can I use Pinterest for my food brand?",
      answer:
        "Pinterest is perfect for sharing visually appealing food photography, recipes, meal ideas, and product promotions, driving traffic to your website or blog.",
    },
    {
      question: "What are some effective social media strategies for food startups?",
      answer:
        "Leverage user-generated content, run contests, collaborate with influencers, and showcase your brand story through high-quality visuals and engaging captions.",
    },
    {
      question: "How can I attract local customers to my restaurant using digital marketing?",
      answer:
        "Use local SEO strategies, geo-targeted ads, Google My Business optimization, and social media campaigns promoting special offers or events.",
    },
    {
      question: "How can Instagram Stories help promote my food and beverage products?",
      answer:
        "Instagram Stories are great for sharing promotions, behind-the-scenes content, polls, and customer shoutouts, helping you engage directly with your audience.",
    },
    {
      question: "Should I run contests and giveaways on social media for my food brand?",
      answer:
        "Yes, contests and giveaways increase engagement, attract new followers, and encourage user participation, which helps boost brand visibility and loyalty.",
    },
  ],
},
  Finance:{
  title: "Digital Marketing for Financial Businesses",
  description:
    "Boost your financial business with tailored digital marketing strategies. As a leading agency, we help you connect with clients, build trust, and grow your brand in a competitive market.",
  features: [
    "SEO for Finance Businesses: Optimize your website with targeted financial keywords like 'best financial advisors' and 'investment planning' to attract relevant traffic.",
    "Targeting Local and Global Clients: Focus on connecting with local investors, global audiences, and businesses seeking financial solutions.",
    "Building Trust Through Thought Leadership: Share whitepapers, market insights, and blogs to position your brand as a trusted authority.",
    "Content Marketing: Educate and engage your audience with blogs, videos, and infographics about financial planning, investment strategies, and tax-saving tips.",
    "Social Media Marketing: Use platforms like LinkedIn, Twitter, and Facebook to share financial insights, updates, and tips.",
    "Customer Testimonials and Case Studies: Showcase client success stories to build credibility and attract potential clients.",
    "Professional Website and Online Profiles: Design an intuitive, professional website reflecting trustworthiness and providing easy access to your services.",
    "Paid Advertising: Run targeted campaigns on Facebook and Google to promote financial advice, wealth management, and investment opportunities.",
    "Influencer Marketing: Collaborate with financial influencers to expand your reach and credibility in personal finance.",
    "Webinars and Video Content: Host webinars and create videos explaining financial concepts, market updates, and success stories to engage your audience.",
  ],
  faq: [
    {
      question: "How can digital marketing help financial businesses grow?",
      answer:
        "Digital marketing helps financial businesses increase visibility, build trust, and attract the right clients by using SEO, social media, and paid ads effectively.",
    },
    {
      question: "Is Instagram an effective platform for promoting financial services?",
      answer:
        "Yes, Instagram can be used for sharing financial tips, success stories, infographics, and engaging with a younger audience interested in personal finance.",
    },
    {
      question: "How does SEO benefit finance businesses?",
      answer:
        "SEO improves your website’s visibility on search engines, making it easier for potential clients to find services like financial planning or investment advice.",
    },
    {
      question: "What type of content should finance businesses post on social media?",
      answer:
        "Finance businesses should post market updates, budgeting tips, investment guides, client success stories, and live Q&A sessions to engage their audience.",
    },
    {
      question: "How important are customer testimonials for financial businesses?",
      answer:
        "Customer testimonials build trust and credibility, showcasing the success stories of previous clients to attract new ones.",
    },
    {
      question: "How can LinkedIn be leveraged for financial marketing?",
      answer:
        "LinkedIn is ideal for targeting professionals and businesses by sharing industry insights, case studies, and building a network of potential clients.",
    },
    {
      question: "Can influencer marketing work for finance businesses?",
      answer:
        "Yes, collaborating with financial influencers can help build credibility and reach a larger audience interested in personal finance or investments.",
    },
    {
      question: "How can blogs benefit finance businesses?",
      answer:
        "Blogs can provide valuable information on financial topics, improve SEO rankings, and position your business as a thought leader in the industry.",
    },
    {
      question: "What type of videos should finance businesses create?",
      answer:
        "Create videos explaining complex financial concepts, answering FAQs, providing market updates, or sharing success stories to engage your audience.",
    },
    {
      question: "Can webinars be a part of digital marketing for finance businesses?",
      answer:
        "Yes, hosting webinars on financial topics helps establish authority, engage audiences, and generate leads for your business.",
    },
  ],
},
  RealEstate:{
  title: "Digital Marketing for Real Estate Businesses",
  description:
    "Boost your real estate business with tailored digital marketing strategies. As a leading agency, we help you attract leads, showcase properties, and grow your business in a competitive market.",
  features: [
    "SEO for Real Estate Businesses: Optimize your website with property-related keywords like 'buy homes in [location]' to rank higher on search engines and attract organic traffic.",
    "Targeting Local and International Clients: Reach local homebuyers and global audiences interested in properties in your region.",
    "Social Media Engagement: Build trust and connect with potential buyers and sellers on platforms like Instagram, Facebook, and LinkedIn.",
    "Content Marketing: Share videos of property tours, infographics on market trends, and blogs about buying tips or investment strategies to engage your audience.",
    "Customer Testimonials: Highlight success stories and client reviews to build credibility and trust among prospective clients.",
    "Professional Website and Online Profiles: Develop a mobile-responsive website showcasing property listings and providing an excellent user experience.",
    "Facebook Ads and Google Ads: Run targeted ad campaigns to reach potential buyers based on demographics, location, and interests.",
    "Video Marketing: Use property tour videos, market trend explanations, and testimonial videos to increase engagement and conversions.",
    "Lead Generation on Social Media: Generate leads by sharing engaging content, running targeted ads, and responding to inquiries on social media platforms.",
    "Performance Tracking: Monitor metrics like website traffic, social media engagement, lead generation, and ROI to evaluate the success of your campaigns.",
  ],
  faq: [
    {
      question: "How can digital marketing help real estate businesses?",
      answer:
        "Digital marketing helps real estate businesses attract more leads, increase property visibility, and connect with prospective buyers and sellers through online channels.",
    },
    {
      question: "How important is SEO for real estate websites?",
      answer:
        "SEO is crucial as it ensures that your website ranks higher on search engines, driving organic traffic and attracting potential buyers actively searching for real estate services.",
    },
    {
      question: "Should real estate businesses use Instagram for marketing?",
      answer:
        "Yes, Instagram is a great platform to showcase property listings, engage with followers, share client success stories, and create visual content that appeals to homebuyers.",
    },
    {
      question: "Can paid ads like Facebook and Google Ads help in real estate marketing?",
      answer:
        "Yes, Facebook and Google Ads allow you to target specific demographics, locations, and behaviors, making it easier to reach potential buyers looking for properties in your area.",
    },
    {
      question: "What kind of content should real estate businesses post on social media?",
      answer:
        "Real estate businesses should post property listings, home improvement tips, client success stories, market updates, and local community news to engage followers.",
    },
    {
      question: "How do Facebook Ads work for real estate businesses?",
      answer:
        "Facebook Ads allow you to target users based on interests, location, age, and more, ensuring that your ads reach the right potential buyers or sellers.",
    },
    {
      question: "Can I use social media for lead generation in real estate?",
      answer:
        "Yes, platforms like Facebook, Instagram, and LinkedIn can be used to generate leads by sharing engaging content, responding to inquiries, and running targeted ads.",
    },
    {
      question: "How do real estate businesses use video marketing?",
      answer:
        "Real estate businesses can use video marketing to give property tours, explain market trends, offer investment tips, and show testimonials, increasing audience engagement.",
    },
    {
      question: "How can customer reviews impact real estate marketing?",
      answer:
        "Positive reviews and testimonials build trust, influence potential clients' decisions, and improve your brand's credibility, leading to more leads and conversions.",
    },
    {
      question: "How can real estate businesses track the success of their digital marketing efforts?",
      answer:
        "Tracking metrics such as website traffic, lead generation, social media engagement, and ROI from paid ads allows real estate businesses to assess the success of their campaigns.",
    },
  ],
},
  Construction:{
  title: "Digital Marketing for Construction Companies",
  description:
    "Grow your construction business with tailored digital marketing strategies. As a leading agency, we help you connect with potential clients, showcase your projects, and build a strong online presence.",
  features: [
    "SEO for Construction Companies: Optimize your website with industry-specific and local keywords to rank higher on search engines and attract quality leads.",
    "Targeting Local and Distant Clients: Use location-based targeting to connect with local clients and those in other regions interested in construction projects.",
    "Social Media Engagement: Build trust and a positive brand image by engaging with clients on platforms like Instagram and Facebook.",
    "Content Marketing: Share videos, blogs, and infographics showcasing projects, providing insights into the construction process, and educating potential clients.",
    "Customer Testimonials: Highlight successful projects and satisfied customers to build credibility and trust.",
    "Professional Website and Online Profiles: Develop a user-friendly and visually appealing website that showcases services, past projects, and contact information.",
    "Facebook Ads and Google Ads: Run targeted ad campaigns to reach individuals searching for construction services and generate qualified leads.",
    "Video Marketing: Use video content to showcase project progress, explain processes, and provide quick construction tips.",
    "Blog Content for Construction: Share topics like industry trends, project tips, material selection, and case studies to establish expertise.",
    "Performance Tracking: Monitor metrics such as website traffic, lead generation, and social media engagement to evaluate campaign success.",
  ],
  faq: [
    {
      question: "How can digital marketing help the construction industry?",
      answer:
        "Digital marketing helps construction businesses build a strong online presence, attract more clients, and generate leads through SEO, social media, and targeted ads.",
    },
    {
      question: "Should construction companies use Instagram for marketing?",
      answer:
        "Yes, Instagram is an excellent platform for construction companies to showcase visually appealing projects, share behind-the-scenes content, and engage with potential clients.",
    },
    {
      question: "How does SEO improve lead generation for construction businesses?",
      answer:
        "SEO increases the visibility of your website in search engine results, driving more traffic and ultimately generating higher-quality leads from people actively searching for construction services.",
    },
    {
      question: "How does content marketing help construction businesses?",
      answer:
        "Content marketing helps construction companies educate potential clients, build trust, and establish expertise by sharing blog posts, videos, and other resources related to construction services.",
    },
    {
      question: "How can customer testimonials impact digital marketing for construction companies?",
      answer:
        "Customer testimonials build trust, increase credibility, and showcase the successful completion of projects, which can help influence potential clients to choose your construction services.",
    },
    {
      question: "How can Google Ads benefit construction businesses?",
      answer:
        "Google Ads enable construction companies to run targeted ads that appear when potential clients search for construction services, driving relevant traffic to your website.",
    },
    {
      question: "Can Instagram Stories be used for construction marketing?",
      answer:
        "Yes, Instagram Stories can be used to share behind-the-scenes moments, updates on ongoing projects, client testimonials, and quick tips related to construction, engaging your audience in real time.",
    },
    {
      question: "How can Facebook Ads be used for construction businesses?",
      answer:
        "Facebook Ads can target users based on their location, demographics, and interests, allowing construction companies to reach homeowners, property managers, or businesses in need of construction services.",
    },
    {
      question: "What type of content should be included in a construction company’s blog?",
      answer:
        "Construction blogs should include topics such as industry trends, project tips, material selection, maintenance advice, and case studies that show your expertise and help potential clients.",
    },
    {
      question: "What are the best social media platforms for construction companies?",
      answer:
        "Instagram, Facebook, LinkedIn, and Pinterest are the best social media platforms for construction companies, as they allow you to showcase projects, engage with clients, and share valuable content.",
    },
  ],
},
};

const FAQ = ({ faqs }) => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const filteredFaqs = faqs.filter((faq) =>
    faq.question.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="bg-gradient-to-br from-blue-50 via-white to-purple-50 py-20 px-4 sm:px-6 lg:px-8 min-h-screen">
      <div className="max-w-4xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 bg-[#75cd32] text-white rounded-full text-sm font-medium mb-4">
            FAQ
          </span>

          <h2 className="text-4xl md:text-5xl font-bold text-[#003366]">
            Frequently Asked Questions
          </h2>

          <p className="text-gray-600 max-w-2xl mx-auto text-lg mb-12">
            Find answers to common questions about digital marketing and how it
            can help your business grow.
          </p>

          {/* Search Bar */}
          <div className="relative max-w-xl mx-auto mb-12">
            <input
              type="text"
              placeholder="Search your question..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-4 pr-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300 bg-white/80 backdrop-blur-sm"
            />
          </div>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {filteredFaqs.map((faq, index) => (
            <div
              key={index}
              className="bg-[#003366] rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              <button
                onClick={() => toggleAccordion(index)}
                className="w-full text-left p-6 focus:outline-none"
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-white">{faq.question}</h3>
                </div>
              </button>
              <div
                className={`transition-all duration-300 ease-in-out ${
                  activeIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                } overflow-hidden`}
              >
                <p className="px-6 pb-6 text-white leading-relaxed">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>

        {/* No Results Message */}
        {filteredFaqs.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">
              No matching questions found. Try adjusting your search terms.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

const IndustryPage = () => {
  const { name } = useParams();
  const content = industryContent[name] || {};

   return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 via-white to-blue-50">
      {/* Header */}
      <header className="bg-gradient-to-r from-blue-700 via-indigo-600 to-violet-600 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <h1 className="text-3xl font-bold">{content.title || "Industry Page"}</h1>
          <a
            href="/"
            className="bg-white text-blue-600 px-6 py-2 rounded-full font-medium shadow-lg hover:shadow-xl hover:bg-blue-50 transition-all duration-300"
          >
            Get in Touch
          </a>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Description Section */}
        <div className="space-y-6 mb-12">
          <h2 className="text-4xl font-bold text-[#003366] leading-tight">
            {content.title || "Customized Solutions for Your Industry"}
          </h2>
          <p className="text-xl text-gray-700 leading-relaxed">{content.description}</p>
        </div>

        {/* Features Section */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-[#003366] mb-8">Key Features</h3>
          <ul className="space-y-4">
            {(content.features || []).map((feature, index) => (
              <li
                key={index}
                className="flex items-start space-x-4 bg-white p-4 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <span className="inline-block w-4 h-4 bg-[#75cd32] rounded-full mt-2"></span>
                <p className="text-lg text-gray-700">{feature}</p>
              </li>
            ))}
          </ul>
        </div>

        {/* FAQ Section */}
        {content.faq && <FAQ faqs={content.faq} />}
      </main>

      {/* Footer */}
    
    </div>
  )
};

export default IndustryPage;
