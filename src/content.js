
const contentMap =
    {
        intro: {
            name: 'intro',
            component: 'Hero',
            content: {
                title: `Break the design barrier`,
                body: [
                    `Be a pioneer in charting a new way of designing and developing at the 
            Firm.`,
                    `With the new McKinsey Design System you'll finally be able to re-use, 
            share and deliver more consistent experiences at the speed of delight. `
                ]
            }
        },
        overview: {
            component: 'Grid',
            content: [
                {
                    title: 'Designers',
                    body: [
                        `Access a subset of our core design elements and illustration kit
                        available as Sketch libraries.`
                    ],
                    links: [
                        `Get started: The Design System for Designers`,
                        `Understand Our Design Principles`,
                        `Download the Sketch Library`
                    ]
                },
                {
                    title: 'Developers',
                    body: [
                        `Leverage a new set of tools that are coming soon to the McKinsey Design System and is built for developers.`
                    ],
                    links: [
                        `Get started: The Design System for Developers`,
                    ]
                }
            ]
        },
        resources: {
            component: 'TileBoard',
            content: {
                title: {
                    heading: `Design System Resources`,
                    subheading: `Our Design System is in its earliest stages of development.  Available below are resources we're actively evolving in 
                collaboration with the design and development community. Want to collaborate with us or have ideas or comments? Contact us.`
                },
                info: [
                    {
                        content: [
                            {
                                title: `Core Sketch Library`,
                                body: [
                                    `We recommend downloading and installing our core components
                            as a Sketch Library.`
                                ],
                                links: [
                                    `Download`
                                ]
                            },
                            {
                                title: `Illustration Sketch Library`,
                                body: [
                                    `Our popular library of homemade illustrations has been updated and ready for internal use.`
                                ],
                                links: [
                                    `Download`
                                ]
                            },
                            {
                                title: `Forms & table components`,
                                body: [
                                    `All you need to build layouts requiring forms and table components.`
                                ],
                                links: [
                                    `Coming soon`
                                ]
                            },
                            {
                                title: `Dashboards`,
                                body: [
                                    `Components and patterns to let you build various dashboard layouts.`
                                ],
                                links: [
                                    `Coming soon`
                                ]
                            }
                        ]
                    },
                    {
                        content: [
                            {
                                title: `Bootstrap 4.3.1 Theme`,
                                body: [
                                    `The very popular framework will be themed and available`
                                ],
                                links: [
                                    `Coming soon - Q4 2019`
                                ]
                            },
                            {
                                title: `React Component Library`,
                                body: [
                                    `The first wave of basic components will be made available later in the year.`
                                ],
                                links: [
                                    `Coming soon - Q4 2019`
                                ]
                            },
                            {
                                title: `Drupal Golden Image`,
                                body: [
                                    `To support our Drupal needs, we will build a theme ready for install and use.`
                                ],
                                links: [
                                    `Coming soon`
                                ]
                            },
                            {
                                title: `McKinsey CDN`,
                                body: [
                                    `Commonly used assets like Firm fonts and scriptmarks.  More will be added as identified.`
                                ],
                                links: [
                                    `Reference`
                                ]
                            }
                        ]
                    }
                ]
            }
        },
        roadmap: {
            component: 'ImageView',
            content: {
                title: {
                    heading: `Roadmap`,
                    subheading: `Our team is actively working on creating an entirely new set of guidelines
                to replace our previous UIG. Our new design system will provide both an exhaustive set of components for designers to create and a robust set of technologies for developers to build.`
                },
                info: 'Roadmap-Desktop.png'
            }
        },
        community: {
            component: 'Hero',
            content: {
                title: 'Join the community',
                body: [
                    `This effort is being built in collaboration between our community of designers and developers.`,
                    `We all share the same passion to build a robust system that makes our work more efficient
            so we actively come together to plan problem solve and build collectively.`,
                    `Come join other pioneers as we take small steps towards working better.`,
                    `Find us on Slack #ddls-community`,
                    `Contact us via desig_system@mckinsey.com`
                ]
            }
        },
        faq: {
            component: 'FaqList',
            content: [
                {
                    question: `Where do I get help applying the new Visual identity styles?`,
                    answer: `The styles are quite new and we're developing guidelines as we speak. There is early guidance
            available on the Sketch Kit, however, we are asking teams to share their explorations on the Slack
            channel so the new DDLS team might help guide them.`
                },
                {
                    question: `How should I apply the partnership mark?`,
                    answer: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
                labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi 
                ut aliquip ex ea commodo consequat.`
                }
            ]
        }
    };

export default contentMap;