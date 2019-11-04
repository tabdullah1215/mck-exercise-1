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

const size = {
    mobileS: '320px',
    mobileM: '375px',
    mobileL: '425px',
    tablet: '768px',
    laptop: '1024px',
    laptopL: '1440px',
    desktop: '2560px'
};

const device = {
    mobileS: `(min-width: ${size.mobileS})`,
    mobileM: `(min-width: ${size.mobileM})`,
    mobileL: `(min-width: ${size.mobileL})`,
    tablet: `(min-width: ${size.tablet})`,
    laptop: `(min-width: ${size.laptop})`,
    laptopL: `(min-width: ${size.laptopL})`,
    desktop: `(min-width: ${size.desktop})`,
    desktopL: `(min-width: ${size.desktop})`
};

const cellHeight = {
    tileMode: {
        mobileS: 200,
        tablet: 250,
        laptop: 250,
        laptopL: 200
    },
    gridMode: {
        mobileS: 385,
        tablet: 310,
        laptop: 440,
        laptopL: 440
    }
};

export { headerStyles, device, cellHeight };