import Vector1 from '../assets/Icons/Vector1.svg';
import Vector2 from '../assets/Icons/Chart.svg';
import vector3 from '../assets/Icons/vector3.svg';
import Vector4 from '../assets/Icons/vector4.svg';
import Vector5 from '../assets/Icons/vector5.svg';
import Vector6 from '../assets/Icons/Vector6.svg';
import GreenStar from '../assets/Icons/GreenStar1.svg';
import GrayStar from '../assets/Icons/GrayStar.svg';
import GreenTick from '../assets/Icons/GreenTick.svg';
import GrayTick from '../assets/Icons/GrayTick.svg';

import image from "../assets/Icons/cardIcon.svg"
import image1 from "../assets/Icons/card2.svg"
import image2 from "../assets/Icons/card3.svg"

import images1 from "../assets/Icons/1st.svg";
import images2 from "../assets/Icons/second.svg";
import images3 from "../assets/Icons/3rd.svg";

import a1 from "../assets/Icons/A2.svg"
import a2 from "../assets/Icons/A1.svg"
import a3 from "../assets/Icons/A3.svg"
import a4 from "../assets/Icons/A4.svg"

import s1 from "../assets/Icons/s1.svg"
import s2 from "../assets/Icons/s2.svg"
import s3 from "../assets/Icons/s3.svg"
import s4 from "../assets/Icons/s4.svg"

type SegmentItem = {
  id: number;
  icon: any;
  data: string;
  content1: string;
};

export const PricingCardList = [
  {
    id: 1,
    icon: Vector1,
    content: 'Unified Inbox',
  },
  {
    id: 2,
    icon: Vector2,
    content: 'Conversational Insights',
  },
  {
    id: 3,
    icon: vector3,
    content: 'WhatsApp Broadcasts',
  },
  {
    id: 4,
    icon: Vector4,
    content: 'Contacts Management',
  },
  {
    id: 5,
    icon: Vector5,
    content: 'Customer Journey',
  },
  {
    id: 6,
    icon: Vector6,
    content: 'API Solutions',
  },
];

export const pricing = [
  {
    id: 1,
    title: 'Starter',
    custom: false,
    popular: false,
    // icon: images?.Starter,
    monthly: {
      price: '3,000',
      verification: 'Business Verification',
      tick: GreenStar,
      tick1: GrayStar,
      tick2: GreenTick,
      tick3: GrayTick,
    },
    // quarterly: {
    //     price: "9,000",
    //     verification: "Business Verification",
    //     tick:  GreenStar,
    //     tick1: GrayStar,
    //     tick2: GreenTick,
    //     tick3:GrayTick,

    // },
    yearly: {
      price: '30,000',
      verification: 'Business Verification',
      tick: GreenStar,
      tick1: GrayStar,
      tick2: GreenTick,
      tick3: GrayTick,
    },
    content:
      'For startups and solopreneurs looking to build a business acrossdigital platforms',
    btnText: 'Get Started',
  },
  {
    id: 2,
    title: 'Growth',
    custom: false,
    popular: true,
    // icon: images?.Growth,
    monthly: {
      price: '5,000',
      verification: 'Business Verification',
      tick: GreenStar,
      tick1: GreenStar,
      tick2: GreenTick,
      tick3: GreenTick,
    },
    // quarterly: {
    //   price: "15,000",
    //     verification: "Business Verification",
    //    tick:  GreenStar,
    //     tick1: GreenTick,
    //  tick2: GreenTick,
    // tick3: GreenTick,

    // },
    yearly: {
      price: '50,000',
      verification: 'Business Verification',
      tick: GreenStar,
      tick1: GreenStar,
      tick2: GreenTick,
      tick3: GreenTick,
    },
    content:
      'For small to mid-scale businesses looking to expand their business growth',

    btnText: 'Get Started',
  },
  {
    id: 3,
    title: 'Magnum',
    custom: true,
    popular: false,
    // icon: images?.Magnum,
    monthly: {
      price: '2,500',
      verification: 'Business Verification',
      tick: GreenStar,
      tick1: GreenStar,
      tick2: GreenTick,
      tick3: GreenTick,
    },
    // quarterly: {
    //   price: "2,500",
    //   verification: "Business Verification",
    //  tick:  GreenStar,
    //     tick1: GreenTick,
    //  tick2: GreenTick,
    // tick3: GreenTick,
    // },
    yearly: {
      price: '25,000',
      verification: 'Business Verification',
      tick: GreenStar,
      tick1: GreenStar,
      tick2: GreenTick,
      tick3: GreenTick,
    },
    content:
      'For enterprise businesses looking for a fully featured customizable business suite',
    btnText: 'Contact Sales',
  },
];

