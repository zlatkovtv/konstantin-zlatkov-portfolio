export const getTransitionPercentage = () => {
    var { height, width } = getWindowDimensions();
    if(width <= 600) {
        return 0;
    }

    var percentageGrow = 1 - (window.pageYOffset / height);
    if(percentageGrow < 0 ) {
        return 0;
    }
    
    return percentageGrow;
}

export const getWindowDimensions = () => {
    const { innerHeight: height, innerWidth: width } = window;
    return {
        height,
        width
    };
};

export const goToSocialMedia = (link) => {
    window.open(link, "_blank")
};