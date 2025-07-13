//WomenShirts
import CoatsWomen from "../assets/img/CoatsWomen.jpeg";
import HoodieWomen from "../assets/img/HoodieWomen1.jpg";
import ShortsWomen from "../assets/img/ShortsWomen.jpeg";
import TshirtWomen from "../assets/img/TshirtWomen.jpeg";
//MenShirts
import HoodieMen from "../assets/img/HoodieMenP.jpg";
import JeansMen from "../assets/img/JeansMenP1.jpg";
import ShirtsMen from "../assets/img/ShirtsMenP.jpg";
import TshirtMen from "../assets/img/TshirtsMen.jpg";
export default {
  categories: [
    {
      title: "Categories For Women",
      data: [
        {
          title: "Coats & Parkas",
          description: "Explore Now!",
          image: CoatsWomen,
        },

        {
          title: "Hoodies & Sweatshirt",
          description: "Explore Now!",
          image: HoodieWomen,
        },
        {
          title: "Tees & T-Shirt",
          description: "Explore Now!",
          image: TshirtWomen,
        },
        {
          title: "Shorts",
          description: "Explore Now!",
          image: ShortsWomen,
        },
      ],
    },
    {
      title: "Categories For Men",
      data: [
        {
          title: "Shirts",
          description: "Explore Now!",
          image: ShirtsMen,
        },
        {
          title: "Jeans",
          description: "Explore Now!",
          image: JeansMen,
        },
        {
          title: "Tshirts",
          description: "Explore Now!",
          image: TshirtMen,
        },

        {
          title: "Hoodies & SweatShirt",
          description: "Explore Now!",
          image: HoodieMen,
        },
      ],
    },
  ],
  footer: {
    items: [
      {
        title: "Need Help",
        list: [
          {
            label: "Contact Us",
            path: "/contact-us",
          },
          {
            label: "Track Order",
            path: "/track-order",
          },
          {
            label: "Returns & Refunds",
            path: "/track-order",
          },
          {
            label: "FAQ`s",
            path: "/faq",
          },
          {
            label: "Career",
            path: "/career",
          },
        ],
      },
      {
        title: "Company",
        list: [
          {
            label: "About Us",
            path: "/about",
          },
          {
            label: "Media",
            path: "/media",
          },
        ],
      },
      {
        "title":"More Info",
        "list":[
          {
            "label":"Terms and Conditions",
            "path":"/terms-condition"
          },
          {
            "label":"Privacy Policy",
            "path":"/policies"
          },
          {
            "label":"Shipping Policy",
            "path":"/policies"
          },
        ]
      },
      {
        "title":"Location",
        "description":"Location Country",
      }
    ],
    "copyright":"© DiVastra 202. All Rights Reserved."
  },
};