type PriceDetails = {
  price: string;
  verification: string;
  tick: React.ReactNode;
  tick1: React.ReactNode;
  tick2: React.ReactNode;
  tick3: React.ReactNode;
};
type ItemType = {
  id: number;
  icon: any;
  content1: string;
  data?: string; // Mark `data` as optional
};

export interface PricingListTypes {
  title: string;
  id: number;
  custom: boolean;
  popular: boolean;
  monthly: PriceDetails;
  yearly: PriceDetails;
  content: string;
  btnText: string;
  [key: string]: any;
}

export const MonthList = [
  {
    id: 1,
    name: 'Starter',
    value: '₹1000',
    text: ' / Month',
  },
  {
    id: 2,
    name: 'Growth',
    value: '₹2,500',
    text: ' / Month',
  },
  {
    id: 3,
    name: 'Magnum',
    value: 'Custom',
  },
];

export const AnnualList = [
  {
    id: 1,
    name: 'Starter',
    value: '₹10,000',
    text: ' / Yearly',
  },
  {
    id: 2,
    name: 'Growth',
    value: '₹25,000',
    text: ' / Yearly',
  },
  {
    id: 3,
    name: 'Magnum',
    value: 'Custom',
  },
];

export const CampaignList = [
  {
    id: 1,
    title: 'campaigns',
    color: 'white',
    border: '#6940F2',
    borderBottom:'#6940F2',
    // icon: ICONS?.CampaignIcon,
    subtitle: [
      {
        id: 1,
        name: 'Broadcast Campaigns',
        icon: GreenTick,
        icon2: GreenTick,
        icon3: GreenTick,
      },
      {
        id: 2,
        name: 'Segmented WhatsApp Broadcast',
        icon: GreenTick,
        icon2: GreenTick,
        icon3: GreenTick,
      },
      {
        id: 3,
        name: 'WhatsApp Send Now',
        icon: GreenTick,
        icon2: GreenTick,
        icon3: GreenTick,
      },
      {
        id: 4,
        name: 'WhatsApp Send Later',
        icon: GrayTick,
        icon2: GreenTick,
        icon3: GreenTick,
      },
      {
        id: 5,
        name: 'Campaign Analytics',
        icon: GreenTick,
        icon2: GreenTick,
        icon3: GreenTick,
      },
      {
        id: 6,
        name: 'Sequence Campaigns ',
        icon: GrayTick,
        icon2: GreenTick,
        icon3: GreenTick,
        content: 'Upcoming',
      },
      {
        id: 7,
        name: 'Trigger Campaigns',
        icon: GrayTick,
        icon2: GreenTick,
        icon3: GreenTick,
        content: 'Upcoming',
      },
    ],
  },
  {
    id: 2,
    title: 'Team Management',
    color: '#F9AD68',
    border: '#F9AD68',
    subtitle: [
      {
        id: 1,
        name: 'Team Management',
        icon: GreenTick,
        icon2: GreenTick,
        icon3: GreenTick,
      },
      {
        id: 2,
        name: 'No. of Users',
        icon: GreenTick,
        icon2: GreenTick,
        icon3: GreenTick,
      },
      {
        id: 3,
        name: 'Additional Users',
        icon: GrayTick,
        icon2: GreenTick,
        icon3: GreenTick,
      },
    ],
  },
  {
    id: 3,
    title: 'Unified Inbox',
    color: '#0ACD95',
    border: '#0ACD95',
    subtitle: [
      {
        id: 1,
        name: 'WhatsApp Inbox',
        icon: GreenTick,
        icon2: GreenTick,
        icon3: GreenTick,
      },
      {
        id: 2,
        name: 'Inbox Template Messages',
        icon: GreenTick,
        icon2: GreenTick,
        icon3: GreenTick,
      },
      {
        id: 3,
        name: 'Chat History',
        icon: GreenTick,
        icon2: GreenTick,
        icon3: GreenTick,
        lifeTime: 'last 30 days',
        lifeTime1: 'last 6 Months ',
        lifeTime2: 'Life Time',
      },
      {
        id: 4,
        name: 'Team Inbox',
        icon: GrayTick,
        icon2: GreenTick,
        icon3: GreenTick,
      },
      {
        id: 5,
        name: 'Assign Users',
        icon: GrayTick,
        icon2: GreenTick,
        icon3: GreenTick,
      },
      {
        id: 6,
        name: 'Quick Replies',
        icon: GrayTick,
        icon2: GreenTick,
        icon3: GreenTick,
        content: 'Upcoming',
      },
    ],
  },
  {
    id: 4,
    title: 'CRM',
    color: '#E014F2',
    border: '#E014F2',
    subtitle: [
      {
        id: 1,
        name: 'Contact Management ',
        icon: GreenTick,
        icon2: GreenTick,
        icon3: GreenTick,
      },
      {
        id: 2,
        name: 'Bulk Import',
        icon: GreenTick,
        icon2: GreenTick,
        icon3: GreenTick,
        limit: '(Up to 10000)',
        limit1: '(Up to 25000)',
        limit2: '(Up to 100000)',
      },
      {
        id: 3,
        name: 'Bulk Export',
        icon: GreenTick,
        icon2: GreenTick,
        icon3: GreenTick,
      },
      {
        id: 4,
        name: 'Contact Details & Profile Building',
        icon: GrayTick,
        icon2: GreenTick,
        icon3: GreenTick,
      },
      {
        id: 5,
        name: 'Customer Journey',
        icon: GrayTick,
        icon2: GreenTick,
        icon3: GreenTick,
      },
      {
        id: 6,
        name: 'Conversation Insights ',
        icon: GrayTick,
        icon2: GreenTick,
        icon3: GreenTick,
        content: 'Upcoming',
      },
      {
        id: 7,
        name: 'Tags',
        icon: GrayTick,
        icon2: GreenTick,
        icon3: GreenTick,
        content: 'Upcoming',
      },
      {
        id: 8,
        name: 'Audience Groups',
        icon: GrayTick,
        icon2: GreenTick,
        icon3: GreenTick,
        content: 'Upcoming',
      },
      {
        id: 9,
        name: 'Assign Contacts to Team Members',
        icon: GrayTick,
        icon2: GreenTick,
        icon3: GreenTick,
        content: 'Upcoming',
      },
      {
        id: 10,
        name: 'Advanced Filters',
        icon: GrayTick,
        icon2: GreenTick,
        icon3: GreenTick,
        content: 'Upcoming',
      },
    ],
  },
  {
    id: 5,
    title: 'Support',
    title2: ' Monday-Saturday, 10:00 AM - 6:00 PM IST',
    color: '#3663FA',
    border: '#3663FA',

    subtitle: [
      {
        id: 1,
        name: 'Email Support',
        icon: GreenTick,
        icon2: GreenTick,
        icon3: GreenTick,
      },
      {
        id: 2,
        name: 'Chat Support',
        icon: GrayTick,
        icon2: GreenTick,
        icon3: GreenTick,
      },
      {
        id: 3,
        name: 'On-Call Support',
        icon: GrayTick,
        icon2: GreenTick,
        icon3: GreenTick,
      },
      {
        id: 4,
        name: '24/7 Support',
        icon: GrayTick,
        icon2: GreenTick,
        icon3: GreenTick,
      },
      {
        id: 5,
        name: 'Live Onboarding Support',
        icon: GrayTick,
        icon2: GreenTick,
        icon3: GreenTick,
      },
      {
        id: 6,
        name: 'Dedicated Account Manager',
        icon: GrayTick,
        icon2: GrayTick,
        icon3: GreenTick,
        content: 'Upcoming',
      },
    ],
  },
  {
    id: 6,
    title: 'API & Webhooks',
    color: '#5EC953',
    border: '#5EC953',
    // icon: ICONS?.APIIcon,
    subtitle: [
      {
        id: 1,
        name: 'API Capabilities',
        icon: GreenTick,
        icon2: GreenTick,
        icon3: GreenTick,
      },
      {
        id: 2,
        name: 'Webhooks',
        icon: GrayTick,
        icon2: GreenTick,
        icon3: GreenTick,
      },
      {
        id: 3,
        name: 'Messages speed',
        speed: '100 Msg / sec',
        speed1: '300 Msg / sec',
        speed3: '1000 Msg / sec',
      },
    ],
  },
];
export const ConversationFeeList = [
  {
    id: 1,
    title: 'Business Initiated Conversations:',
    content: '( Marketing + Utility )',
  },
  {
    id: 2,
    title: 'User Initated Conversations:',
    content: '( Service conversations )',
  },
  {
    id: 3,
    title: 'Total Conversation Cost:',
  },
];

