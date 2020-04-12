function getElementVar(x) {
    var elementVar = document.getElementById(x);
    return elementVar;
}

function searchYoutube() {
    var searchInput = getElementVar("searchInput");
    var enteredSearch = searchInput.value;
    framework_search(enteredSearch);
}

function viewChannel() {
    var searchInput = getElementVar("searchInput");
    var enteredChannel = searchInput.value;
    framework_searchChannel(enteredChannel);
}
