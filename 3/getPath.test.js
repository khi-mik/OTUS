const getPath = require('./getPath');


let elemIndex = 9;

test('Searched element should not be undefined', () => {
    const testElement = document.getElementsByTagName("*")[elemIndex];
    expect(testElement).not.toBeUndefined();
});

test('Selector for the searched element should not be empty', () => {
    const testElement = document.getElementsByTagName("*")[elemIndex];
    const selector = getPath(testElement);
    expect(selector).not.toBe('');
});

test('getPath() should return selector for an unique element', () => {
    const testElement = document.getElementsByTagName("*")[elemIndex];
    const selector = getPath(testElement);
    let count = document.querySelectorAll(selector).length;  
    expect(count).toBe(1);
});


[ 5, 8, 10, 14 ].forEach(
    function(item) {
        test(`getPath() for element[${item}] should return an unique selector`, () => {
            const testElement = document.getElementsByTagName("*")[item];
            expect(testElement).not.toBeUndefined();
        
            const selector = getPath(testElement);
            expect(selector).not.toBe('');
        
            let count = document.querySelectorAll(selector).length;  
            expect(count).toBe(1);
        });
    }
);
