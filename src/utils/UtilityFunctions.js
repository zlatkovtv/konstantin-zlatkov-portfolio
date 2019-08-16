export const getTransitionPercentage = () => {
    var percentageGrow = 1 - (window.pageYOffset / getWindowDimensions());
    if(percentageGrow < 0 ) {
        return 0;
    }
    
    return percentageGrow;
}

export const getWindowDimensions = () => {
    const { innerHeight: height } = window;
    return height;
};