function compactts (arr) {
    if (arr.length > 0) {
        return arr.trim(0,10);
    }
    return arr;
}