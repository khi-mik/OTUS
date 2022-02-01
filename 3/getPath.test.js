const getPath = require('./getPath');

test('getPath for [9] Element should return an unique selector', () => {
    const testElement = document.getElementsByTagName("*")[9];
    expect(testElement).not.toBeUndefined();

    const selector = getPath(testElement);
    expect(selector).not.toBe('');

    let count = document.querySelectorAll(selector).length;  
    expect(count).toBe(1);
});

[ 5, 8, 10, 14 ].forEach(
    function(item) {
    
        test(`getPath for [${item}] element should return an unique selector`, () => {
            const testElement = document.getElementsByTagName("*")[item];
            expect(testElement).not.toBeUndefined();
        
            const selector = getPath(testElement);
            expect(selector).not.toBe('');
        
            let count = document.querySelectorAll(selector).length;  
            expect(count).toBe(1);
        });

    }
);