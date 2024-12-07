import { test, expect } from '@playwright/test';
import { describe } from 'node:test';

//single test basic structure
test('my test', () =>{

});

//test suite
test.describe('test suite 1', () =>{

//some precondition if needed

test('test 1', () =>{

});

test('test 2', () =>{

});

});

test.describe('test suite 2', () =>{

    //another precondition if needed
    
    test('test 1', () =>{
    
    });
    
    test('test 2', () =>{
    
    });
    
    });


//real test
// page -> fixture opening the blank page
// goto -> method (return promise)

test.only('firstTest', async ({page}) =>{
    await page.goto('https://the-internet.herokuapp.com/')

});


