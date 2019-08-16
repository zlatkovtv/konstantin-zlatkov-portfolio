export const getTransitionPercentage = () => {
    var percentageGrow = 1 - (window.pageYOffset / getWindowDimensions());
    return percentageGrow;
}

export const getWindowDimensions = () => {
    const { innerHeight: height } = window;
    return height;
};