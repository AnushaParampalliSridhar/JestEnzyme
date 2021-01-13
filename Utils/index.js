export const findByDataTestAttribute = (component,attributeValue) => {
    const result = component.find(`[data-test='${attributeValue}']`);
    return result;
}