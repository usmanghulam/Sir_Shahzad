import React, { Component } from 'react';
import Nav from './nav';
// import {BrowserRouter as Router} from 'react-browser-router';
import Header from './header';
import Strategy from './strategy';
import Section3 from './section3';
import {Footer} from './footer';
class App extends Component {
    state = {

        Component1: [
            {
                headings: {
                    h1: "Free to start, with room to grow."
                },
                paragraph: {
                    p1: "Whether it’s a website, online store, portfolio, or blog, our plans scale with your dreams. All you need is an idea and an internet connection."
                }
            }
        ],
        Component2: [
            {
                heading: "Personal",
                dollar: "5$",
                monthly: "per month, billed yearly",
                smallHeading: "Best for Personal Use:",
                p: "Boost your website with a custom domain name, and remove all WordPress.com advertising. Get access to high‑quality email and live chat support.",
                btn: "Start with Personal",
                img: "https://s1.wp.com/wp-content/themes/h4/landing/marketing/pages/_common/components/plan-blogger/media/icon.svg?v=201901"
            },
            {
                heading: "Premium",
                dollar: "$8",
                monthly: "per month, billed yearly",
                smallHeading: "Best for Entrepreneurs & Freelancers:",
                p: "Build a unique website with advanced design tools, CSS editing, lots of space for audio and video, and the ability to monetize your site with ads.",
                btn: "Start with Premium",
                img: "https://s1.wp.com/wp-content/themes/h4/landing/marketing/pages/_common/components/plan-personal/media/icon.svg?v=201901"
            },
            {
                heading: "Blogger",
                dollar: "3$",
                monthly: "per month, billed yearly",
                smallHeading: "Best for Bloggers:",
                p: "Brand your blog with a custom .blog domain name, and remove all WordPress.com advertising. Receive additional storage space and email support.",
                btn: "Start with Blogger",
                img: "https://s1.wp.com/wp-content/themes/h4/landing/marketing/pages/_common/components/plan-premium/media/icon.svg?v=201901"
            },
            {
                heading: "Premium",
                dollar: "$8",
                monthly: "per month, billed yearly",
                smallHeading: "Best for Entrepreneurs & Freelancers:",
                p: "Build a unique website with advanced design tools, CSS editing, lots of space for audio and video, and the ability to monetize your site with ads.",
                btn: "Start with Premium",
                img: "https://s1.wp.com/wp-content/themes/h4/landing/marketing/pages/_common/components/plan-premium/media/icon.svg?v=201901"
            },
            {
                heading: "Business",
                dollar: "$25",
                monthly: "per month, billed yearly",
                smallHeading: "Best for Small Businesses:",
                p: "Power your business website with unlimited premium and business theme templates, Google Analytics support, unlimited storage, and the ability to remove WordPress.com branding.",
                btn: "Start with Business",
                img: "https://s1.wp.com/wp-content/themes/h4/landing/marketing/pages/_common/components/plan-business/media/icon.svg?v=201901"
            },
            {
                heading: "eCommerce",
                dollar: "$45",
                monthly: "per month, billed yearly",
                smallHeading: "Best for Online Stores:",
                p: "Sell products or services with this powerful, all‑in‑one online store experience. This plan includes premium integrations and is extendable, so it’ll grow with you as your business grows.",
                btn: "Start with eCommerce",
                img: "https://s1.wp.com/wp-content/themes/h4/landing/marketing/pages/_common/components/plan-ecommerce/media/icon.svg?v=201901"
            }
        ],
        Component3: [
            {
                img: "https://s1.wp.com/wp-content/themes/h4/landing/marketing/pages/_common/components/plan-free/media/icon.svg?v=201901",
                p: "A free WordPress.com site includes a WordPress.com subdomain, community support, dozens of free themes, basic design customization, and more",
                h1: "What can you do on WordPress.com?",
                p2:"WordPress.com gives you everything you need to create anything you want.It’s flexible, secure, and powerful, just like you want your business to be.",
                FourDivs:[
                    {
                        icon: "fas fa-heart",
                        h: "Build a fan base.",
                        p: "Promote your products, use advanced statistics and SEO tools, and connect with built-in audiences on social media to grow your business.",
                    },
                    {
                        icon: "fas fa-cart-plus",
                        h: "Open a store.",
                        p: "Process payments, configure taxes and shipping, build a marketing plan—you make the widgets, we’ll make the website.",
                    },
                    {
                        icon: "fas fa-blog",
                        h: "Start a blog.",
                        p: "Everyone has a point of view. Make your mark online with the world’s greatest blogging tool, and join a community millions strong that’s waiting to hear what you have to say.",
                    },
                    {
                        icon: "fas fa-umbrella-beach",
                        h: "Design a portfolio.",
                        p: "Thousands of themes means there’s a layout that’s just right for you, while storage and design options ensure you can upload anything you need to and give your work the stage it deserves.",
                    }
                ],
                BigHeading: "Getting started is easy.",
                btn: "Sing Up For Free"
            }
        ],

        Footer: [
            {
                Heading1: 
                { 
                    h1: "Corporate HQ ->",
                    h2: "Dubai",
                    h3: "Lahore",
                    h4: "London",
                    h5: "Montreal",
                    h6: "Singapore",
                    h7: "Sydney"
                },
                Heading2: [
                    {
                        Info:{
                            address: "1300 Island Drive Suite 105 Redwood City, CA 94065 USA",
                            phone: "+1.650.593.5400"
                        },
                        h1: "General Inquiries",
                        p1: "connect@i2cinc.com",
                        h2: "Sales",
                        p2: "sales@i2cinc.com",
                        h3: "Job Opportunities",
                        p3: "careers@i2cinc.com",
                        btn: "Submit"
                    }
                ]
            }
        ]
    }
    render(){
        return (
        <div>
                <Nav />
                <Header/>
                <Strategy section1={this.state.Component1} section2={this.state.Component2} />
                <Section3 section3 = {this.state.Component3} />
                <Footer submitSection={this.state.Footer} />
        </div>
        )
    }
}

export default App;