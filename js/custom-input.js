

// -----------------------------------------------------------------------------------------------------
// @ Event methods
// -----------------------------------------------------------------------------------------------------

// TODO: onKeyUp function created instead of onChange
const onKeyUp = () => {
    const value = getValue('myInput');
    setClearButtonVisibility(isEmptyOrNullOrUndefined(value));
};

const onChange = () => {
};

const onFocus = () => {
};

const onClearInput = () => {
    setValue('myInput', '');
    setClearButtonVisibility(true);
};

// -----------------------------------------------------------------------------------------------------
// @ Helper functions
// -----------------------------------------------------------------------------------------------------

function setClearButtonVisibility(isEmpty){
    const clearButton = document.getElementById('clearButton');
    clearButton.style.visibility = isEmpty ? 'hidden' : 'visible';
}

function isEmptyOrNullOrUndefined(val){
    return val === undefined || val === '' || val === null ? true : false;
}

function getValue(id){
    const myInput = document.getElementById(id);
    return myInput.value;
}

function setValue(id, val){
    const myInput = document.getElementById(id);
    myInput.value = val;
}

function setDisabled(id){
    const myInput = document.getElementById(id);
    myInput.disable();
}

function setEnabled(id){
    const myInput = document.getElementById(id);
    myInput.enable();
}
