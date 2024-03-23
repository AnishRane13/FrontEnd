import React from 'react';

const CardContainer = () => {
  const cardsData = [
    {
      id: 1,
      imageSrc: 'https://theme.zdassets.com/theme_assets/2197739/aed6500f4da41c641f3de5d96247eb6654e9c386.png',
      heading: 'Using Abstract',
      text: 'Abstract lets you manage, version, and document your designs in one place.',
      link: '#',
    },
    {
        id: 2,
        imageSrc: 'https://theme.zdassets.com/theme_assets/2197739/91588b3d042df901d9b941ccbb57af4f151401c7.png',
        heading: 'Manage your account',
        text: 'Configure your account settings, such as your email, profile details, and password.',
        link: '#',
      },
      {
        id: 3,
        imageSrc: 'https://theme.zdassets.com/theme_assets/2197739/50d0db451c0e1e66e1caddd142986fcf6792ca05.png',
        heading: 'Manage organizations, teams, and projects',
        text: 'Use Abstract organizations, teams, and projects to organize your people and your work.',
        link: '#',
      },
      {
        id: 4,
        imageSrc: 'https://theme.zdassets.com/theme_assets/2197739/3e82d0126e97d7b7c60a611d4e11b3c278d33743.png',
        heading: 'Manage billing',
        text: 'Change subscriptions and payment details. Get Payment done easily.',
        link: '#',
      },
      {
        id: 5,
        imageSrc: 'https://theme.zdassets.com/theme_assets/2197739/7712592465ef5c7bf18f1c7cb16e19ab44eb81e3.png',
        heading: 'Authenticate to Abstract',
        text: 'Set up and configure SSO, SCIM, and Just-in-Time provisioning.',
        link: '#',
      },
      {
        id: 6,
        imageSrc: 'https://theme.zdassets.com/theme_assets/2197739/dcc25d18e224d12621d74e545cc8bdd1b5685ca8.png',
        heading: 'Abstract support',
        text: 'Get in touch with a human and get your queries solved easily..',
        link: '#',
      }
  ];

  return (
    <div className="container mx-auto px-4 py-8 mt-10 mb-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mx-8 md:mx-2">
        {cardsData.map((card) => (
          <div key={card.id} className="bg-white  rounded-lg overflow-hidden mt-6">
            <div className="flex sm:flex-row">
              <div className="md:w-1/3">
                <img src={card.imageSrc} alt="Card" className="w-28 h-auto" />
              </div>
              <div className="md:w-2/3 px-4 pb-4">
                <h2 className="text-lg font-bold mb-2">{card.heading}</h2>
                <p className="text-black text-lg">{card.text}</p>
                <a href={card.link} className="inline-block mt-4 text-blue-500 hover:underline">Learn More <svg className="w-4 h-4 inline-block ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg></a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardContainer;