export const PlanList = [
  {
    id: 1,
    value: 'Stater',
    cost: '1000',
  },
  {
    id: 2,
    value: 'Growth',
    cost: '2,500',
  },
  {
    id: 3,
    value: 'Magnum',
    cost: 'CUSTOM',
  },
];

export const MarketingGoalsList = [
  {
    id: 1,
    icon: image,
    content: 'Anticipates ',
    content1: 'Market Trends',
    details:
      'Leverage AI to stay ahead by predicting market shifts with precision.',
  },
  // {
  //   id: 2,
  //   icon:image1,
  //   content: 'Generate ',
  //   content1: 'Target Audience',
  //   details:
  //     'AI-driven insights to identify and attract your ideal customers effortlessly.',
  // },
  // {
  //   id: 3,
  //       icon:image2,

  //   content: 'Specific ',
  //   content1: 'Channel Targeting',
  //   details:
  //     'Optimize outreach with AI-powered targeting for the most effective channels.',
  // },
];

export type MarketingGoalsListType = (typeof MarketingGoalsList)[0];


export const cardList = [
    {
      id: 1,
      icon: images1,
      // content: "Lorem Ipsum ",
      content1:
        "Leverage AI-powered bots to interact with customers in real-time on their favorite channels, providing seamless support and personalized guidance at every stage of their buying journey",
    },
    {
      id: 2,
      icon: images2,
      // content: "Lorem Ipsum ",
      content1:
        "Utilize AI to intelligently segment your audience and create hyper-personalized experiences tailored to their journey and purchase history, driving higher conversion rates.",
    },
    {
      id: 3,
      icon: images3,

      // content: "Lorem Ipsum ",
      content1:
        "Streamline sales, support, and marketing efforts from one place and increase maximum efficiency. ",
    },
];
  
