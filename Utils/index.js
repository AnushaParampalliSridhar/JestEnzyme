import checkPropTypes from 'check-prop-types';

export const findByDataTestAttribute = (component,attributeValue) => {
    const result = component.find(`[data-test='${attributeValue}']`);
    return result;
}

export const checkProps = (component,expectedProps) => {
    const propsError = checkPropTypes(component.propTypes,expectedProps,'props',component.name);
    return propsError;
}