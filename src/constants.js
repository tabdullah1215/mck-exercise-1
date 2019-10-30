const navItems = [
    { heading: 'Intro', name: 'intro'},
    {heading: 'Overview', name: 'overview'},
    {heading: 'Resources', name: 'resources'},
    {heading: 'Roadmap', name: 'roadmap'},
    {heading: 'Community', name: 'community'},
    {heading: 'FAQ', name: 'faq'}
];

const headerStyles = {
    shrunk: {
        height: 65,
        shadowColor: 'lightgrey',
        paddingTop: 0.5 + 'em',
        picWidth: 112,
        picHeight: 35,
        navPadding: 15
    },
    initial: {
        height: 91,
        shadowColor: 'transparent',
        paddingTop: 1.5 + 'em',
        picWidth: 140,
        picHeight: 44,
        navPadding: 20
    }
};

export default navItems;
export { headerStyles };