export type CardListType = (typeof cardList)[0];

export const StrargyList = [
    {
      id: 1,
      icon: a1,
      // content: "Lorem Ipsum ",
      content1:"Data-Driven Precision"
    },
    {
      id: 2,
      icon: a2,
      // content: "Lorem Ipsum ",
      content1:"Real-Time Adjustments"
    },
    {
      id: 3,
      icon: a3,

      // content: "Lorem Ipsum ",
      content1: "Comprehensive and Easy-to-Use"
  },
      {
      id: 4,
      icon: a4,

      // content: "Lorem Ipsum ",
      content1: "Future-Proof Strategy"
    },
];

export type StrargyType = (typeof cardList)[0];

export const SegmentList: SegmentItem[] = [
    {
      id: 1,
      icon: a1,
      data: "Analyze Customer Data ",
      content1:"Our AI processes all available customer data — from demographics to behavioral patterns — to identify unique, actionable segments."
    },
    {
      id: 2,
      icon: s2,
      data: "Automate and Customize Segments ",
      content1:"Let the AI generate key segments automatically, or use custom filters to build your own."
    },
    {
      id: 3,
      icon: s3,

      data: "Engage Across Channels ",
      content1: "Sync these segments across your marketing channels, ensuring unified, personalized messaging everywhere"
  },
      {
      id: 4,
      icon: s4,

      data: "Monitor and Optimize ",
      content1: "Track performance metrics for each segment in real-time and use our insights to continually refine and enhance targeting."
    },
];

export type SegmentType = (typeof cardList)[0];